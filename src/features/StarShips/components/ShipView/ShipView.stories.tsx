import type { Meta, StoryObj } from '@storybook/react-vite';
import { delay, http } from 'msw';
import { reactRouterParameters } from 'storybook-addon-remix-react-router';
import { store } from '../../../../app/store';
import { ShipView } from "./ShipView";

const meta: Meta<typeof ShipView> = {
    component: ShipView,
    title: 'Components/Starships/ShipView'
};

export default meta;
type Story = StoryObj<typeof meta>;

const ship = {
    "name": "Death Star",
    "model": "DS-1 Orbital Battle Station",
    "manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",
    "cost_in_credits": "1000000000000",
    "length": "120000",
    "max_atmosphering_speed": "n/a",
    "crew": "342,953",
    "passengers": "843,342",
    "cargo_capacity": "1000000000000",
    "consumables": "3 years",
    "hyperdrive_rating": "4.0",
    "MGLT": "10",
    "starship_class": "Deep Space Mobile Battlestation",
    "pilots": [],
    "films": [
        "https://swapi.dev/api/films/1/"
    ],
    "created": "2014-12-10T16:36:50.509000Z",
    "edited": "2014-12-20T21:26:24.783000Z",
    "url": "https://swapi.dev/api/starships/9/",
    id: "9",
    src: "starships/9.webp"
}

const shipWithPilots = {
    "name": "Millennium Falcon",
    "model": "YT-1300 light freighter",
    "manufacturer": "Corellian Engineering Corporation",
    "cost_in_credits": "100000",
    "length": "34.37",
    "max_atmosphering_speed": "1050",
    "crew": "4",
    "passengers": "6",
    "cargo_capacity": "100000",
    "consumables": "2 months",
    "hyperdrive_rating": "0.5",
    "MGLT": "75",
    "starship_class": "Light freighter",
    "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/"
    ],
    "created": "2014-12-10T16:59:45.094000Z",
    "edited": "2014-12-20T21:23:49.880000Z",
    "url": "https://swapi.dev/api/starships/10/",
    id: "10",
    src: "starships/10.webp",
    pilots: [
        {
            id: "13",
            name: "Chewbacca",
            src: "pilots/13.webp"
        },
        {
            id: "14",
            name: "Han Solo",
            src: "pilots/14.webp"
        }
    ],
}

export const Default: Story = {
    render: () => {
        store.dispatch({
            type: 'starships/fetchShipById/fulfilled',
            payload: ship
        });
        return <ShipView />;
    },
    parameters: {
        reactRouter: reactRouterParameters({
            location: {
                pathParams: { id: ship.id }
            },
            routing: {
                path: 'starships/:id'
            },
        }),
    },
};

export const DefaultWithPilots: Story = {
    render: () => {
        store.dispatch({
            type: 'starships/fetchShipById/fulfilled',
            payload: shipWithPilots
        });
        return <ShipView />;
    },
    parameters: {
        reactRouter: reactRouterParameters({
            location: {
                pathParams: { id: ship.id }
            },
            routing: {
                path: 'starships/:id'
            },
        }),
    },
};

export const Error: Story = {
    render: () => {
        store.dispatch({
            type: 'starships/fetchShipById/rejected',
            error: { message: 'Fetch error' }
        });
        return <ShipView />;
    },
    parameters: {
        reactRouter: reactRouterParameters({
            location: {
                pathParams: { id: '4' }
            },
            routing: {
                path: 'starships/:id'
            },
        }),
    },
};

export const Loading: Story = {
    render: () => {
        store.dispatch({
            type: 'starships/fetchShipById/pending',
        });
        return <ShipView />;
    },
    parameters: {
        msw: {
            handlers: [
                http.get('**/starships/:id', async () => {
                    await delay('infinite');
                }),
            ],
        },
        reactRouter: reactRouterParameters({
            location: {
                pathParams: { id: '4' }
            },
            routing: {
                path: 'starships/:id'
            },
        }),
    },
};