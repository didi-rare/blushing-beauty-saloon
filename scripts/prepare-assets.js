import fs from 'fs';
import path from 'path';

const sourceDirs = {
    hairPics: './assets/Hair/pics',
    hairVids: './assets/Hair/videos',
    nailPics: './assets/Nails/pics'
};

const targetDirs = {
    hairPics: './public/portfolio/hair/images',
    hairVids: './public/portfolio/hair/videos',
    nailPics: './public/portfolio/nails/images'
};

// Ensure target directories exist
Object.values(targetDirs).forEach(dir => {
    fs.mkdirSync(dir, { recursive: true });
});

console.log('--- Starting Media Consolidation ---');

// 1. Copy All Images
function copyDirectoryFiles(srcDir, targetDir) {
    if (!fs.existsSync(srcDir)) return;
    const files = fs.readdirSync(srcDir);
    files.forEach(file => {
        fs.copyFileSync(path.join(srcDir, file), path.join(targetDir, file));
    });
    console.log(`Copied ${files.length} files to ${targetDir}`);
}

copyDirectoryFiles(sourceDirs.hairPics, targetDirs.hairPics);
copyDirectoryFiles(sourceDirs.nailPics, targetDirs.nailPics);

// 2. Select 8 Random Videos
if (fs.existsSync(sourceDirs.hairVids)) {
    const allVideos = fs.readdirSync(sourceDirs.hairVids).filter(f => f.endsWith('.mp4'));

    // Shuffle array and pick first 8
    const shuffled = allVideos.sort(() => 0.5 - Math.random());
    const selectedVideos = shuffled.slice(0, 8);

    selectedVideos.forEach(vid => {
        fs.copyFileSync(path.join(sourceDirs.hairVids, vid), path.join(targetDirs.hairVids, vid));
    });
    console.log(`Randomly selected and copied 8 videos to ${targetDirs.hairVids}`);
}

console.log('--- Consolidation Complete ---');
