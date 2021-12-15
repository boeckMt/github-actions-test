module.exports = async ({ context, core, exec }) => {
  // fetch tags first
  await exec.exec(`git fetch --prune --all --tags -f`);

  let tag = null;
  let commitLastTag = null;

  // https://github.com/actions/toolkit/tree/main/packages/exec#args
  await exec.exec(`git rev-list --tags --max-count=1`, {
    listeners: {
      stdout: (data) => {
        commitLastTag += data.toString();
      }
    }
  });


  await exec.exec(`git describe --tags ${commitLastTag}`, {
    listeners: {
      stdout: (data) => {
        tag += data.toString();
      }
    }
  });

  console.log('commitLastTag: ', commitLastTag)
  console.log('tag: ', tag)
  // console.log(github);
  console.log(context);


  /**
  const fetch = require('cross-fetch');
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const todo = await response.json();
  */
  core.exportVariable('testtag', tag)
  return tag;
}
