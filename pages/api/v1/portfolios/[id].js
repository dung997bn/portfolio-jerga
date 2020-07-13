import axios from "axios";

export default async (req, res) => {
  try {
    const axiosRes = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${req.query.id}`
    );
    const portfolio = axiosRes.data;
    return res.status(200).json(portfolio);
  } catch (error) {
    console.log(error);
    return res
      .status(error.status || 400)
      .json({ message: "Api error" })
      .end();
  }
};
