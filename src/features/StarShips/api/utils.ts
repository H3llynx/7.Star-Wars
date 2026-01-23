export const getShipId = (url: string): string => {
    return url.split("/").slice(-2, -1)[0];
};

const shipClasses: Record<string, string> = {
    "corvette": "corvette.webp",
    "star destroyer": "star-destroyer.webp",
    "landing craft": "landing-craft.webp",
    "deep space mobile battlestation": "dsm-battlestation.webp",
    "light freighter": "light-freighter.webp",
    "assault starfighter": "assault-starfighter.webp",
    "starfighter": "starfighter.webp",
    "star dreadnought": "star-dreadnought.webp",
    "medium transport": "medium-transport.webp",
    "star cruiser": "",
    "space cruiser": "",
    "patrol craft": "",
    "freighter": "",
    "transport": "",
    "droid control ship": "",
    "armed government transport": "",
    "yacht": "",
    "cruiser": "",
    "assault ship": ""
};

export const getShipImg = (shipClass: string): string => {
    const img = shipClasses[shipClass];
    return img ? `starships/${img}` : "starships/default.webp";
};