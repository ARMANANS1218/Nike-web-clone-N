export default function handler(request, response) {
  try {
    if (request.method === "GET") {
      response
        .status(200)
        .json([
          `Men's Shoes`,
          `Women's Shoes`,
          `Men's clothes`,
          `Women's clothes`,
        ]);
    } else {
      throw new Error("Request Error");
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
}
