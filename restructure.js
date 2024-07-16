const fs = require('fs');
const path = require('path');


// Define the files to be moved
const filesToMove = [
    { src: 'ask.html', dest: 'src/pages/ask.html' },
    { src: 'ask.js', dest: 'src/pages/ask.js' },
    { src: 'index.html', dest: 'src/pages/index.html' },
    { src: 'notifications.html', dest: 'src/pages/notifications.html' },
    { src: 'privacy_policy.html', dest: 'src/pages/privacy_policy.html' },
    { src: 'terms_of_service.html', dest: 'src/pages/terms_of_service.html' },
    { src: 'auth.css', dest: 'src/components/auth/auth.css' },
    { src: 'auth.html', dest: 'src/components/auth/auth.html' },
    { src: 'auth.js', dest: 'src/components/auth/auth.js' },
    { src: 'signup.css', dest: 'src/components/auth/signup.css' },
    { src: 'signup.html', dest: 'src/components/auth/signup.html' },
    { src: 'signup.js', dest: 'src/components/auth/signup.js' },
    { src: 'homepage.css', dest: 'src/components/homepage/homepage.css' },
    { src: 'homepage.html', dest: 'src/components/homepage/homepage.html' },
    { src: 'homepage.js', dest: 'src/components/homepage/homepage.js' },
    { src: 'goals.css', dest: 'src/components/goals/goals.css' },
    { src: 'goals.html', dest: 'src/components/goals/goals.html' },
    { src: 'goals.js', dest: 'src/components/goals/goals.js' },
    { src: 'logFood.css', dest: 'src/components/logFood/logFood.css' },
    { src: 'logFood.html', dest: 'src/components/logFood/logFood.html' },
    { src: 'logFood.js', dest: 'src/components/logFood/logFood.js' },
    { src: 'searchFood.css', dest: 'src/components/searchFood/searchFood.css' },
    { src: 'searchFood.html', dest: 'src/components/searchFood/searchFood.html' },
    { src: 'searchFood.js', dest: 'src/components/searchFood/searchFood.js' },
    { src: 'profile.html', dest: 'src/components/profile/profile.html' },
    { src: 'styles.css', dest: 'src/common/css/styles.css' },
    { src: 'script.js', dest: 'src/common/js/script.js' },
    { src: 'styles.js', dest: 'src/common/js/styles.js' },
    { src: 'instagram.png', dest: 'src/assets/images/instagram.png' },
    { src: 'linkedin.png', dest: 'src/assets/images/linkedin.png' },
    { src: 'twitter.png', dest: 'src/assets/images/twitter.png' },
    { src: 'firebase-config.js', dest: 'src/config/firebase-config.js' },
    { src: 'firebaseSub.js', dest: 'src/config/firebaseSub.js' },
    { src: 'bundle.js', dest: 'src/pages/bundle.js' },
    { src: 'tester.js', dest: 'src/pages/tester.js' }
];

// Move files
filesToMove.forEach(file => {
    const sourcePath = path.join(__dirname, file.src);
    const destPath = path.join(__dirname, file.dest);

    // Log paths for debugging
    console.log(`Checking source path: ${sourcePath}`);
    console.log(`Checking destination path: ${destPath}`);

    if (fs.existsSync(sourcePath)) {
        // Ensure destination directory exists
        const destDir = path.dirname(destPath);
        if (!fs.existsSync(destDir)) {
            fs.mkdirSync(destDir, { recursive: true });
            console.log(`Created destination directory: ${destDir}`);
        }

        fs.renameSync(sourcePath, destPath);
        console.log(`Moved: ${file.src} -> ${file.dest}`);
    } else {
        console.log(`Source file does not exist: ${file.src}`);
    }
});

console.log('Project restructured successfully!');
