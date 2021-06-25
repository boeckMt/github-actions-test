const FS = require('fs');
const path = './dist/test-lib/package.json';

module.exports = ({ github, context }) => {
  FS.readFile(path, 'utf8', (error, jsonString) => {
    if (error) {
      console.log(`Error read file ${path}:`, error);
      return;
    }
    try {
      if (jsonString) {
        const jsonObj = JSON.parse(jsonString);
        jsonObj.scripts = {
          "testexit": "exit 0"
        };
        const content = jsonObj;
        FS.writeFile(path, JSON.stringify(content), err => {
          if (err) {
            console.log('Error writing file', err);
          } else {
            console.log(`Update file ${path}`);
          }
        });
      }
    } catch (err) {
      console.log(`Error parsing JSON `, err);
    }
  });
}
