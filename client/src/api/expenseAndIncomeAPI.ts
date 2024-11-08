const BASE_URL = 'http://localhost:5173/';

type CollectionName = 'expenses' | 'incomes';

// Boilerplate response and request functions
async function handleResponse(response: Response) {
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
    }
    return response.json();
}

async function request(endpoint: string, options: RequestInit = {}) {
    const response = await fetch(`${BASE_URL}${endpoint}`, options);
    return handleResponse(response);
}

// Exported functions for request
export async function getItems(collectionName: CollectionName) {
    return request(`/${collectionName}`);
}

export async function deleteItem(collectionName: CollectionName, id: string) {
    return request(`/${collectionName}/${id}`, {
        method: 'DELETE'
    });
}

export async function submitItem(collectionName: CollectionName, data: object, id: string = "") {
    const url = id ? `/${collectionName}/${id}` : `/${collectionName}`;
    const method = id ? "PATCH" : "POST";

    return request(url, {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
}