import type { Meta, StoryObj } from '@storybook/react-vite';
import { PilotCard } from "./PilotCard";

const meta: Meta = {
    component: PilotCard,
    title: 'Components/Starships/PilotCard',
};

export default meta;
type Story = StoryObj;

export const CorrectSRC: Story = {
    args: {
        id: "1",
        name: "Sasha Palpatine",
        src: "pilots/sasha.png",
    },
};

export const WrongSRC: Story = {
    args: {
        id: "2",
        name: "Unknown pilot",
        src: "wrongSrc.png",
    },
};