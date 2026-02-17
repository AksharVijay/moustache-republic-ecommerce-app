const Base_URL = "https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product"

export const fetchProduct = async() => {
    const response = await fetch(`${Base_URL}`);

    if(!response.ok){
        throw new Error("Failed to fetch the product");
    }

    return response.json();
}