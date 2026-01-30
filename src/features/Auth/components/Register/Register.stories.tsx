import type { Meta, StoryObj } from '@storybook/react-vite';
import { store } from '../../../../app/store';
import { Register } from "./Register";

const meta: Meta<typeof Register> = {
    component: Register,
    title: 'Components/Auth/Register'
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const Loading: Story = {
    render: () => {
        store.dispatch({
            type: 'auth/registerUser/pending',
        });
        return <Register onClick={() => { }} />;
    }
}