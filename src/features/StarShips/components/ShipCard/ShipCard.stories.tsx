import type { Meta, StoryObj } from '@storybook/react';
import { ShipCard } from "./ShipCard";

const meta: Meta<typeof ShipCard> = {
    component: ShipCard,
    title: 'Components/ShipCard',
};

export default meta;
type Story = StoryObj<typeof ShipCard>;

export const starDestroyer: Story = {
    args: {
        id: "3",
        name: "Star Destroyer",
        model: "Imperial I-class Star Destroyer",
        starship_class: "Star Destroyer",
        max_atmosphering_speed: "975",
        src: "starships/star-destroyer.webp",
    },
};

export const deathStar: Story = {
    args: {
        id: "9",
        name: "Death Star",
        model: "DS-1 Orbital Battle Station",
        starship_class: "Deep Space Mobile Battlestation",
        max_atmosphering_speed: "n/a",
        src: "starships/dsm-battlestation.webp",
    },
};