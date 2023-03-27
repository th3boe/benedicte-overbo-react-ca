import { create } from "zustand";

const useCartStore = create((set) => ({
  //   products: [],
  cart: [],
  //   cartTotal: [],
  //   addProduct: (id) => set((state) => ({ cart: [...state.cart, id] })),
  //   removeCart: () => set({ cart: [] }),
  //   products: (id) => set((state) => ({ product: [...state.product, id] })),

  //   addProduct: (product) =>
  //     set((state) => {
  //       const productIndex = state.products.findIndex((p) => p.id === product.id);
  //       let newProducts;
  //       if (productIndex !== -1) {
  //         newProducts = state.products.map((p, index) =>
  //           index === productIndex ? { ...p, quantity: p.quantity + 1 } : p
  //         );
  //       } else {
  //         newProducts = [...state.products, { ...product, quantity: 1 }];
  //       }
  //       return { products: newProducts };
  //     }),

  addProduct: (product) =>
    set((state) => {
      //   const productTotal = state.cart.map((product) =>
      //     (
      //       ((product.totalItems + 1) * product.discountedPrice) /
      //       product.totalItems
      //     ).toFixed(2)
      //   );
      const cartAmount = state.cart.findIndex(
        (addedProduct) => addedProduct.id === product.id
      );

      let newCart;

      if (cartAmount !== -1) {
        newCart = state.cart.map((addedProduct, amount) =>
          amount === cartAmount
            ? {
                ...addedProduct,
                totalItems: addedProduct.totalItems + 1,
                discountedPrice: Number.parseFloat(
                  ((addedProduct.totalItems + 1) *
                    addedProduct.discountedPrice) /
                    addedProduct.totalItems
                ).toFixed(2),
              }
            : addedProduct
        );
      } else {
        newCart = [...state.cart, { ...product, totalItems: 1 }];
      }

      return { cart: newCart };
    }),

  //   addQty: () => set((state) => ({ count: state.qty + 1 })),
  newQtyAdd: (id) =>
    set((state) => {
      //   const productTotal = state.cart.map((product) =>
      //     Number.parseFloat(
      //       ((product.totalItems + 1) * product.discountedPrice) /
      //         product.totalItems
      //     ).toFixed(2)
      //   );
      const newCart = state.cart.map((addedProduct) =>
        addedProduct.id === id
          ? {
              ...addedProduct,
              totalItems: addedProduct.totalItems + 1,
              discountedPrice: Number.parseFloat(
                ((addedProduct.totalItems + 1) * addedProduct.discountedPrice) /
                  addedProduct.totalItems
              ).toFixed(2),
            }
          : addedProduct
      );
      return { cart: newCart };
    }),

  //   removeQty: () => set((state) => ({ count: state.qty - 1 })),

  removeQty: (id) =>
    set((state) => {
      //   const productTotal = state.cart.map((product) =>
      //     (
      //       (Math.max(0, product.totalItems - 1) * product.discountedPrice) /
      //       product.totalItems
      //     ).toFixed(2)
      //   );
      const newCart = state.cart.map((addedProduct) =>
        addedProduct.id === id && addedProduct.totalItems > 1
          ? {
              ...addedProduct,
              totalItems: addedProduct.totalItems - 1,
              discountedPrice: Number.parseFloat(
                ((addedProduct.totalItems - 1) * addedProduct.discountedPrice) /
                  addedProduct.totalItems
              ).toFixed(2),
            }
          : addedProduct
      );

      //   const removeProduct = state.cart.filter((addedProduct) =>
      //     addedProduct.id === id && addedProduct.totalItems === 1
      //       ? {
      //           ...addedProduct.slice(0, addedProduct.totalItem),
      //           ...addedProduct.slice(addedProduct.totalItem + 1),
      //         }
      //       : addedProduct
      //   );

      return { cart: newCart };
    }),

  //   removeQty: (product) =>
  //     set((state) => {
  //       const cartAmount = state.cart.findeIndex(
  //         (addedProduct) => addedProduct.id === product.id
  //       );

  //       let newCart;

  //       if (cartAmount >= 2) {
  //         newCart = state.cart.map((addedProduct) =>
  //           addedProduct.id === product.id && addedProduct.totalItems > 1
  //             ? {
  //                 ...addedProduct,
  //                 totalItems: Math.max(0, addedProduct.totalItems - 1),
  //                 discountedPrice: Number.parseFloat(
  //                   ((addedProduct.totalItems - 1) *
  //                     addedProduct.discountedPrice) /
  //                     addedProduct.totalItems
  //                 ).toFixed(2),
  //               }
  //             : addedProduct
  //         );
  //       } else {
  //         newCart = [
  //           ...state.cart.slice(0, cartAmount),
  //           ...state.cart.slice(cartAmount + 1),
  //         ];
  //       }

  //       return { cart: newCart };
  //     }),

  // ? {
  //           ...addedProduct,
  //           totalItems: Math.max(0, addedProduct.totalItems - 1),
  //           discountedPrice: Number.parseFloat(
  //             ((addedProduct.totalItems - 1) * addedProduct.discountedPrice) /
  //               addedProduct.totalItems
  //           ).toFixed(2),
  //         }
  //       : addedProduct

  //   removeProduct: (id) =>
  //     set((state) => {
  //       const newCart = state.cart.filter(
  //         (addedProduct) => addedProduct.id !== id
  //       );
  //       return { cart: newCart };
  //     }),

  removeProduct: (id) =>
    set((state) => {
      const newCart = state.cart.filter(
        (addedProduct) => addedProduct.id !== id
      );
      return { cart: newCart };
    }),

  removeCart: () => set({ cart: [] }),

  //   incrementQuantity: (id) =>
  //     set((state) => {
  //       const newProducts = state.products.map((product) =>
  //         product.id === id
  //           ? {
  //               ...product,
  //               quantity: product.quantity + 1,
  //               discountedPrice:
  //                 ((product.quantity + 1) * product.discountedPrice) /
  //                 product.quantity,
  //             }
  //           : product
  //       );
  //       saveLocalStorage(newProducts);
  //       return { products: newProducts };
  //     }),

  //   removeProduct: (id) =>
  //     set((state) => {
  //       const newProducts = state.products.filter((product) => product.id !== id);
  //       return { products: newProducts };
  //     }),

  // Clear products and amount
  //   clearCart: () => set({ products: [] }),

  //   totalSum: (id) =>
  //     set((state) => {
  //       const totalCart = state.cartTotal.map(
  //         (addedProduct) =>
  //           (addedProduct.id = id
  //             ? {
  //                 cartTotal: totalCart.reduce(
  //                   (total, addedProduct) =>
  //                     total + addedProduct.discountedPrice * addedProduct.length,
  //                   0
  //                 ),
  //               }
  //             : addedProduct)
  //       );
  //       return { cartTotal: totalCart };
  //     }),
}));

