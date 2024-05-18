import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface product {
  id: number;
  image: string;
  title: string;
  rating?: number;
  price: number;
  priceBefore?: number;
  type?: string;
  sizes: Array<string>;
  colors: Array<string>;
}

interface initialStateProps {
  sortBy: string;
  price: Array<number>;
  types: { [key: string]: boolean };
  dressStyles: { [key: string]: boolean };
  colors: { [key: string]: boolean };
  sizes: { [key: string]: boolean };
  applyFilter: number;
  isLoading: boolean;
}

const initialState: initialStateProps = {
  sortBy: "Rating DESC",
  price: [10, 300],
  types: {
    "T-shirts": false,
    Shorts: false,
    Shirts: false,
    Hoodie: false,
    Jeans: false,
  },
  dressStyles: {
    Casual: false,
    Formal: false,
    Party: false,
    Gym: false,
  },
  colors: {
    green: false,
    red: false,
    yellow: false,
    orange: false,
    DeepSkyBlue: false,
    blue: false,
    purple: false,
    pink: false,
    white: false,
    black: false,
  },
  sizes: {
    "XX-Small": false,
    "X-Small": false,
    Small: false,
    Medium: false,
    Large: false,
    "X-Large": false,
    "XX-Large": false,
    "3X-Large": false,
    "4X-Large": false,
  },
  applyFilter: 0,
  isLoading: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    ChangeToggle: (
      state,
      action: PayloadAction<{ name: string; value: boolean; type: string }>,
    ) => {
      switch (action.payload.type) {
        case "colors":
          state.colors[action.payload.name] = action.payload.value;
          break;
        case "sizes":
          state.sizes[action.payload.name] = action.payload.value;
          break;
        case "types":
          state.types[action.payload.name] = action.payload.value;
          break;
        case "dressStyles":
          state.dressStyles[action.payload.name] = action.payload.value;
      }
    },
    changePrice: (state, action) => {
      state.price = action.payload;
    },
    changeSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setApplyFilter: (state) => {
      state.applyFilter += 1;
    },
  },
});

export const { ChangeToggle, changePrice, setApplyFilter, changeSortBy } =
  productsSlice.actions;

export default productsSlice.reducer;
