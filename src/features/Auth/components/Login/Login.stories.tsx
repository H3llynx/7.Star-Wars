import type { Meta, StoryObj } from '@storybook/react-vite';
import { store } from '../../../../app/store';
import { Login } from "./Login";

const meta: Meta<typeof Login> = {
    component: Login,
    title: 'Components/Auth/Login'
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const Loading: Story = {
    render: () => {
        store.dispatch({
            type: 'auth/loginUser/pending',
        });
        return <Login onClick={() => { }} />;
    }
};
