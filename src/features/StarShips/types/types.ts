export type StarShip = {
    id: string;
    src: string;
    name: string;
    model: string;
    max_atmosphering_speed: string;
    starship_class: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: string;
    pilots: Pilot[];
    films: string[];
    url: string;
}

type Pilot = {
    id: string;
    name: string;
}