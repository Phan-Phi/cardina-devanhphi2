export const ROUTES = {
  CONTACT: `${process.env.NEXT_PUBLIC_BACKEND_API}/api/contact-page`,
  GENERAL_SETTING: `${process.env.NEXT_PUBLIC_BACKEND_API}/api/general-setting`,
  ABOUT: `${process.env.NEXT_PUBLIC_BACKEND_API}/api/about-page`,
  HOME: `${process.env.NEXT_PUBLIC_BACKEND_API}/api/home-page`,
  PRODUCT_LISTING: `${process.env.NEXT_PUBLIC_BACKEND_API}/api/product-listing-page`,
  PRODUCTS: `${process.env.NEXT_PUBLIC_BACKEND_API}/api/products`,
};

export type ROUTES_KEY = keyof typeof ROUTES;

// export const ROUTE_SEARCH_PARAMS: {
//   [key in ROUTES_KEY]: any;
// } = {

//   SEO_SETTING: {
//     populate: "*",
//   },
//   SETTING: {
//     populate: {
//       socialIcons: {
//         populate: "*",
//       },
//     },
//   },
//   ABOUT: {
//     populate: "deep,4",
//   },
//   CONTACT: {
//     populate: "deep,2",
//   },
// };

export const NAVBAR_ROUTES = [
  {
    key: "/",
    name: "Home",
    link: "/",
  },
  {
    key: "/about",
    name: "About Cardina",
    link: "/about",
  },
  {
    key: "/product",
    name: "Products",
    link: "/products",
  },
  {
    key: "/contact",
    name: "Contact",
    link: "/contact",
  },
];
