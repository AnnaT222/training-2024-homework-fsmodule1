const fs=require('node:fs')
const path=require('path')

const watchDir = path.join(__dirname, 'watchDir');
fs.watch(watchDir, (eventType, filename) => {
    if (filename) {
        console.log(`File ${filename} has been changed: ${eventType}`);
    } else {
        console.log(`A change occurred in the directory ${watchDir}`);
    }
});

console.log(`Changes will occure in directory: ${watchDir}`);