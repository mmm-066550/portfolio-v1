import processJsonFile from "./processJsonFile";

const getAllData = () => {
  const sections = processJsonFile("sections.json");
  const links = processJsonFile("links.json");
  const info = processJsonFile("info.json");
  const about = processJsonFile("about.json");
  const education = processJsonFile("education.json");
  const projects = processJsonFile("projects.json");

  return { sections, links, info, about, education, projects };
};
export default getAllData;
