const path = require('path');

// Isso simula o "Running: filename.spec.js" do WebdriverIO
before(function() {
    const fileName = path.basename(this.test.file);
    console.log(`\n------------------------------------------------------------------`);
    console.log(`Running: ${fileName} on API Server`);
    console.log(`------------------------------------------------------------------\n`);
});