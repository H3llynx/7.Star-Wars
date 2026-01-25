import type { Meta, StoryObj } from '@storybook/react-vite';
import { HudSection } from './HudSection';

const meta: Meta = {
    component: HudSection,
    title: 'Components/HudSection',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const HudWithText: Story = {
    args: {
        title: "This is a test",
        children: "I know there is no padding here."
    },
};