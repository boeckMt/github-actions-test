/**
 * github: https://github.com/octokit/rest.js/
 *
 * context: https://github.com/actions/toolkit/blob/main/packages/github/src/interfaces.ts
 * https://github.com/actions/toolkit/blob/main/packages/github/src/context.ts#L64
 */
module.exports = async ({ github, context, core, exec, require }) => {

  if (context.payload.pull_request.title) {
    const title = context.payload.pull_request.title;
    const parts = title.split('release-');
    if (parts.length === 2) {
      core.exportVariable('VERSION_TAG', parts[2]);
    } else {
      core.setFailed(`Your PR title does not follow the naming convention "release-v[0-9]+.[0-9]+.[0-9]" ${title}`)
    }
  }


  // https://github.com/actions/github-script#welcome-a-first-time-contributor
  if (context.payload.repository && context.payload.pull_request) {
    /* const owner = context.payload.repository.owner.login;
    const repo = context.payload.repository.name;
    const pull = context.payload.pull_request.number; */

    /* const pullOptions = await github.rest.pulls.listCommits({
      owner,
      repo,
      pull_number: pull
    })
    const commits = await github.paginate(pullOptions);

    for (const commit of commits) {
      console.log(commit);
    } */


    /* const commits_url = context.payload.pull_request.commits_url;
    const commits_count = context.payload.pull_request.commits;
    const limit = 30; */
    /**
     * https://docs.github.com/en/rest/reference/pulls#list-commits-on-a-pull-request
     * per_page: Default 30
     */
    /* const getPage = (count) => {
      const limit = 30;
      return Math.ceil(count / limit)
    }

    const result = await github.request(commits_url, {
      per_page: limit,
      page: getPage(commits_count)
    }); */

    // fetsh tags before
    // https://github.com/actions/virtual-environments/issues/1717#issuecomment-702714806

    /* await exec.getExecOutput(`git fetch --prune --all -f --depth=${commits_count+1}`);

    const tags = [];
    for (let c of result.data) {
      const tag = await exec.getExecOutput(`git tag --points-at ${c.sha}`);
      if (tag) {
        tags.push(tag);
      }
    };

    console.log(tags); */

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
