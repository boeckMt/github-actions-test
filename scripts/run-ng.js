"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const NG = require("@angular/cli");
const args = process.argv.slice(2);
function runNG() {
  return tslib_1.__awaiter(this, void 0, void 0, function* () {
    const options = {
      cliArgs: args
    };
    const maybeExitCode = yield NG.default(options);
    if (typeof maybeExitCode === 'number') {
      process.exit(maybeExitCode);
    }
  });
}
exports.default = runNG;
runNG();
