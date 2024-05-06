import connection from "../../../../utility";
import User from "../../../../models/user";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function POST(req, res) {
  try {
    console.log('CONNECTING TO MONGO');
    await connection();
    console.log('CONNECTED TO MONGO');

    console.log('CREATING DOCUMENT');
    const test = await User.create(req.body);
    console.log('CREATED DOCUMENT');

    res.json({ test });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
