const service = require('../src/service')
const config = require('../src/config.json')
const path = require('path');

const watched = path.join(__dirname, config.watched);
const output = path.join(__dirname, config.output);
const processed = path.join(__dirname, config.processed);

const fs = require('fs');

describe("422 Exam Final - Service Tests", () => {
    it("Check if outbound folder is created", () => {
      expect(fs.existsSync(output))
    });

    it("Check if processed folder is created", () => {
        expect(fs.existsSync(processed))
    });

    it("Check if watched folder is created", () => {
        expect(fs.existsSync(watched))
    });

    it("Throw error if file is not correct name format", () => {
        expect(() => parser.processChange('../test_data/patient_d')).toThrowError();
    });

})