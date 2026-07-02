export const API_ROUTES = {
  CATEGORIES: {
    GET_ALL: "/categories",
    GET_BY_SLUG: (slug: string) => `/categories/${slug}`,
  },
  products: {
    base: "/products",
    getAll: "/products",
    getById: (id: number | string) => `/products/id/${id}`,
    getBySlug: (slug: string) => `/products/${slug}`,
  },
  PRODUCT_IMAGES: {
    GET_BY_PRODUCT_ID: (productId: number | string) =>
      `/products/${productId}/images`,
    ADD: (productId: number | string) => `/products/${productId}/images`,
    DELETE: (imageId: number | string) => `/products/images/${imageId}`,
  },
  ADDRESSES: {
    GET_ALL: "/addresses",
    GET_BY_ID: (id: number | string) => `/addresses/${id}`,
    CREATE: "/addresses",
    UPDATE: (id: number | string) => `/addresses/${id}`,
    DELETE: (id: number | string) => `/addresses/${id}`,
  },
  ORDERS: {
    GET_ALL: "/orders",
    GET_BY_ID: (id: number | string) => `/orders/${id}`,
    CREATE: "/orders",
    UPDATE_STATUS: (id: number | string) => `/orders/${id}/status`,
  },
  CART: {
    GET: "/cart",
    ADD: "/cart/add",
    INCREASE: (id: number | string) => `/cart/increase/${id}`,
    DECREASE: (id: number | string) => `/cart/decrease/${id}`,
    REMOVE: (id: number | string) => `/cart/remove/${id}`,
    MERGE: "/cart/merge",
  },
  AUTH: {
    REGISTER: "/auth/register",
    LOGIN: "/auth/login",
    ME: "/auth/me",
  },
  PAYMENTS: {
    INITIATE: (orderId: number | string) => `/payments/${orderId}/pay`,
    SUCCESS: (transactionCode: string) =>
      `/payments/${transactionCode}/success`,
    FAIL: (transactionCode: string) => `/payments/${transactionCode}/fail`,
    GET_BY_ORDER: (orderId: number | string) => `/payments/order/${orderId}`,
  },
  WALLET: {
    GET_BY_USER_ID: (userId: number | string) => `/wallets/user/${userId}`,
    DEPOSIT: (userId: number | string) => `/wallets/deposit/${userId}`,
    WITHDRAW: (userId: number | string) => `/wallets/withdraw/${userId}`,
  },
  WALLET_TRANSACTIONS: {
    BY_WALLET_ID: (walletId: number | string) => `/wallet/${walletId}`,
    BY_USER_ID: (userId: number | string) => `/wallet/user/${userId}`,
  },
  REVIEWS: {
    GET_BY_PRODUCT: (productId: number | string) =>
      `/products/${productId}/reviews`,
    CREATE: (productId: number | string) => `/products/${productId}/reviews`,
    DELETE: (reviewId: number | string) => `/reviews/${reviewId}`,
  },
  USER_ACTIVITY: {
    CREATE: "/user-activity",
    GET_ALL: "/user-activity",
    GET_BY_USER: (userId: string | number) => `/user-activity/user/${userId}`,
  },
} as const;
