import * as util from "util";
import { exec as lameExec } from "child_process";
import dotenv from 'dotenv';

dotenv.config();

const exec = util.promisify(lameExec);
const log = console.log.bind(console);

// Top level await works now
const { stdout, stderr } = await exec("ls -la");
log("Output:\n", stdout);
log("\n\nErrors:\n", stderr);
console.log(process.env.MSG);

throw new Error('test error');

export default {}