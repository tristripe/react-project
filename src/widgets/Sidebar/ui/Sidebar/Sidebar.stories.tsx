// @ts-nocheck
import type { StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@app/providers/ThemeProvider';
import { Sidebar } from './Sidebar';

const meta = {
    title: 'Example/Sidebar',
    component: Sidebar,
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

export const Light: Story = {
    args: {
        decorators: ThemeDecorator(Theme.LIGHT),
    },
};

export const Dark: Story = {
    args: {
        decorators: ThemeDecorator(Theme.DARK),
    },
};
