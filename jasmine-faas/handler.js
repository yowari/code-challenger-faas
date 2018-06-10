"use strict"

const fs = require('fs');
const path = require('path');
const Jasmine = require('jasmine');

module.exports = (context, callback) => {
    const param = JSON.parse(context);

    const srcFile = path.join("/tmp", param.name + ".js");
    const specFile = path.join("/tmp", param.name + ".spec.js");

    fs.writeFileSync(srcFile, param.src);
    fs.writeFileSync(specFile, param.spec);

    const jasmine = new Jasmine();

    jasmine.loadConfig({
        spec_files: [
            specFile
        ]
    });

    const reporter = new JsonReporter();

    jasmine.env.clearReporters();
    jasmine.env.addReporter(reporter);

    jasmine.onComplete(passed => {
        fs.unlinkSync(srcFile);
        fs.unlinkSync(specFile);

        callback(undefined, reporter.result);
    });

    jasmine.execute();
}

class JsonReporter {

    constructor() {
        this.result = {
            total: 0,
            failed: 0,
            passed: 0
        };
    }

    jasmineStarted(suiteInfo) {
        this.result = {
            total: 0,
            failed: 0,
            passed: 0
        };
    }

    specDone(res) {
        this.result.total++;

        if (res.status === 'passed') {
            this.result.passed++;
        }
        else {
            this.result.failed++;
        }
    }
}
