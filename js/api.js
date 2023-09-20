// The base URL for the API
const base_url = "https://savory.cecsun.no/wp-json/wp/v2";

// A helper function to fetch data from the API
async function fetchData(url) {
    const payload = await fetch(url);
    const data = await payload.json();
    return data;
}

// Fetches all data from the API
export async function fetchAllPostsByPage(page_num) {
    const data = await fetchData(base_url + "/posts?page=" + page_num);
    return data;
}

// Fetches data from the API by ID
export async function fetchPostByID(id) {
    const data = await fetchData(base_url + "/posts/" + id);
    return data;
}

export async function fetchMediaByID(id) {
    const data = await fetchData(base_url + "/media/" + id);
    return data;
}
