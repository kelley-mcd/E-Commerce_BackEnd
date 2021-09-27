const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category);
Category.hasMany(Product);

Category.hasMany(Product, {
  as: 'products_product'
  }
);

Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'product_many_tags'
});

Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'tag_many_products'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
