import URL_SERVER from 'infrastructure/config/domains';

describe('domains', () => {
  it('should have a valid URL_SERVER', () => {
    const expectedURL_SERVER = 'http://localhost:3000';

    expect(URL_SERVER).toBe(expectedURL_SERVER);
  });
});
