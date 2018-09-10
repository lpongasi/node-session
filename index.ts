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
    const { stdout } = await command('git rev-parse --abbrev-ref HEAD');
    console.log('branch-name:', stdout);
  } catch (e) {
    console.error('An error baby: ', e);
  }
}

init();