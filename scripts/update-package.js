"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FS = require("fs");
const CWD = process.cwd();
const PATH = require("path");
const argv = require('yargs/yargs')(process.argv.slice(2))
    .option('registry', {
    alias: 'r',
    description: 'url for the registry',
    type: 'string',
})
    .option('path', {
    alias: 'p',
    description: 'path to the package file',
    type: 'string',
})
    .help()
    .alias('help', 'h')
    .argv;
let packagePath = PATH.join(CWD, 'package.json');
if (argv.path) {
    packagePath = PATH.join(CWD, argv.path, 'package.json');
}
const repositoryUrl = `git+https://github.com/${process.env.GITHUB_REPOSITORY}.git`;
function updateJson(path, cb) {
    FS.readFile(path, 'utf8', (error, jsonString) => {
        if (error) {
            console.log(`Error read file ${path}:`, error);
            return;
        }
        try {
            if (jsonString) {
                const jsonObj = JSON.parse(jsonString);
                const content = cb(jsonObj);
                FS.writeFile(path, JSON.stringify(content), err => {
                    if (err) {
                        console.log('Error writing file', err);
                    }
                    else {
                        console.log(`Update file ${path}`);
                    }
                });
            }
        }
        catch (err) {
            console.log(`Error parsing JSON `, err);
        }
    });
}
console.log(packagePath);
updateJson(packagePath, (json) => {
    if (!json.repository) {
        json.repository = {};
    }
    if (typeof json.repository === 'object') {
        json.repository.url = repositoryUrl;
        json.repository.type = `git`;
    }
    return json;
});
