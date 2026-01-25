import { z } from "zod";

export const StarShipResultsSchema = z.object({
    results: z.array(
        z.object({
            name: z.string(),
            model: z.string(),
            manufacturer: z.string(),
            cost_in_credits: z.string(),
            length: z.string(),
            max_atmosphering_speed: z.string(),
            crew: z.string(),
            passengers: z.string(),
            cargo_capacity: z.string(),
            consumables: z.string(),
            hyperdrive_rating: z.string(),
            MGLT: z.string(),
            starship_class: z.string(),
            pilots: z.array(z.string()),
            films: z.array(z.string()),
            url: z.string()
        })
    )
});

export const StarShipSchema = z.object({
    name: z.string(),
    model: z.string(),
    manufacturer: z.string(),
    cost_in_credits: z.string(),
    length: z.string(),
    max_atmosphering_speed: z.string(),
    crew: z.string(),
    passengers: z.string(),
    cargo_capacity: z.string(),
    consumables: z.string(),
    hyperdrive_rating: z.string(),
    MGLT: z.string(),
    starship_class: z.string(),
    pilots: z.array(z.string()),
    films: z.array(z.string()),
    url: z.string()
})