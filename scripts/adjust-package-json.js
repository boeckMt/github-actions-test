const FS = require('fs');
const path = './dist/test-lib/package.json';
const path2 = './dist/test-lib2/package.json';
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
          "testexit": "node --eval \"console.log('test script should not exit process.\\n')\""
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

  FS.readFile(path2, 'utf8', (error, jsonString) => {
    if (error) {
      console.log(`Error read file ${path}:`, error);
      return;
    }
    try {
      if (jsonString) {
        const jsonObj = JSON.parse(jsonString);
        jsonObj.scripts = {
          "testexit": "node --eval \"console.error('ERROR: exit not working with && ??.\\n')\" && exit 1"
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
