import nc from "next-connect";
import Product from "../../../models/Product";
import db from "../../../utils/db";

const handler = nc();

//  /api/products
handler.get(async (req, res) => {
  await db.connect();

  const products = await Product.find({}); //get all products

  await db.disconnect();

  res.send(products);
});
export default handler;
