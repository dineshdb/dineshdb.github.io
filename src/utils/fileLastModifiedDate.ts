import { execSync } from "child_process";

export const getLastModifiedDate = (file: string) =>
  execSync(`git log -1 --pretty="format:%cI" ${file}`).toString();
