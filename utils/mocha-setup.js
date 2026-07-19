const path = require('path');

exports.mochaHooks = {
  beforeEach() {
    // Verifica se estamos no início de um novo arquivo
    if (this.currentTest.parent.title !== this.lastFile) {
        this.lastFile = this.currentTest.parent.title;
        const fileName = path.basename(this.currentTest.file);
        
        console.log(`\n------------------------------------------------------------------`);
        console.log(`Running: ${fileName} on API Server`);
        console.log(`------------------------------------------------------------------`);
    }
  }
};