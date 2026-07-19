const path = require('path');

exports.mochaHooks = {
  beforeEach() {
    const currentFile = this.currentTest.file;

    if (currentFile !== this.lastFile) {
        this.lastFile = currentFile;
        const fileName = path.basename(currentFile);
        
        console.log(`\n------------------------------------------------------------------`);
        console.log(`Running: ${fileName}`);
        console.log(`------------------------------------------------------------------`);
    }
  }
};