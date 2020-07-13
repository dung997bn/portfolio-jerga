import axios from "axios";

export default async (req, res) => {
  try {
    const axiosRes = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    let portfolios = axiosRes.data;
    const data = portfolios.slice(0, 10);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res
      .status(error.status || 400)
      .json({ message: "Api error" })
      .end();
  }
};
