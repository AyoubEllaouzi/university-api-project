// Import necessary modules
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const getUniversities = require('../services/getUniversities');

describe('getUniversities function', () => {
    // Create a new instance of axios mock adapter
    const mock = new MockAdapter(axios);

    afterEach(() => {
        mock.reset(); // Reset the mock adapter after each test
    });

 // Test for successful HTTP request
it('should fetch universities successfully', async () => {
    // Mocking the response for successful HTTP request
    mock.onGet(process.env.DEV_URL).reply(200, { universities: ['University1', 'University2'] });

    const req = {}; // Mock request object
    const res = {
        render: jest.fn() // Mocking render function
    };

    await getUniversities(req, res);

    // Assert that render function is called with the correct data
    expect(res.render).toHaveBeenCalledWith('universitieView', { universities: { universities: ['University1', 'University2'] } });
});


    // Test for failed HTTP request
    it('should handle error when fetching universities', async () => {
        // Mocking the response for failed HTTP request
        mock.onGet(process.env.DEV_URL).reply(500);

        const req = {}; // Mock request object
        const res = {
            status: jest.fn(() => res), // Mocking status function
            send: jest.fn() // Mocking send function
        };

        await getUniversities(req, res);

        // Assert that status and send functions are called with appropriate arguments
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalledWith('Error fetching data');
    });
});
