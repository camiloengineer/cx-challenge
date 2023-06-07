import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Input from '../presentation/shared/Input/Input';
import '../presentation/css/bundle.css'

const meta: Meta<typeof Input> = {
  title: 'UI Components/Input',
  component: Input,
  argTypes: {
    className: { table: { disable: true } },
    sizeClass: { table: { disable: true } },
    type: { table: { disable: true } },
    fontClass: { table: { disable: true } },
    rounded: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

const containerStyle = {
    width: '30rem',
};
const containerText = "Input"

export const Enabled: Story = {
  args: {
    defaultValue: containerText,
    style: containerStyle,
    disabled: false,
  },
};

export const Disabled: Story = {
    args: {
    defaultValue: containerText,
    style: containerStyle,
      disabled: true,
    },
  };


