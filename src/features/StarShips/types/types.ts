export type StarShip = {
    id: string;
    name: string;
    model: string;
    max_atmosphering_speed: string;
    starship_class: string;
    src: string;
    manufacturer?: string;
}

export type LoadMoreBtnProps = {
    item: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>