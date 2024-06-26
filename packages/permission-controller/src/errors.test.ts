import {
  CaveatMergeTypeMismatchError,
  EndowmentPermissionDoesNotExistError,
} from './errors';

describe('error', () => {
  describe('CaveatMergeTypeMismatchError', () => {
    it('has the expected shape', () => {
      expect(new CaveatMergeTypeMismatchError('foo', 'bar').data).toStrictEqual(
        {
          leftCaveatType: 'foo',
          rightCaveatType: 'bar',
        },
      );
    });
  });

  describe('EndowmentPermissionDoesNotExistError', () => {
    it('adds origin argument to data property', () => {
      expect(
        new EndowmentPermissionDoesNotExistError('bar', 'foo.com').data,
      ).toStrictEqual({
        origin: 'foo.com',
      });
    });

    it('does not add an origin property if no data is provided', () => {
      expect(
        new EndowmentPermissionDoesNotExistError('bar').data,
      ).toBeUndefined();
    });
  });
});
