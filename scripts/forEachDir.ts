const FS = require('fs');
const PATH = require('path');
const OS = require('os');
const { fork, spawn } = require('child_process');
const CWD = process.cwd();
const distPath = PATH.join(CWD, 'dist');
const sourcePath = PATH.join(CWD, 'projects');



FS.readdir(sourcePath, (err, files) => {

  files = files.filter(f => {
    return FS.lstatSync(PATH.join(sourcePath, f)).isDirectory();
  });
  console.log(files);
  runBuilds(0, files);
  // runAdjustPackage(1, files);
  // runExecute(1, files);
});


function runBuilds(offset = 0, projects) {
  const project = projects[offset];
  const cliArgs = ['build', '--configuration=production', '--watch=false', project];
  if (project) {
    console.log(`---------------------->>> ${offset + 1}: run ng ${cliArgs.join(' ')}`);
    const child = fork(`${__dirname}/run-ng.js`, cliArgs);
    child.on('close', (code, signal) => {
      offset++;
      if (offset >= projects.length) {
        process.exit(0);
      } else {
        runBuilds(offset, projects);
      }
    });
    child.on('error', (err) => {
      console.error(err);
      process.exit(1);
    });
  }
}


function runAdjustPackage(offset = 0, projects) {
  const project = projects[offset];
  if (project) {
    const path = PATH.join(distPath, project, 'package.json');
    FS.readFile(path, 'utf8', (error, jsonString) => {
      if (error) {
        console.log(`Error read file ${path}:`, error);
        process.exit(1);
      }
      try {
        if (jsonString) {
          const jsonObj = JSON.parse(jsonString);
          if (offset === 1) {
            jsonObj.scripts = {
              "testexit": "node --eval \"console.log('test script should not exit process.\\n')\""
            };
          } else if (offset === 2) {
            jsonObj.scripts = {
              "testexit": "node --eval \"console.error('ERROR: exit not working with && ??.\\n')\" && exit 1"
            };
          }
          const content = jsonObj;
          FS.writeFile(path, JSON.stringify(content), err => {
            if (err) {
              console.log('Error writing file', err);
            } else {
              console.log(`Update file ${path}`);

              offset++;
              if (offset >= projects.length) {
                process.exit(0);
              } else {
                runAdjustPackage(offset, projects);
              }

            }
          });
        }
      } catch (err) {
        console.log(`Error parsing JSON `, err);
        process.exit(1);
      }
    });
  }
}


function runExecute(offset = 0, projects) {
  const project = projects[offset];
  if (project) {
    const path = PATH.join(distPath, project);
    console.log(`spawn: npm run testexit on ${path}`);
    let cmd = 'npm';
    if (OS.platform() === "win32") {
      cmd = 'npm.cmd'
    }

    const child = spawn(cmd, ['run', 'testexit'], {
      cwd: path
    });
    child.on('close', (code, signal) => {
      offset++;
      if (offset >= projects.length) {
        process.exit(0);
      } else {
        runExecute(offset, projects);
      }
    });
    child.on('error', (err) => {
      console.error(err);
      process.exit(1);
    });

  }

}

