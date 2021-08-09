import { gitRequest, getLimitApiRate } from '../requestApi.js';

describe('requestApi', () => {
  global.fetch = jest.fn(() => Promise.resolve({}));

  beforeEach(() => {
    fetch.mockClear();
  });

  test('should call API', async () => {
    await gitRequest('ring');
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});

describe('getLimitApiRate', () => {
  const headers = [
    ['cache-control', 'no-cache'],
    ['content-length', '398'],
    ['content-type', 'application/json; charset=utf-8'],
    ['x-github-media-type', 'github.v3; format=json'],
    ['x-ratelimit-limit', '10'],
    ['x-ratelimit-remaining', '9'],
  ];

  test('should get api rate limit', () => {
    const res = getLimitApiRate(headers);
    expect(res).toBe(9);
  });
});
