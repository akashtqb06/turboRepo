const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const appName = process.argv[2];

if (!appName) {
    console.error('\x1b[31mError: Please provide the app name (e.g., app1 or app2).\x1b[0m');
    process.exit(1);
}

const appRepoUrl = `https://github.com/your-org/${appName}.git`;
const appFolder = path.join(__dirname, 'apps', appName);

function cloneApp(appRepoUrl, appFolder) {
    if (!fs.existsSync(appFolder)) {
        console.log(`\x1b[36mCloning ${appName} repository...\x1b[0m`);
        execSync(`git clone ${appRepoUrl} ${appFolder}`, { stdio: 'inherit' });
        console.log(`\x1b[32mSuccessfully cloned ${appName} into the apps folder.\x1b[0m`);
    } else {
        console.log(`\x1b[33m${appName} repository already exists, pulling latest changes...\x1b[0m`);
        execSync(`git -C ${appFolder} pull`, { stdio: 'inherit' });
        console.log(`\x1b[32mSuccessfully updated ${appName} repository.\x1b[0m`);
    }
}

try {
    cloneApp(appRepoUrl, appFolder);

    // Run npm install after cloning or updating the repo
    console.log(`\x1b[36mRunning npm install in ${appFolder}...\x1b[0m`);
    execSync(`npm install`, { cwd: appFolder, stdio: 'inherit' });
    console.log(`\x1b[32mSuccessfully installed dependencies for ${appName}.\x1b[0m`);
    
} catch (error) {
    console.error(`\x1b[31mFailed to clone, update, or install dependencies for ${appName}. Please check the app name or the repository URL.\x1b[0m`);
    process.exit(1);
}
