/* eslint-disable react/jsx-no-useless-fragment */
import type { Meta, StoryObj } from '@storybook/react';

import PegaFieldAdditionalDetails from './index';
import { configProps, singleRecordResponse, multiRecordResponse } from './mock';

// ─── Demo table wrapper ───────────────────────────────────────────────────────

const tableStyle: React.CSSProperties = {
  borderCollapse: 'collapse',
  width: '100%',
  fontFamily: 'sans-serif',
  fontSize: '0.875rem',
  border: '1px solid rgb(207,207,207)',
  borderRadius: '4px',
  overflow: 'hidden'
};
const thStyle: React.CSSProperties = {
  backgroundColor: 'rgb(245,245,245)',
  padding: '10px 14px',
  textAlign: 'left',
  borderBottom: '1px solid rgb(207,207,207)',
  fontWeight: 600
};
const tdStyle: React.CSSProperties = {
  padding: '10px 14px',
  borderBottom: '1px solid rgb(207,207,207)',
  verticalAlign: 'middle'
};

const wrapperStyle: React.CSSProperties = {
  padding: '1.5rem',
  backgroundColor: '#f9f9f9',
  border: '1px solid rgb(225,225,225)',
  borderRadius: '6px'
};

/** Wraps a story in a realistic-looking host table so the button renders in context. */
const InTableDecorator =
  (rows: { ID: string; Status: string; Owner: string; Priority: string }[]) =>
  (Story: React.ComponentType) =>
    (
      <div style={wrapperStyle}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Owner</th>
            <th style={thStyle}>Priority</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.ID}>
              <td style={tdStyle}>{row.ID}</td>
              <td style={tdStyle}>{row.Status}</td>
              <td style={tdStyle}>{row.Owner}</td>
              <td style={tdStyle}>{row.Priority}</td>
              <td style={tdStyle}>
                <Story />
              </td>
            </tr>
          ))}        </tbody>
        </table>
      </div>
    );

// ─── PCore mock installer ─────────────────────────────────────────────────────

/**
 * Installs a `window.PCore` stub that resolves `getDataAsync` with the
 * provided mock payload.  Called inside each story's decorator so the
 * button click actually opens the modal in Storybook.
 */
function installPCoreMock(response: { data: Record<string, any>[] }) {
  (window as any).PCore = {
    getDataPageUtils: () => ({
      getDataAsync: () => Promise.resolve(response)
    })
  };
}

// ─── Shared getPConnect factory ───────────────────────────────────────────────

function makePConnect(contextData: Record<string, string> = {}) {
  return () =>
    ({
      getActionsApi: () => ({
        updateFieldValue: () => {},
        triggerFieldChange: () => {}
      }),
      ignoreSuggestion: () => {},
      acceptSuggestion: () => {},
      setInheritedProps: () => {},
      resolveConfigProps: () => {},
      getPageReference: () => 'caseInfo',
      getValue: () => contextData,
      getContextName: () => 'app/primary_1'
    }) as any;
}

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof PegaFieldAdditionalDetails> = {
  title: 'Pega/Field/Additional Details',
  component: PegaFieldAdditionalDetails,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Additional Details

The **Additional Details** component is a **Field-type** component that renders a single compact button. It is designed to be placed inside a table row's **Actions** column. When clicked it fires a lazy data page call using the current row's context as parameters, then presents the response in a modal overlay — no data is loaded until the user explicitly asks for it.

---

### Business Use Case

Agents working in a list view or work queue often need supplementary data for a specific row — linked orders, SLA history, enrichment data from an external system — without leaving the list or opening the full case. Clicking **View Details** surfaces that data instantly in a modal.

---

### Why a Custom Component?

The requirement called for a lightweight, on-demand detail viewer that could be dropped into any table row without pre-loading data. Specifically, the solution needed to:

- Accept a configurable data page and derive its parameters from the current row context automatically,
- Defer the fetch until the user explicitly requests it — keeping the list view fast and uncluttered,
- Adapt the modal layout based on whether the response contains a single record or multiple records.

A single, self-contained component was the cleanest way to meet all three requirements consistently across different use cases.

---

### Modal layout

The modal adapts automatically to the shape of the response:

| Response | Modal layout |
|---|---|
| **1 record** | Two-column key ↔ value table — label on the left, value on the right |
| **2+ records** | Full data table — one column per key, one row per record |
| **Empty / error** | Plain message: *"No data found."* or *"Unable to load details."* |

Keys listed in \`excludeKeys\` (default: \`pxObjClass\`) are stripped from every row before rendering. Underscores in key names are replaced with spaces and the text is capitalised automatically.

---

### Button sizing

The button uses \`display: inline-flex\` so it shrinks to its label width rather than stretching to fill its parent cell. This keeps it compact and visually consistent when embedded in narrow table columns.

---

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| \`buttonLabel\` | \`string\` | \`"Additional Details"\` | Text shown on the trigger button |
| \`dataPage\` | \`string\` | — | Name of the Pega data page to call on click (e.g. \`D_RowDetails\`) |
| \`dataPageParams\` | \`string\` | — | Comma-separated property names read from the current page context and forwarded as data page parameters (e.g. \`pyID,pxRefObjectKey\`) |
| \`excludeKeys\` | \`string\` | \`"pxObjClass"\` | Comma-separated response property keys to strip before rendering in the modal |

---

### Runtime behaviour

1. Component mounts — only the **button** is rendered, no fetch occurs.
2. User clicks the button — \`pConn.getValue(pConn.getPageReference())\` reads the current row context.
3. Only the keys listed in \`dataPageParams\` are extracted and passed as parameters to \`PCore.getDataPageUtils().getDataAsync(dataPage, context, params)\`.
4. On success — keys in \`excludeKeys\` are stripped, then the modal opens.
   - 1 record → key-value table.
   - 2+ records → data table.
5. On empty response or error — the modal opens with a plain text message.

> **In Storybook** \`window.PCore\` is mocked per story via a decorator, so the button resolves immediately with the sample payload defined in \`mock.ts\`.
        `
      }
    }
  },
  argTypes: {
    buttonLabel: {
      description: 'Text label rendered on the trigger button.',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Additional Details' }
      }
    },
    dataPage: {
      description: 'Name of the Pega data page to fetch on click (e.g. `D_RowDetails`).',
      control: 'text',
      table: { type: { summary: 'string' } }
    },
    dataPageParams: {
      description:
        'Comma-separated property names from the current row context forwarded as data-page parameters (e.g. `pyID,pxRefObjectKey`).',
      control: 'text',
      table: { type: { summary: 'string' } }
    },
    excludeKeys: {
      description:
        'Comma-separated response property keys to hide from the modal (e.g. `pxObjClass,pzInsKey`).',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'pxObjClass' }
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof PegaFieldAdditionalDetails>;

