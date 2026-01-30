import type { Meta, StoryObj } from '@storybook/react-vite';
import { store } from '../../app/store';
import { ScreenContext } from '../../context/ScreenContext';
import { HomePage } from "./HomePage";

const meta: Meta<typeof HomePage> = {
    component: HomePage,
    title: 'Components/Home'
};


export default meta;
type Story = StoryObj<typeof meta>;

export const AuthenticatedDesktop: Story = {
    args: {
        isPortrait: false
    },
    render: (args) => {
        store.dispatch({
            type: 'auth/loginUser/fulfilled',
            payload: {
                uid: "1",
                email: "test@test.fr",
                displayName: "Sasha"
            },
        });

        return (
            <ScreenContext value={{ isPortrait: args.isPortrait }}>
                <HomePage />
            </ScreenContext>
        );
    }
};
export const AuthenticatedMobile: Story = {
    args: {
        isPortrait: true
    },
    render: (args) => {
        store.dispatch({
            type: 'auth/loginUser/fulfilled',
            payload: {
                uid: "1",
                email: "test@test.fr",
                displayName: "Sasha"
            },
        });

        return (
            <ScreenContext value={{ isPortrait: args.isPortrait }}>
                <HomePage />
            </ScreenContext>
        );
    }
};
export const Unthenticated: Story = {
    args: {},
};