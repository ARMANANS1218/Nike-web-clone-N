import { products } from "@/data/products/products";

export default function handler(request, response) {
  try {
    const { productId } = request.query;
    if (request.method === "GET") {
      const product = products.find((product) => product.id == productId);

      if (product) {
        response.status(200).json(product);
      } else {
        throw new Error("Product not found");
      }
    } else {
      throw new Error("Request Error");
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
}
