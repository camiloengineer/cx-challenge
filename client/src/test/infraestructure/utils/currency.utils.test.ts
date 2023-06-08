import twFocusClass from 'infrastructure/utils/focus.utils';


describe('twFocusClass', () => {
  test('should return focus class without ring', () => {
    const result = twFocusClass(false);
    expect(result).toBe('focus:outline-none');
  });

  test('should return focus class with ring', () => {
    const result = twFocusClass(true);
    expect(result).toBe('focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0');
  });
});
