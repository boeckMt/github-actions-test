/**
 * github: https://github.com/octokit/rest.js/
 *
 * context: https://github.com/actions/toolkit/blob/main/packages/github/src/interfaces.ts
 * https://github.com/actions/toolkit/blob/main/packages/github/src/context.ts#L64
 */
module.exports = async ({ github, context, core, exec, require }) => {

  //

  // https://github.com/actions/github-script#welcome-a-first-time-contributor
  if (context.payload.repository && context.payload.pull_request) {
    const owner = context.payload.repository.owner.login;
    const repo = context.payload.repository.name;
    const pull = context.payload.pull_request.number;

    console.log(owner, repo, pull);


    const commits = await github.rest.pulls.listCommits({
      owner,
      repo,
      pull_number: pull
    })
    /* const commits = await github.paginate(pullOptions); */

    for (const commit of commits) {
      console.log(commit);
    }


  } else {

  }



  // https://github.com/actions/toolkit/tree/main/packages/exec#args
  // https://github.com/actions/toolkit/blob/main/packages/exec/src/exec.ts#L44
  /* const commitLastTag = await exec.getExecOutput(`git rev-list --tags --max-count=1`);

  const tag = await exec.getExecOutput(`git describe --tags ${commitLastTag.stdout}`);

  console.log('commitLastTag: ', commitLastTag.stdout)
  console.log('tag: ', tag)
  console.log(context);


  core.exportVariable('testtag', tag)
  return tag; */
}
