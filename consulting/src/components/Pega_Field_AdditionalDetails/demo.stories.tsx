/* eslint-disable react/jsx-no-useless-fragment */
import type { Meta, StoryObj } from '@storybook/react';

import PegaFieldAdditionalDetails from './index';
import { configProps } from './mock';

const meta: Meta<typeof PegaFieldAdditionalDetails> = {
  title: 'Pega/Field/Additional Details',
  component: PegaFieldAdditionalDetails,
  excludeStories: /.*Data$/
};

export default meta;
type Story = StoryObj<typeof PegaFieldAdditionalDetails>;

const defaultArgs = {
  createLabel: configProps.createLabel,
  updateLabel: configProps.updateLabel,
  createOperator: configProps.createOperator,
  updateOperator: configProps.updateOperator,
  createDateTime: configProps.createDateTime,
  updateDateTime: configProps.updateDateTime,
  getPConnect: () =>
    ({
      getActionsApi: () => ({
        updateFieldValue: () => {},
        triggerFieldChange: () => {}
      }),
      ignoreSuggestion: () => {},
      acceptSuggestion: () => {},
      setInheritedProps: () => {},
      resolveConfigProps: () => {}
    }) as any
};

export const Default: Story = {
  args: defaultArgs
};

export const WithResolvedOperator: Story = {
  args: {
    ...defaultArgs,
    resolveLabel: 'Resolved',
    resolveOperator: { userId: 'manager@mediaco', userName: 'manager' },
    resolveDateTime: '2023-01-20T09:00:00.000Z'
  }
};

export const CreateOnly: Story = {
  args: {
    ...defaultArgs,
    updateOperator: { userId: '', userName: '' }
  }
};
