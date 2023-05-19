export const categories = [
  {
    name: "Smartphones",
    href: "smartphones",
  },
  {
    name: "Laptops",
    href: "laptops",
  },
  {
    name: "Fragrances",
    href: "fragrances",
  },
  {
    name: "Skincare",
    href: "skincare",
  },
  {
    name: "Groceries",
    href: "groceries",
  },
  {
    name: "Home Decoration",
    href: "home-decoration",
  },
  {
    name: "Womens Dresses",
    href: "womens-dresses",
  },
  {
    name: "Womens Shoes",
    href: "womens-shoes",
  },
  {
    name: "Mens Shirts",
    href: "mens-shirts",
  },
  {
    name: "Mens Shoes",
    href: "mens-shoes",
  },
  {
    name: "Mens Watches",
    href: "mens-watches",
  },
  {
    name: "Womens Watches",
    href: "womens-watches",
  },
  {
    name: "Womens Bags",
    href: "womens-bags",
  },
  {
    name: "Womens Jewellery",
    href: "womens-jewellery",
  },
  {
    name: "Sunglasses",
    href: "sunglasses",
  },
  {
    name: "Automotive",
    href: "automotive",
  },
  {
    name: "Motorcycle",
    href: "motorcycle",
  },
  {
    name: "Lighting",
    href: "lighting",
  },
];

export let cartData = [];

export const deletePFM = (
  id,
  cart,
  setCart,
  setTotalPrice,
  totalPrice,
  price,
  e
) => {
  e.preventDefault();
  cartData = cartData.filter((item) => item.id !== id);
  setTotalPrice(totalPrice - price);
  setCart(cart - 1);
  console.log(cartData);
};

export const emptyCart = (setCart, setTotalPrice, e) => {
  e.preventDefault()
  cartData.splice(0, cartData.length); // This will delete all the elements in the array
  setCart(0)
  setTotalPrice(0)
  console.log(cartData);
};
