import * as FS from 'fs';
module.exports = ({ github, context }, path:string, fn: (jsonObj:any)=> void) => {
  updateJson(path, (jsonObj) => {
    return fn(jsonObj);
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
