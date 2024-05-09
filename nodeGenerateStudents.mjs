import path from "path";
import fs from "fs";

/**
 * USAGE
 *
 * Generates a student data file template.
 *
 * 1. Add student names to the STUDENTS_NAMES array
 * 2. node ./nodeGenerateStudents.mjs
 */
const OUTPUT_PATH = path.join(process.cwd(), "final-site-v08/js/students");
const STUDENTS_NAMES = ["leighna", "megan", "emily", "andrew", "ian", "breann", "amanda"];

const fileTemplate = `
export default {
  id: "",
  name: "",
  program: "",
  profileImage: {
    src: "",
    alt: "",
  },
  websiteLink: {
    href: "",
  },
  demoReelLink: {
    href: "",
  },
  projectLarge: {
    src: "",
    alt: "",
    "data-fancybox": "",
  },
  projectMedium: {
    src: "",
    alt: "",
    "data-fancybox": "",
  },
  projectSmall: {
    src: "",
    alt: "",
    "data-fancybox": "",
  },
};
`;

for (const name of STUDENTS_NAMES) {
  const filePath = path.join(OUTPUT_PATH, `${name}.js`);

  // Don't override existing files
  if (fs.existsSync(filePath)) {
    console.log(`Student ${name} at ${filePath} already exists`);
  } else {
    fs.writeFileSync(filePath, fileTemplate, { encoding: "utf-8" });
    console.log(`Created student data file at ${filePath}`);
  }
}
