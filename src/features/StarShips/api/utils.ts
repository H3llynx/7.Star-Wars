export const getShipId = (url: string): string => {
    return url.split("/").slice(-2, -1)[0];
};

export const getPilotId = (url: string): string => {
    return url.split("/").slice(-2, -1)[0];
}