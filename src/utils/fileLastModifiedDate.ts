import { execSync } from "child_process";

export const getLastModifiedDate = (file) => {
  try {
    return execSync(`git log -1 --pretty="format:%cI" ${file}`).toString();
  } catch (e) {
    return new Date().toString();
  }
};
