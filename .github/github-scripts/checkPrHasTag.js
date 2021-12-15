module.exports = async ({ github, context, core, exec, require }) => {

  // https://github.com/actions/toolkit/blob/main/packages/github/src/context.ts#L64

  // https://github.com/actions/github-script#welcome-a-first-time-contributor
  const repo = context.repository;
  const pullOptions = github.rest.pulls.listCommits({
    owner: repo.owner,
    repo: repo.name,
    pull_number: context.pull_request.number
  })
  const commits = await github.paginate(pullOptions);

  commits.forEach(c => {
    console.log(c)
  });


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
