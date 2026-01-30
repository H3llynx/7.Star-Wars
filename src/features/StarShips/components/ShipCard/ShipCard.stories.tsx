import type { Meta, StoryObj } from '@storybook/react-vite';
import { ShipCard } from "./ShipCard";

const meta: Meta = {
    component: ShipCard,
    title: 'Components/Starships/ShipCard',
};

export default meta;
type Story = StoryObj;

export const CorrectSRC: Story = {
    args: {
        id: "3",
        name: "Star Destroyer",
        model: "Imperial I-class Star Destroyer",
        starship_class: "Star Destroyer",
        max_atmosphering_speed: "975",
        src: "starships/3.webp",
    },
};

export const WrongSRC: Story = {
    args: {
        id: "9",
        name: "Death Star",
        model: "DS-1 Orbital Battle Station",
        starship_class: "Deep Space Mobile Battlestation",
        max_atmosphering_speed: "n/a",
        src: "wrongSrc.webp",
    },
};