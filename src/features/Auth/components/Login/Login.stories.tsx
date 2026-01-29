import type { Meta, StoryObj } from '@storybook/react-vite';
import { Login } from "./Login";

const meta: Meta<typeof Login> = {
    component: Login,
    title: 'Components/Login'
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
