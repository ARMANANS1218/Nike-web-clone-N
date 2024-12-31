import { products } from "../../../data/products/products";

export default function handler(req, res) {
  try {
    const category = req.query.category;
    const filteredProducts = products.filter(
      (product) => product.category === category
    );

    if (filteredProducts.length > 0) {
      res.status(200).json(filteredProducts);
    } else {
      throw new Error("No products found in this category");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
