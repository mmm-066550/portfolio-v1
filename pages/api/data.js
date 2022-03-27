import processJsonFile from "../../utils/processJsonFile";

export default async (req, res) => {
  if (req.method === "GET") {
    const sections = processJsonFile("sections.json");
    res.status(200).json({ sections });
  }
};