function useCart() {
  //   const addProduct = useCartStore((state) => state.addProduct);
  const cart = useCartStore((state) => state.cart);
  const removeCart = useCartStore((state) => state.removeCart);
  //   const products = useCartStore((state) => state.products);
  //   const fetchProducts = useCartStore((state) => state.fetchProducts);

  const addProduct = useCartStore((state) => state.addProduct);
  //   const removeProduct = useCartStore((state) => state.removeProduct);
  //   const products = useCartStore((state) => state.products);

  //   function addToCart(id) {
  //     console.log("Add to cart", id);
  //     addProduct(id);
  //   }
  const newQtyAdd = useCartStore((state) => state.newQtyAdd);
  const removeQty = useCartStore((state) => state.removeQty);
  const removeProduct = useCartStore((state) => state.removeProduct);
  const totalSum = useCartStore((state) => state.totalSum);

  //   const removeProduct = useCartStore((state) => state.removeProduct);

  function addToCart(product) {
    console.log(cart);
    addProduct(product);
  }

  function clearCart() {
    console.log("clear");
    removeCart();
  }

  function add(id) {
    console.log(cart);
    newQtyAdd(id);
  }

  function remove(id) {
    console.log(cart);
    removeQty(id);
  }

  function wifeSaidNo(id) {
    console.log("NO");
    removeProduct(id);
  }

  function getCartTotal() {
    return cart.reduce(
      (total, addedProduct) =>
        total + addedProduct.discountedPrice * addedProduct.length,
      0
    );
  }

  //   function removeFromCart(products) {
  //     removeProduct(products);
  //     console.log(products);
  //   }

  //   function clearCart() {
  //     removeProduct();
  //     console.log("clear");
  //   }

  return {
    addToCart,
    clearCart,
    cart,
    add,
    remove,
    wifeSaidNo,
    getCartTotal,
  };
}

export { useCart };
