// fileParser.js
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const fs = require('fs');
const parseTextFile = (filePath) => {
    const data = fs.readFileSync(filePath, 'utf8');
    // Parse data from text file
    return parsedData;
};
module.exports = { upload, parseTextFile };
