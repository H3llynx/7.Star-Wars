import type { Meta, StoryObj } from '@storybook/react-vite';
import { Header } from './Header';

const meta: Meta = {
    component: Header,
    title: 'Components/Header',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
}