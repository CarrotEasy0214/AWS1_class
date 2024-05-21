import { User } from "../../models/index.js";

export default async (req, res) => {
  try {
    if (req.body.title || req.body.content == "") {
      throw new Error("내용을 입력해주세요.");
    }
    const user = await User.create(req.body);
    res.json({ result: "ok" });
  } catch (err) {
    console.error(err);
    if (err.message == "내용을 입력해주세요.") {
      res.status(400);
    } else {
      res.status(409);
    }
    res.json({ error: err.message });
  }
};
