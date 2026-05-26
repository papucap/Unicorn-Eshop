const BASE_URL = "https://fakestoreapi.com";

// Simulované velikosti podle kategorie
function getSizes(category) {
  if (category === "men's clothing" || category === "women's clothing") {
    return ["XS", "S", "M", "L", "XL", "XXL"];
  }
  return []; // elektronika a šperky velikosti nemají
}

// Odvodí "brand" z názvu produktu (první slovo)
function getBrand(title) {
  return title.split(" ")[0];
}

// Namapuje API data na strukturu, kterou očekává tvůj ProductInfo
export function mapProduct(apiProduct) {
  return {
    id: apiProduct.id,
    brand: getBrand(apiProduct.title),
    name: apiProduct.title,
    price: Math.round(apiProduct.price * 25), // USD → Kč
    sizes: getSizes(apiProduct.category),
    images: [apiProduct.image, apiProduct.image], // API má jen 1 obrázek
    category: apiProduct.category,
    description: apiProduct.description,
    rating: apiProduct.rating,
  };
}

export async function getAllProducts() {
  const res = await fetch(`${BASE_URL}/products`);
  const data = await res.json();
  return data.map(mapProduct);
}

export async function getProductById(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  const data = await res.json();
  return mapProduct(data);
}