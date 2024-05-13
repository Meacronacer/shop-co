import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface cartItem {
  id: number;
  image: string;
  title: string;
  price: number;
  priceBefore?: number;
  quantity: number;
  color: string;
  size: string;
}

interface IinitialState {
  cartItems: Array<cartItem>;
  totalCost: number;
  itemsCounter: number;
}

const initialState: IinitialState = {
  cartItems: [],
  totalCost: 0,
  itemsCounter: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<cartItem>) => {
      let findEquelProductInCart = false;

      state.cartItems.forEach((item) => {
        if (item.id === action.payload.id) {
          item.quantity = item.quantity + action.payload.quantity;
          state.totalCost += action.payload.quantity * action.payload.price;
          findEquelProductInCart = true;
          return;
        }
      });

      if (!findEquelProductInCart) {
        state.cartItems.push(action.payload);
        state.totalCost += action.payload.quantity * action.payload.price;
        state.itemsCounter += 1;
      }
    },
    removeItemFromCart: (
      state,
      action: PayloadAction<{ index: number; totalPriceOfItem: number }>,
    ) => {
      state.cartItems = state.cartItems.filter(
        (_, index) => index !== action.payload.index,
      );
      state.itemsCounter -= 1;
      state.totalCost -= Number(action.payload.totalPriceOfItem);
    },
    quantityIncrement: (state, action: PayloadAction<number>) => {
      console.log(action.payload);
      state.cartItems[action.payload].quantity += 1;
      state.totalCost += state.cartItems[action.payload].price;
    },
    quantityDecrement: (state, action: PayloadAction<number>) => {
      state.cartItems[action.payload].quantity -= 1;
      state.totalCost -= state.cartItems[action.payload].price;
    },
  },
});

export default cartSlice.reducer;
export const {
  addItemToCart,
  removeItemFromCart,
  quantityIncrement,
  quantityDecrement,
} = cartSlice.actions;
