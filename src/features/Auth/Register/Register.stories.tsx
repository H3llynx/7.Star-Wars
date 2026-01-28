import type { Meta, StoryObj } from '@storybook/react-vite';
import { Register } from "./Register";

const meta: Meta<typeof Register> = {
    component: Register,
    title: 'Components/Register'
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
