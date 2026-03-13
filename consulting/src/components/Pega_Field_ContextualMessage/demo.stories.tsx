/* eslint-disable react/jsx-no-useless-fragment */
import type { Meta, StoryObj } from '@storybook/react';

import { configProps } from './mock';

import PegaFieldContextualMessage from './index';

const meta: Meta<typeof PegaFieldContextualMessage> = {
  title: 'Pega/Field/Contextual Message',
  component: PegaFieldContextualMessage,
  excludeStories: /.*Data$/,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**Contextual Message** displays an inline, role-based notification banner inside a Pega Constellation form or page.

It supports four display variants — each with a distinct icon and colour — and fetches its message body from a configurable Pega data page at runtime.

---

### Business use case
This component is used to display a message based on user operations or as a static display — for example, confirming a submitted action, warning before a destructive step, or surfacing guidance relevant to the current form context.

---

### Why a custom component?
The requirement called for an inline notification banner that feels distinct from system-generated alerts and aligns with the application's own design language. Specifically, the solution needed to:

- Provide tighter control over layout, iconography, and colour so the banner matches the application's visual identity rather than inheriting the default platform theme.
- Keep user-facing contextual messages visually separate from system notifications — such as validation errors or server responses — so users can immediately distinguish between the two without ambiguity.
- Fetch its message body from a configurable data page at runtime, making the content fully manageable through the Pega platform without requiring code changes.

A single, self-contained component with four clearly defined variants was the cleanest way to meet all three requirements consistently.

---

### When to use
| Variant | Colour | Hex | Use for |
|---|---|---|---|
| \`warning\` | <span style="color:#FD6000">⬤</span> Orange | \`#FD6000\` | Non-blocking cautions, advisories |
| \`info\` | <span style="color:#6B7280">⬤</span> Grey | \`#6B7280\` | Neutral tips, guidance, background context |
| \`reminder\` | <span style="color:#681FC3">⬤</span> Purple | \`#681FC3\` | Prompts requiring follow-up action |
| \`speak\` | <span style="color:#00BCD4">⬤</span> Aqua | \`#00BCD4\` | Conversational guidance or operator instructions |

---

### Layout
The component renders at **full width** (\`width: 100%\`) and is always **left-aligned**, so it fills its parent container regardless of context. The alert wrapper receives a BEM modifier class of \`contextual-alert--{variant}\` (e.g. \`contextual-alert--warning\`) for targeted CSS overrides if needed.

---

### Icon and colour resolution
The icon SVG and heading colour are resolved inside a \`switch\` statement in \`getVariantConfig(variant)\`. Each variant returns a self-contained \`{ headingColor, icon }\` pair — there is no shared config object or separate icon component. SVG colours are hardcoded to match the variant, so no runtime prop is passed to the SVG.

---

### Colour behaviour
- The **title** is rendered in the variant's colour (e.g. orange \`#FD6000\` for \`warning\`, grey \`#6B7280\` for \`info\`, purple \`#681FC3\` for \`reminder\`, aqua \`#00BCD4\` for \`speak\`).
- The **message body** (data page response) inherits the default Pega theme text colour, keeping it readable without competing with the title.

---

### Data page integration
The message body is loaded at runtime by calling \`getPageDataAsync\` on the data page specified by \`getDPage\`, parameterised by \`getDParams\`. The data page is expected to return a single page object. The property read from that object is controlled by the \`responseProperty\` prop (e.g. set it to \`messageText\` if the data page returns \`{ messageText: "..." }\`). Defaults to \`message\` if not set.

Parameters in \`getDParams\` support property references using dot notation (e.g. \`.caseID\`) — these are resolved against the current case context via \`getPConnect.getValue\`.

---

### Storybook behaviour
In Storybook there is no live Pega backend, so no data page can be called. The component uses the presence of the \`storybookMessage\` prop to determine which path to take:

- **\`storybookMessage\` provided** — the value is used directly as the message body, synchronously on the first render. No async fetch is attempted and no environment detection is performed.
- **\`storybookMessage\` omitted** — the component falls through to the normal data page path (\`getPageDataAsync\`), which is the behaviour in a live Pega environment.

This means the branching is entirely prop-driven and deterministic, with no dependency on \`window.PCore\` being present at module-load time.

---

### HTML message support
If the data page returns an HTML string, the component renders it safely — \`<script>\` tags and inline event handlers are stripped before rendering.

---

### Accessibility
The alert container has \`role="alert"\` and \`aria-live="polite"\` so screen readers announce it on mount.
        `.trim()
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['warning', 'info', 'reminder', 'speak'],
      description:
        'Controls the icon, title colour, and semantic meaning of the alert. Each variant maps to a fixed Pega theme colour — `warning` → `#FD6000`, `info` → `#6B7280`, `reminder` → `#681FC3`, `speak` → `#00BCD4`. The icon and title colour are resolved via a switch statement; no external config object is used.',
      table: {
        type: { summary: "'warning' | 'info' | 'reminder' | 'speak'" },
        defaultValue: { summary: 'info' }
      }
    },
    title: {
      control: 'text',
      description: 'Short headline displayed in bold at the top of the alert.',
      table: {
        type: { summary: 'string' }
      }
    },
    getDPage: {
      control: 'text',
      description:
        'Name of the Pega data page that returns the alert message body (e.g. `D_AlertContent`).',
      table: {
        type: { summary: 'string' }
      }
    },
    getDParams: {
      control: 'text',
      description:
        'Comma-separated `key:value` parameters passed to the data page (e.g. `alertId:welcome`).',
      table: {
        type: { summary: 'string' }
      }
    },
    responseProperty: {
      control: 'text',
      description:
        'The property name on the data page response object that contains the message text. Defaults to `message` if not specified (e.g. set to `messageText` if the data page returns `{ messageText: "..." }`).',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'message' }
      }
    },
    testId: {
      control: 'text',
      description: 'Value applied to the `data-testid` attribute for automated testing.',
      table: {
        type: { summary: 'string' },
        category: 'Testing'
      }
    },
    storybookMessage: {
      control: 'text',
      description:
        '**Storybook only.** When provided, this value is used directly as the message body on the first render — no data page fetch is made and no environment detection is performed. When omitted, the component follows the normal live-Pega path and calls `getPageDataAsync`. Has no effect in a live Pega environment as long as `getDPage` is configured.',
      table: {
        type: { summary: 'string' },
        category: 'Storybook'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof PegaFieldContextualMessage>;

const basePConnect = () => ({
  getStateProps: () => ({ value: '.ContextualMessage', hasSuggestions: false }),
  getContextName: () => 'app/primary_1',
  getActionsApi: () => ({
    updateFieldValue: () => {
      /* nothing */
    },
    triggerFieldChange: () => {
      /* nothing */
    }
  }),
  getValue: (prop: string) => prop,
  ignoreSuggestion: () => {
    /* nothing */
  },
  acceptSuggestion: () => {
    /* nothing */
  },
  setInheritedProps: () => {
    /* nothing */
  },
  resolveConfigProps: () => {
    /* nothing */
  }
});

export const Default: Story = {
  name: 'Default (Info)',
  parameters: {
    docs: {
      description: {
        story:
          'The default state using the `info` variant. A good starting point when you need a neutral, non-urgent message. The message body is loaded from the configured data page at runtime.'
      },
      source: {
        code: `<PegaFieldContextualMessage
  getPConnect={getPConnect}
  variant="info"
  title="Information"
  getDPage="D_AlertContent"
  getDParams="alertId:welcome"
/>`
      }
    }
  },
  args: {
    variant: configProps.variant as any,
    title: configProps.title,
    getDPage: configProps.getDPage,
    getDParams: configProps.getDParams,
    responseProperty: configProps.responseProperty,
    testId: configProps.testId,
    storybookMessage:
      'Welcome! Please review your account details and complete any outstanding tasks before proceeding.'
  },
  render: (args: any) => <PegaFieldContextualMessage getPConnect={basePConnect} {...args} />
};

export const Reminder: Story = {
  name: 'Reminder',
  parameters: {
    docs: {
      description: {
        story:
          'Use `reminder` to prompt the user to take a follow-up action. The purple icon draws attention to something that still needs doing.'
      },
      source: {
        code: `<PegaFieldContextualMessage
  getPConnect={getPConnect}
  variant="reminder"
  title="Action Required"
  getDPage="D_AlertContent"
  getDParams="alertId:action-required"
/>`
      }
    }
  },
  args: {
    variant: 'reminder',
    title: 'Action Required',
    getDPage: 'D_AlertContent',
    getDParams: 'alertId:action-required',
    responseProperty: 'message',
    testId: 'alert-reminder',
    storybookMessage:
      'Your identity verification is incomplete. Please upload a valid government-issued ID to continue.'
  },
  render: (args: any) => <PegaFieldContextualMessage getPConnect={basePConnect} {...args} />
};

export const Info: Story = {
  name: 'Info',
  parameters: {
    docs: {
      description: {
        story:
          'Use `info` for neutral tips, guidance, or background context that does not require action.'
      },
      source: {
        code: `<PegaFieldContextualMessage
  getPConnect={getPConnect}
  variant="info"
  title="Did You Know?"
  getDPage="D_AlertContent"
  getDParams="alertId:info-tip"
/>`
      }
    }
  },
  args: {
    variant: 'info',
    title: 'Did You Know?',
    getDPage: 'D_AlertContent',
    getDParams: 'alertId:info-tip',
    responseProperty: 'message',
    testId: 'alert-info',
    storybookMessage:
      'You can save your progress at any time by clicking the Save button at the bottom of the form. Your data is retained for 30 days.'
  },
  render: (args: any) => <PegaFieldContextualMessage getPConnect={basePConnect} {...args} />
};

export const Warning: Story = {
  name: 'Warning',
  parameters: {
    docs: {
      description: {
        story:
          'Use `warning` for non-blocking cautions — the user can proceed but should be aware of a potential issue.'
      },
      source: {
        code: `<PegaFieldContextualMessage
  getPConnect={getPConnect}
  variant="warning"
  title="Please Note"
  getDPage="D_AlertContent"
  getDParams="alertId:caution"
/>`
      }
    }
  },
  args: {
    variant: 'warning',
    title: 'Please Note',
    getDPage: 'D_AlertContent',
    getDParams: 'alertId:caution',
    responseProperty: 'message',
    testId: 'alert-warning',
    storybookMessage: 'Do not share your personal information to the agent'
  },
  render: (args: any) => <PegaFieldContextualMessage getPConnect={basePConnect} {...args} />
};

export const Speak: Story = {
  name: 'Speak',
  parameters: {
    docs: {
      description: {
        story:
          'Use `speak` for conversational guidance or operator instructions — for example, a script prompt shown to a CSR while handling a case.'
      },
      source: {
        code: `<PegaFieldContextualMessage
  getPConnect={getPConnect}
  variant="speak"
  title="Operator Guidance"
  getDPage="D_AlertContent"
  getDParams="alertId:csr-script"
/>`
      }
    }
  },
  args: {
    variant: 'speak',
    title: 'Operator Guidance',
    getDPage: 'D_AlertContent',
    getDParams: 'alertId:csr-script',
    responseProperty: 'message',
    testId: 'alert-speak',
    storybookMessage:
      'Thank the customer for calling. Confirm their full name and date of birth before discussing any account details. Offer to escalate if the issue is unresolved within 5 minutes.'
  },
  render: (args: any) => <PegaFieldContextualMessage getPConnect={basePConnect} {...args} />
};
