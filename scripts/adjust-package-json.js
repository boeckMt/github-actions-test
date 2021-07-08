const FS = require('fs');
const path = './dist/test-lib/package.json';
const path2 = './dist/test-lib2/package.json';
const path3 = './dist/test-lib3/package.json';
module.exports = ({ github, context }) => {
  updateJson(path, (jsonObj) => {
    jsonObj.scripts = {
      "testexit": "node --eval \"console.log('test script should not exit process.\\n')\""
    };
    return jsonObj;
  });

  updateJson(path2, (jsonObj) => {
    jsonObj.scripts = {
      "testexit": "node --eval \"console.error('ERROR: exit not working with && ??.\\n')\" && exit 1"
    };
    return jsonObj;
  });


  updateJson(path3, (jsonObj) => {
    jsonObj.scripts = {
      "testexit": "node --eval \"console.log('test script should not be executed.\\n')\""
    };
    return jsonObj;
  });
}

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
