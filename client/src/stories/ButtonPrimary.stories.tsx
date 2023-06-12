import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ButtonPrimary from '../application/components/Button/ButtonPrimary';
import '../application/css/bundle.css'

const meta: Meta<typeof ButtonPrimary> = {
  title: 'UI Components/ButtonPrimary',
  component: ButtonPrimary,
  argTypes: {
    className: { table: { disable: true } },
    translate: { table: { disable: true } },
    sizeClass: { table: { disable: true } },
    fontSize: { table: { disable: true } },
    type: { table: { disable: true } },
    href: { table: { disable: true } },
    targetBlank: { table: { disable: true } },
    onClick: { table: { disable: true } },
  },
};
export default meta;
type Story = StoryObj<typeof ButtonPrimary>;

const containerText = "Button Primary"

export const Enabled: Story = {
  args: {
    loading: false,
    disabled: false,
    children: containerText,
  },
};

export const Disabled: Story = {
  args: {
    loading: false,
    disabled: true,
    children: containerText,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    disabled: false,
    children: containerText,
  },
};

