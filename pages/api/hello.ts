import { NextApiRequest, NextApiResponse } from "next";

interface Response {
  name: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  res.status(200).json({ name: "DAnte Arias" });
}
