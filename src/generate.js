/**
 * This script generates 100 random objects
 * @returns an object containing several fields and values
 */

module.exports = () => {
  const lodash = require("lodash");
  const { faker } = require("@faker-js/faker");
  return {
    products: lodash.times(100, function (n) {
      return {
        id: n,
        productName: faker.commerce.productName(),
        department: faker.commerce.department(),
        price: faker.commerce.price(),
        quantity: 0,
        productMaterial: faker.commerce.productMaterial(),
        productDescription: faker.commerce.productDescription(),
        img: faker.image.avatar(),
      };
    }),
  };
};
