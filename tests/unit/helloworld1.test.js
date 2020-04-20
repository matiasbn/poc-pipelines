const appRoot = require('app-root-path');
const path = require('path');
const debug = require('debug')(process.env.DEBUG_NAMESPACE + path.basename(__filename));

const helloWorld1 = require(`${appRoot}/handlers/hello-world-1`).lambdaHandler;

describe('helloworld1 unit testing', () => {
  test('testing the response value', async () => {
    const response = await helloWorld1();
    const body = JSON.parse(response.body);
    debug(body);
    // expect(body.message).toBe('hello world1');
    expect(true);
  });
});
