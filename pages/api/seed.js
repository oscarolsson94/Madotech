import nc from "next-connect";
import Product from "../../models/Product";
import db from "../../utils/db";
import data from "../../utils/data";

const handler = nc();

//  /api/products
handler.get(async (req, res) => {
  await db.connect();

  await Product.deleteMany(); //delete all records of Product model

  await Product.insertMany(data.products);

  await db.disconnect();

  res.send({ message: "seeded db successfully" });
});
export default handler;
