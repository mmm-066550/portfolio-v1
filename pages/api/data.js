import processJsonFile from "../../utils/processJsonFile";

const getStaticPropsData = async (req, res) => {
  if (req.method === "GET") {
    const sections = processJsonFile("sections.json");
    const links = processJsonFile("links.json");
    const info = processJsonFile("info.json");
    const about = processJsonFile("about.json");
    const education = processJsonFile("education.json");
    const projects = processJsonFile("projects.json");

    res.status(200).json({ sections, links, info, about, education, projects });
  }
};
export default getStaticPropsData;