// ─── Shared base args ─────────────────────────────────────────────────────────

const defaultArgs = {
  buttonLabel: configProps.buttonLabel,
  dataPage: configProps.dataPage,
  dataPageParams: configProps.dataPageParams,
  excludeKeys: configProps.excludeKeys,
  getPConnect: makePConnect({ pyID: 'C-123', pxRefObjectKey: 'CASE C-123' })
};

// ─── Stories ──────────────────────────────────────────────────────────────────

/**
 * Base story — also exported so `composeStories` in `demo.test.tsx` can
 * reference it as `BasePegaFieldAdditionalDetails`.
 */
export const BasePegaFieldAdditionalDetails: Story = {
  name: 'Base',
  args: defaultArgs,
  decorators: [
    Story => {
      installPCoreMock(singleRecordResponse);
      return <Story />;
    }
  ]
};

export const Default: Story = {
  name: 'Single Record — Key/Value Modal',
  args: defaultArgs,
  decorators: [
    Story => {
      installPCoreMock(singleRecordResponse);
      return <Story />;
    },
    InTableDecorator([
      { ID: 'C-123', Status: 'Open', Owner: 'admin@mediaco', Priority: 'High' }
    ])
  ],
  parameters: {
    docs: {
      description: {
        story: `
Click **${configProps.buttonLabel}** to open the modal. Because the mock data page returns **one record**, the modal renders a two-column key ↔ value table.

**Mock response used in this story:**

\`\`\`json
${JSON.stringify(singleRecordResponse.data[0], null, 2)}
\`\`\`
        `
      },
      source: {
        code: `
<PegaFieldAdditionalDetails
  buttonLabel="View Details"
  dataPage="D_RowDetails"
  dataPageParams="pyID,pxRefObjectKey"
  excludeKeys="pxObjClass"
/>
        `
      }
    }
  }
};

export const MultipleRecords: Story = {
  name: 'Multiple Records — Table Modal',
  args: {
    ...defaultArgs,
    buttonLabel: 'View All Records'
  },
  decorators: [
    Story => {
      installPCoreMock(multiRecordResponse);
      return <Story />;
    },
    InTableDecorator(
      multiRecordResponse.data.map(r => ({
        ID: r.pyID,
        Status: r.Status,
        Owner: r.Owner,
        Priority: r.Priority
      }))
    )
  ],
  parameters: {
    docs: {
      description: {
        story: `
Click **View All Records** to open the modal. Because the mock data page returns **${multiRecordResponse.data.length} records**, the modal renders a full data table.

**Mock response used in this story (${multiRecordResponse.data.length} rows):**

\`\`\`json
${JSON.stringify(multiRecordResponse.data, null, 2)}
\`\`\`
        `
      },
      source: {
        code: `
<PegaFieldAdditionalDetails
  buttonLabel="View All Records"
  dataPage="D_RowDetails"
  dataPageParams="pyID,pxRefObjectKey"
  excludeKeys="pxObjClass"
/>
        `
      }
    }
  }
};

export const NoDataFound: Story = {
  name: 'No Data Found',
  args: defaultArgs,
  decorators: [
    Story => {
      (window as any).PCore = {
        getDataPageUtils: () => ({
          getDataAsync: () => Promise.resolve({ data: [] })
        })
      };
      return <Story />;
    }
  ],
  parameters: {
    docs: {
      description: {
        story:
          'When the data page returns an empty array the modal displays a **"No data found."** message instead of a table.'
      },
      source: {
        code: `
<PegaFieldAdditionalDetails
  buttonLabel="View Details"
  dataPage="D_RowDetails"
  dataPageParams="pyID,pxRefObjectKey"
  excludeKeys="pxObjClass"
/>
        `
      }
    }
  }
};

// Re-exported with the `Data` suffix so Storybook's
// `excludeStories: /.*Data$/` regex hides them from the sidebar.
export const singleRecordData = singleRecordResponse;
export const multiRecordData = multiRecordResponse;
