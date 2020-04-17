const appRoot = require('app-root-path');
const path = require('path');
const debug = require('debug')(process.env.DEBUG_NAMESPACE + path.basename(__filename));

const lambda = require(`${appRoot}/handlers/game-of-thrones`).lambdaHandler;

describe('gameOfThrones unit testing', () => {
  test('testing the response value', async () => {
    const response = await lambda();
    const body = JSON.parse(response.body);
    debug(body);
    expect(body.message).toBe('Jon Snow');
  });
});
