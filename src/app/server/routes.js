import { endpoints } from "./endpoints";

const saveMap = async (mapa) => {
    const response = await fetch(endpoints.routeMaps, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mapa)
    });
    return response;
}

const getExistingMaps = async (id, currentMap) => {
    let endpoint;

    if (id === 1) {
        endpoint = currentMap === "injection" 
            ? endpoints.routeMap1Injection 
            : endpoints.routeMap1Ignition;
    } else if (id === 2) {
        endpoint = currentMap === "injection" 
            ? endpoints.routeMap2Injection 
            : endpoints.routeMap2Ignition;
    }

    if (!endpoint) {
        throw new Error("Invalid id or map type");
    }

    const response = await fetch(endpoint);
    return response;
};
export { saveMap, getExistingMaps }