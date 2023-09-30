export function modifiedTime() {
  return function (tree, file) {
    file.data.astro.frontmatter.lastModified = getLastModifiedDate(
      file.history[0],
    );
  };
}
import { execSync } from "child_process";

export const getLastModifiedDate = (file) => {
  try {
    return execSync(`git log -1 --pretty="format:%cI" ${file}`).toString();
  } catch (e) {
    return new Date().toString();
  }
};
