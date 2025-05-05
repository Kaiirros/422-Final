const service = require('../src/service')
const config = require('../src/config.json')
const path = require('path');

const watched = path.join(__dirname, config.watched);
const output = path.join(__dirname, config.output);
const processed = path.join(__dirname, config.processed);

const fs = require('fs');

describe("422 Exam Final - Service Tests", () => {
    it("Check if file is added to output folder", () => {
        expect(fs.readdirSync(output))
    });
})