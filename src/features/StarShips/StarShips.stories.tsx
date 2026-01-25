import type { Meta, StoryObj } from '@storybook/react-vite';
import { StarShips } from "./StarShips";

const meta: Meta = {
    component: StarShips,
    title: 'Components/StarShips',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const StarshipList: Story = {
    args: {},
};