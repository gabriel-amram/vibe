const nodePlop = require('node-plop');
const { getFilesWithNoMetadata } = require("./metadata-util");

const plop = nodePlop(`./plopfile.js`);
const IconGenerator = plop.getGenerator('Icon');

const { fileWithNoMeta } = getFilesWithNoMetadata();

async function addFiles() {
    if(fileWithNoMeta && fileWithNoMeta.length > 0) {
        for(const file of fileWithNoMeta) {
            console.log(`generating meta for file: ${file}`);
            const answers = await IconGenerator.runPrompts([file.substr(0, file.indexOf(".")), file]);
            await IconGenerator.runActions(answers);
        }
    }
}

addFiles();
