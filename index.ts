import command from './command';

/**
 * 1. We need a develop branch
 * 2. We need a fix branch.
 * 
 * 3. commit the change
 * 4. push to origin
 * 5. create a new release.
 */

async function init() {
  try {
    await command('git fetch --all');
    const { stdout: branchName } = await command('git rev-parse --abbrev-ref HEAD');
    await command('git add .');
    await command('git commit -m "this is commit"');
   
    await command('git checkout develop');
    await command('git pull --rebase');
    await command(`git checkout ${branchName}`);
    await command('git rebase develop');
    console.log('branch-name:', branchName);
  } catch (e) {
    console.error('An error baby: ', e);
  }
}

init();