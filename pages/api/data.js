import processJsonFile from "../../utils/processJsonFile";

const getStaticPropsData = async (req, res) => {
  if (req.method === "GET") {
    const sections = processJsonFile("sections.json");
    res.status(200).json({ sections });
  }
};
export default getStaticPropsData;
