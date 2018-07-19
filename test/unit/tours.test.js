const chai = require('chai');
const { assert } = chai;
// const { getErrors } = require('./helpers');
const Tour = require('../../lib/models/tour');

describe('Tour model', () => {

    it('validates good model', () => {
        const data = {
            title: 'Circus Time',
            activities: 'Donny Vomit',
            launchDate: new Date(2018, 7, 18), 
            stop: [{
                location: {
                    city: 'OKC',
                    state: 'OK',
                    zip: 74701
                },
                weather: {
                    temperature: 112,
                    condition: 'sunny'
                },
                attendance: 150
            }]
        };

        const tour = new Tour(data);

        const json = tour.toJSON();
        delete json._id;
        console.log('HEY JSON', json);
        json.stop.forEach(t => delete t._id);
        assert.deepEqual(json, data);
        assert.isUndefined(tour.validateSync());

    });
});