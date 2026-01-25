import type { Meta, StoryObj } from '@storybook/react-vite';
import { StarShips } from "./StarShips";

const meta: Meta = {
    component: StarShips,
    title: 'Components/StarShips',
};

export default meta;
type Story = StoryObj;

export const StarshipList: Story = {
    args: {},
};