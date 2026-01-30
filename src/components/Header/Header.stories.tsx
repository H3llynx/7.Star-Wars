import type { Meta, StoryObj } from '@storybook/react-vite';
import { store } from '../../app/store';
import { Header } from './Header';

const meta: Meta = {
    component: Header,
    title: 'Components/Header',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Unauthenticated: Story = {
    args: {},
}
export const Authenticated: Story = {
    render: () => {
        store.dispatch({
            type: 'auth/loginUser/fulfilled',
            payload: {
                uid: "1",
                email: "test@test.fr",
                displayName: "Sasha"
            },
            authenticated: true
        });
        return <Header />;
    }
}
