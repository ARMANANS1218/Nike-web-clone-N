import { products } from "@/data/products/products";

export default function handler(request, response) {
  try {
    if (request.method === "GET") {
      response.status(200).json(products);
    } else {
      throw new Error("Request Error");
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
}
