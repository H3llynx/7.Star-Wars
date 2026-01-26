import type { Meta, StoryObj } from '@storybook/react-vite';
import { reactRouterParameters } from 'storybook-addon-remix-react-router';
import { store } from '../../../../app/store';
import { ShipView } from "./ShipView";

const meta: Meta<typeof ShipView> = {
    component: ShipView,
    title: 'Components/ShipView'
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        store.dispatch({
            type: 'starships/fetchShipById/fulfilled',
            payload: { id: 3, name: 'Test Ship', }
        });
        return <ShipView />;
    },
    parameters: {
        reactRouter: reactRouterParameters({
            location: {
                pathParams: { id: '3' }
            },
            routing: {
                path: 'starships/:id'
            },
        }),
    },
};
