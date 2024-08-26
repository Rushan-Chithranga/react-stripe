/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  return knex("products")
    .del()
    .then(function () {
      return knex("products").insert([
        {
          name: "T-Shirt",
          description: "A comfortable cotton T-Shirt",
          price: 1000,
          quantity: 50,
        },
        {
          name: "Jeans",
          description: "Stylish denim jeans",
          price: 2500,
          quantity: 30,
        },
      ]);
    });
};
