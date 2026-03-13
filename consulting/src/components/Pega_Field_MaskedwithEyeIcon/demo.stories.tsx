/* eslint-disable react/jsx-no-useless-fragment */
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { stateProps, configProps } from './mock';

import PegaFieldMaskedwithEyeIcon from './index';

const meta: Meta<typeof PegaFieldMaskedwithEyeIcon> = {
  title: 'Pega/Field/Masked Input',
  component: PegaFieldMaskedwithEyeIcon,
  excludeStories: /.*Data$/,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
**Masked Input** is a text input field with a toggleable eye icon that allows the user to show or hide the entered value. By default the value is obscured, and clicking the eye icon in the input reveals or re-masks it on demand.

### Business use case
This component is used to check the value entered by the user in sensitive fields. It is particularly useful when the value needs to remain hidden during entry — such as a password, PIN, or secret key — but the user still needs the ability to verify what they typed. Clicking the eye icon toggles the mask on and off without leaving the field, so the user can confirm their input at any point without retyping it.

### Why a custom component?
The requirement called for a sensitive input field that keeps its value hidden by default while still giving the user full control to verify what they typed — without leaving the field or retyping. Specifically, the solution needed to:

- Start in a masked state by default, protecting sensitive values from casual observation.
- Allow the user to toggle the mask on and off at will via an inline eye icon, so they can cross-check their entry at any point.
- Support all standard field states — \`disabled\`, \`readOnly\`, and \`required\` — without any change in toggle behaviour.

A single, self-contained input component was the cleanest way to meet all three requirements consistently.

### Behaviour
- The field starts masked (\`defaultMasked={true}\`) or unmasked (\`defaultMasked={false}\`) depending on configuration.
- The eye icon in the trailing position of the input toggles the mask state.
- The icon switches between an open eye (value visible) and a crossed-out eye (value hidden) to reflect the current state.
- All standard field states are supported: \`disabled\`, \`readOnly\`, and \`required\`.
        `.trim(),
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label displayed above the input field.',
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown inside the input when it is empty.',
      table: {
        type: { summary: 'string' },
      },
    },
    defaultMasked: {
      control: 'boolean',
      description: 'When `true` (default), the field value is hidden on initial render. The user can reveal it by clicking the eye icon.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'When `true`, the input is non-interactive and visually dimmed. The eye icon is also disabled.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    readOnly: {
      control: 'boolean',
      description: 'When `true`, the value is displayed but cannot be edited. The eye icon remains active so the user can still toggle the mask.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    required: {
      control: 'boolean',
      description: 'When `true`, marks the field as required and triggers validation if left empty on form submit.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
type Story = StoryObj<typeof PegaFieldMaskedwithEyeIcon>;

export const Default: Story = {
  name: 'Default (Masked)',
  parameters: {
    docs: {
      description: {
        story: 'The field in its default state — value is pre-filled and masked. Click the eye icon to reveal the entered text, then click again to re-mask it.',
      },
      source: {
        code: `<PegaFieldMaskedwithEyeIcon
  getPConnect={getPConnect}
  label="Password"
  placeholder="Enter value"
  defaultMasked={true}
/>`,
      },
    },
  },
  args: {
    label: configProps.label,
    placeholder: configProps.placeholder,
    testId: configProps.testId,
    readOnly: configProps.readOnly,
    disabled: configProps.disabled,
    required: configProps.required,
    hideLabel: configProps.hideLabel,
    defaultMasked: true,
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
    return <PegaFieldMaskedwithEyeIcon {...props} {...args} />;
  }
};

export const Unmasked: Story = {
  name: 'Unmasked by default',
  parameters: {
    docs: {
      description: {
        story: 'When `defaultMasked={false}`, the value is visible on load. The eye icon is still present so the user can mask it if needed.',
      },
      source: {
        code: `<PegaFieldMaskedwithEyeIcon
  getPConnect={getPConnect}
  label="Visible Input"
  placeholder="Text is visible"
  defaultMasked={false}
/>`,
      },
    },
  },
  args: {
    label: 'Visible Input',
    placeholder: 'Text is visible',
    testId: 'masked-unmasked',
    readOnly: false,
    disabled: false,
    required: false,
    hideLabel: false,
    defaultMasked: false,
  },
  render: (args: any) => {
    const [value, setValue] = useState('');
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
    return <PegaFieldMaskedwithEyeIcon {...props} {...args} />;
  }
};

export const Disabled: Story = {
  name: 'Disabled',
  parameters: {
    docs: {
      description: {
        story: 'When `disabled={true}`, the field and eye icon are both non-interactive. Use this state when the field should be visible but not editable, for example when a prior step has not been completed.',
      },
      source: {
        code: `<PegaFieldMaskedwithEyeIcon
  getPConnect={getPConnect}
  label="Disabled Input"
  defaultMasked={true}
  disabled={true}
/>`,
      },
    },
  },
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot interact',
    testId: 'masked-disabled',
    disabled: true,
    readOnly: false,
    required: false,
    hideLabel: false,
    defaultMasked: true,
  },
  render: (args: any) => {
    const [value, setValue] = useState('secret123');
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
    return <PegaFieldMaskedwithEyeIcon {...props} {...args} />;
  }
};

export const ReadOnly: Story = {
  name: 'Read-only',
  parameters: {
    docs: {
      description: {
        story: 'When `readOnly={true}`, the value cannot be edited but the eye icon remains active. This is useful for review screens where sensitive data should be displayed on demand but not modified.',
      },
      source: {
        code: `<PegaFieldMaskedwithEyeIcon
  getPConnect={getPConnect}
  label="Read-Only Input"
  defaultMasked={true}
  readOnly={true}
/>`,
      },
    },
  },
  args: {
    label: 'Read-Only Input',
    placeholder: '',
    testId: 'masked-readonly',
    disabled: false,
    readOnly: true,
    required: false,
    hideLabel: false,
    defaultMasked: true,
  },
  render: (args: any) => {
    const [value, setValue] = useState('readonly-value');
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
    return <PegaFieldMaskedwithEyeIcon {...props} {...args} />;
  }
};
