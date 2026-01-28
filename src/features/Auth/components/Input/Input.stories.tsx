import type { Meta, StoryObj } from '@storybook/react-vite';
import Hud from "../../../../assets/svg/hud-border.svg?react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
    component: Input,
    title: 'Components/Input',
    decorators: [
        (Story) => (
            <section className="hud" style={{ padding: "1rem 2rem" }}>
                <Hud className="hud-border-svg mb-hidden" />
                <Story />
            </section>
        )
    ]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: "Your name",
        type: "text",
        id: "name",
    },
};
