import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.DELIVERY_SHOP_URL!);
const cliientPromise = client.connect();

export const getDb = async () => {
   return(await cliientPromise).db(process.env.DELIVERY_SHOP_NAME!);
}
 