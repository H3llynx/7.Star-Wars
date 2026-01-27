import type { Meta, StoryObj } from '@storybook/react-vite';
import { HomePage } from "./HomePage";

const meta: Meta<typeof HomePage> = {
    component: HomePage,
    title: 'Components/Home'
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};