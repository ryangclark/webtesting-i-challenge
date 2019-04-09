const enhancer = require('./enhancer.js');

let basicItem = {
  name: 'Super Item',
  durability: 0,
  enhancement: 0
};

describe('Enhancer', () => {
  describe('succeed(item)', () => {
    it('Should return an enhanced item', () => {
      expect(
        enhancer.succeed({
          name: 'Super Item',
          durability: 50,
          enhancement: 0
        })
      ).toEqual({
        name: 'Super Item',
        durability: 50,
        enhancement: 1
      });
    });
    it('Should take an item object, and not exceed an enhancement of 20', () => {
      expect(
        enhancer.succeed({
          name: 'Super Item',
          durability: 50,
          enhancement: 20
        })
      ).toEqual({
        name: 'Super Item',
        durability: 50,
        enhancement: 20
      });
    });
  });

  describe('fail(item) tests', () => {
    it('Should take an item object, remove 5 from enhancement if starting less than 15', () => {
      expect(
        enhancer.fail({
          name: 'Super Item',
          durability: 50,
          enhancement: 10
        })
      ).toEqual({
        name: 'Super Item',
        durability: 50,
        enhancement: 5
      });
    });
    it('Should take an item object, remove 10 from enhancement if starting at 15', () => {
      expect(
        enhancer.fail({
          name: 'Super Item',
          durability: 50,
          enhancement: 15
        })
      ).toEqual({
        name: 'Super Item',
        durability: 50,
        enhancement: 5
      });
    });
    it('Should take an item object, remove 1 from enhancement if starting less than 15', () => {
      expect(
        enhancer.fail({
          name: 'Super Item',
          durability: 50,
          enhancement: 18
        })
      ).toEqual({
        name: 'Super Item',
        durability: 50,
        enhancement: 17
      });
    });
  });

  describe('repair(item) tests', () => {
    it('Should take an item object, and return it with durability of 100', () => {
      expect(
        enhancer.repair({
          name: 'Super Item',
          durability: 50,
          enhancement: 20
        })
      ).toEqual({
        name: 'Super Item',
        durability: 100,
        enhancement: 20
      });
      expect(
        enhancer
          .repair({
            name: 'Super Item',
            durability: 100,
            enhancement: 20
          })
      ).toEqual({
        name: 'Super Item',
        durability: 100,
        enhancement: 20
      })
    });
  });
});
