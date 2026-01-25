import type { Meta, StoryObj } from '@storybook/react-vite';
import { HudError } from './HudError';

const meta: Meta = {
    component: HudError,
    title: 'Components/HudError',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const HudWithError: Story = {
    args: {},
};