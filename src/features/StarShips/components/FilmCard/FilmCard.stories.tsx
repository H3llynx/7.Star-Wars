import type { Meta, StoryObj } from '@storybook/react-vite';
import { FilmCard } from "./FilmCard";

const meta: Meta = {
    component: FilmCard,
    title: 'Components/Starships/FilmCard',
};

export default meta;
type Story = StoryObj;

export const CorrectSRC: Story = {
    args: {
        id: "4",
        title: "La menace fantôme",
        episode: 1,
        src: "films/1.jpg"
    },
};

export const WrongSRC: Story = {
    args: {
        id: "7",
        title: "Unknown movie",
        episode: 0,
        src: "wrongSrc.jpg"
    },
};