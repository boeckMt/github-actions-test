module.exports = async ({ context, core, exec }) => {
  // fetch tags first
  await exec.exec(`git fetch --prune --all --tags -f`);

  // https://github.com/actions/toolkit/tree/main/packages/exec#args
  // https://github.com/actions/toolkit/blob/main/packages/exec/src/exec.ts#L44
  const commitLastTag = await exec.getExecOutput(`git rev-list --tags --max-count=1`);

  const tag = await exec.getExecOutput(`git describe --tags ${commitLastTag.stdout}`);

  console.log('commitLastTag: ', commitLastTag.stdout)
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
