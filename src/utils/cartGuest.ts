export const CART_GUEST_KEY = "guest_id";

export const getGuestId = (): string => {
  let guestId = localStorage.getItem(CART_GUEST_KEY);

  if (!guestId) {
    guestId = crypto.randomUUID();
    localStorage.setItem(CART_GUEST_KEY, guestId);
  }

  return guestId;
};

export const clearGuestId = () => {
  localStorage.removeItem(CART_GUEST_KEY);
};
