// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { method } = request;

  if (method === "GET") {
    return response.status(200).json('hi');
  }

  if (method === "POST") {
    const { body } = request;

    return response.status(200).json(body);
  }
}
