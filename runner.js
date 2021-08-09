var Mocha = require('mocha'),
    fs = require('fs'),
    path = require('path');

var mocha = new Mocha().grep(/@smoke |@smoke$/g);

var testDir = 'tests'

fs.readdirSync(testDir).forEach(function(file) {
    mocha.addFile(
        path.join(testDir, file)
    );
});

mocha.run(function(failures) {
  process.exitCode = failures ? 1 : 0;
});