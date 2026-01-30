export const getData = async (url: string, headers?: Record<string, string>) => {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headers ?? {}
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        return data
    } catch (error) {
        console.error('Fetch/validation error:', error);
        throw (error);
    }
};