// @ts-nocheck
import type { StoryObj } from '@storybook/react';
import { Button, ThemeButton } from './Button';

const meta = {
    title: 'Example/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        primary: true,
        children: 'text',
    },
};

export const Clear: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: 'text',
    },
};

export const Outlined: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'text',
    },
};
