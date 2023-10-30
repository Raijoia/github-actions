import { exec, execSync } from "child_process";

console.log("[DEPLOY_PREVIEW]: START");
const command = "yarn deploy:staging";
const output = execSync(command, { encoding: "utf8" });
console.log("[DEPLOY_PREVIEW]: END");
console.log(output);
