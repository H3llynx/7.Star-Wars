import type { Meta, StoryObj } from '@storybook/react-vite';
import { store } from '../../app/store';
import { StarShips } from "./StarShips";

const meta: Meta<typeof StarShips> = {
    component: StarShips,
    title: 'Components/Starships/StarShips'
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const Error: Story = {
    render: () => {
        localStorage.removeItem("starships");
        store.dispatch({
            type: 'starships/fetchStarships/rejected',
            error: { message: "Fetch error" }
        });
        return <StarShips />;
    },
};

export const Loading: Story = {
    render: () => {
        store.dispatch({
            type: 'starships/fetchStarships/pending',
        });
        return <StarShips />;
    },
};