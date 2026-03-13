/* eslint-disable react/jsx-no-useless-fragment */
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { stateProps, configProps } from './mock';

import PegaFieldCreditcard from './index';

const meta: Meta<typeof PegaFieldCreditcard> = {
  title: 'Pega/Field/Credit Card',
  component: PegaFieldCreditcard,
  excludeStories: /.*Data$/,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
**Credit Card** is a specialised input field for collecting and validating credit card numbers inside a Pega Constellation form.

As the user types, the component automatically identifies the card network, applies the correct formatting pattern, and validates the number in real time using the Luhn algorithm — giving immediate visual feedback before the form is ever submitted.

### Business use case
The primary purpose of this component is to validate the credit card number entered by the user. It identifies the type of credit card (Visa, Mastercard, American Express, Discover, Diners Club, JCB) and validates the number as prescribed for that network. For each supported card type, the number is formatted according to its standard grouping — for example, 4-4-4-4 digits for most cards and 4-6-5 digits for American Express.

### Why a custom component?
The requirement called for a credit card input that goes beyond simple data capture — it needed to guide the user through entry and validate the number in real time. Specifically, the solution needed to:

- Detect the card network from the first few digits and display the corresponding logo, so the user has immediate visual confirmation that the right card type is being entered.
- Apply network-specific digit grouping automatically (e.g. 4-4-4-4 for Visa, 4-6-5 for Amex) to make the number easier to read and verify while typing.
- Run the Luhn algorithm on every keystroke and surface a clear pass/fail signal before the form is submitted, reducing failed submissions and improving the overall entry experience.

A single, self-contained component was the most consistent way to deliver all three behaviours together.

### Supported card networks
| Network | Pattern | Format |
|---|---|---|
| Visa | Starts with \`4\` | 4-4-4-4 |
| Mastercard | Starts with \`51–55\` or \`2221–2720\` | 4-4-4-4 |
| American Express | Starts with \`34\` or \`37\` | 4-6-5 |
| Discover | Starts with \`6011\`, \`622\`, \`64\`, or \`65\` | 4-4-4-4 |
| Diners Club | Starts with \`300–305\`, \`36\`, or \`38\` | 4-6-4 |
| JCB | Starts with \`35\` | 4-4-4-4 |

### Validation
Card numbers are validated using the **Luhn algorithm**. A green border confirms a structurally valid number; a red border indicates an invalid one. The raw digits (no spaces) are written back to the Pega property so downstream processing always receives a clean value.
        `.trim(),
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown inside the input before the user types.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Enter credit card number' },
      },
    },
    showCardLogo: {
      control: 'boolean',
      description: 'When `true`, displays the detected card network logo inside the input field.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    formatNumber: {
      control: 'boolean',
      description: 'When `true`, automatically inserts spaces between digit groups as the user types (e.g. `4111 1111 1111 1111`).',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    value: {
      control: 'text',
      description: 'The current card number value (digits only, no spaces). Managed by Pega via `getPConnect`.',
      table: {
        type: { summary: 'string' },
      },
    },
    testId: {
      control: 'text',
      description: 'Value applied to the `data-testid` attribute for automated testing.',
      table: {
        type: { summary: 'string' },
        category: 'Testing',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PegaFieldCreditcard>;

// Sample card numbers for testing
const sampleCards = {
  visa: '4532015112830366',
  mastercard: '5555555555554444',
  amex: '378282246310005',
  discover: '6011111111111117',
  diners: '30569309025904',
  jcb: '3530111333300000'
};

export const Default: Story = {
  name: 'Default (Empty)',
  parameters: {
    docs: {
      description: {
        story: 'The component in its initial empty state. Start typing a card number to see real-time type detection, formatting, and Luhn validation in action.',
      },
      source: {
        code: `<PegaFieldCreditcard
  getPConnect={getPConnect}
  label="Credit Card Number"
  placeholder="Enter credit card number"
  showCardLogo={true}
  formatNumber={true}
/>`,
      },
    },
  },
  args: {
    label: 'Credit Card Number',
    placeholder: 'Enter credit card number',
    showCardLogo: true,
    formatNumber: true,
    testId: 'credit-card-default',
  },
  render: (args: any) => {
    const [value, setValue] = useState(configProps.value);
    const props = {
      value,
      getPConnect: () => ({
        getStateProps: () => stateProps,
        getActionsApi: () => ({
          updateFieldValue: (_propName: string, theValue: any) => setValue(theValue),
          triggerFieldChange: () => {/* nothing */}
        }),
        ignoreSuggestion: () => {/* nothing */},
        acceptSuggestion: () => {/* nothing */},
        setInheritedProps: () => {/* nothing */},
        resolveConfigProps: () => {/* nothing */}
      })
    };
    return <PegaFieldCreditcard {...props} {...args} />;
  }
};

export const WithVisaCard: Story = {
  name: 'Visa',
  parameters: {
    docs: {
      description: {
        story: 'Pre-filled with a valid Visa test number. The Visa logo appears immediately and the 4-4-4-4 grouping is applied. The green border confirms the Luhn check passes.',
      },
      source: {
        code: `<PegaFieldCreditcard
  getPConnect={getPConnect}
  label="Visa Card Example"
  showCardLogo={true}
  formatNumber={true}
  value="4532015112830366"
/>`,
      },
    },
  },
  args: {
    label: 'Visa Card Example',
    placeholder: 'Visa test card',
    showCardLogo: true,
    formatNumber: true,
    testId: 'visa-demo',
  },
  render: (args: any) => {
    const [value, setValue] = useState(sampleCards.visa);
    const props = {
      value,
      getPConnect: () => ({
        getStateProps: () => ({ value: '.CreditCard', hasSuggestions: false }),
        getActionsApi: () => ({
          updateFieldValue: (_propName: string, theValue: any) => setValue(theValue),
          triggerFieldChange: () => {/* nothing */}
        }),
        ignoreSuggestion: () => {/* nothing */},
        acceptSuggestion: () => {/* nothing */},
        setInheritedProps: () => {/* nothing */},
        resolveConfigProps: () => {/* nothing */}
      })
    };
    return <PegaFieldCreditcard {...props} {...args} />;
  }
};

export const WithMastercard: Story = {
  name: 'Mastercard',
  parameters: {
    docs: {
      description: {
        story: 'Pre-filled with a valid Mastercard test number. Shows the Mastercard logo and standard 4-4-4-4 grouping.',
      },
      source: {
        code: `<PegaFieldCreditcard
  getPConnect={getPConnect}
  label="Mastercard Example"
  showCardLogo={true}
  formatNumber={true}
  value="5555555555554444"
/>`,
      },
    },
  },
  args: {
    label: 'Mastercard Example',
    placeholder: 'Mastercard test card',
    showCardLogo: true,
    formatNumber: true,
    testId: 'mastercard-demo',
  },
  render: (args: any) => {
    const [value, setValue] = useState(sampleCards.mastercard);
    const props = {
      value,
      getPConnect: () => ({
        getStateProps: () => ({ value: '.CreditCard', hasSuggestions: false }),
        getActionsApi: () => ({
          updateFieldValue: (_propName: string, theValue: any) => setValue(theValue),
          triggerFieldChange: () => {/* nothing */}
        }),
        ignoreSuggestion: () => {/* nothing */},
        acceptSuggestion: () => {/* nothing */},
        setInheritedProps: () => {/* nothing */},
        resolveConfigProps: () => {/* nothing */}
      })
    };
    return <PegaFieldCreditcard {...props} {...args} />;
  }
};

export const WithAmericanExpress: Story = {
  name: 'American Express',
  parameters: {
    docs: {
      description: {
        story: 'Pre-filled with a valid Amex test number. Note the distinct **4-6-5** digit grouping (`3782 822463 10005`) and the Amex logo — both are applied automatically when the `37` prefix is detected.',
      },
      source: {
        code: `<PegaFieldCreditcard
  getPConnect={getPConnect}
  label="American Express Example"
  showCardLogo={true}
  formatNumber={true}
  value="378282246310005"
/>`,
      },
    },
  },
  args: {
    label: 'American Express Example',
    placeholder: 'AmEx test card',
    showCardLogo: true,
    formatNumber: true,
    testId: 'amex-demo',
  },
  render: (args: any) => {
    const [value, setValue] = useState(sampleCards.amex);
    const props = {
      value,
      getPConnect: () => ({
        getStateProps: () => ({ value: '.CreditCard', hasSuggestions: false }),
        getActionsApi: () => ({
          updateFieldValue: (_propName: string, theValue: any) => setValue(theValue),
          triggerFieldChange: () => {/* nothing */}
        }),
        ignoreSuggestion: () => {/* nothing */},
        acceptSuggestion: () => {/* nothing */},
        setInheritedProps: () => {/* nothing */},
        resolveConfigProps: () => {/* nothing */}
      })
    };
    return <PegaFieldCreditcard {...props} {...args} />;
  }
};

export const LogoTest: Story = {
  name: 'Logo display',
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates that the card logo renders as soon as a recognisable prefix is entered — no need to complete the full number. Toggle `showCardLogo` in the controls panel to hide the logo.',
      },
      source: {
        code: `<PegaFieldCreditcard
  getPConnect={getPConnect}
  label="Credit Card Number"
  showCardLogo={true}
  formatNumber={true}
  value="4111111111111111"
/>`,
      },
    },
  },
  args: {
    label: 'Hidden Logo',
    placeholder: 'Should not show a logo',
    showCardLogo: false,
    formatNumber: true,
    testId: 'logo-test',
  },
  render: (args: any) => {
    const [value, setValue] = useState('4111111111111111');
    const props = {
      value,
      getPConnect: () => ({
        getStateProps: () => ({ value: '.CreditCard', hasSuggestions: false }),
        getActionsApi: () => ({
          updateFieldValue: (_propName: string, theValue: any) => setValue(theValue),
          triggerFieldChange: () => {/* nothing */}
        }),
        ignoreSuggestion: () => {/* nothing */},
        acceptSuggestion: () => {/* nothing */},
        setInheritedProps: () => {/* nothing */},
        resolveConfigProps: () => {/* nothing */}
      })
    };
    return (
      <div style={{ padding: '20px' }}>
        <h3>Logo Test - Should show Visa logo immediately</h3>
        <PegaFieldCreditcard {...props} {...args} />
        <p>Card number: {value}</p>
      </div>
    );
  }
};

