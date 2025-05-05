const parser = require('../src/parser')
const config = require('../src/config.json')
const path = require('path');
const fs = require('fs');
const { parse } = require('csv');

const watched = path.join(__dirname, config.watched);
const output = path.join(__dirname, config.output);
const processed = path.join(__dirname, config.processed);
jest.mock('fs');
// idk how to mock files

describe("422 Exam Final - Parser Tests", () => {
    it("Check if file is added to output folder", () => {
        parser.setWatched(watched);
        parser.setOutput(output);
        parser.setProcessed(processed);

        parser.processChange('../test_data/patient_data_2.csv')
        expect(fs.readdirSync(output));
    });

    it("Throw error if file is not correct name format", () => {
        expect(() => parser.processChange('../test_data/patient_d')).toThrowError();
    });
})