/*
{
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
*/

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";


export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  

}

interface ProductsState {
    list: Product[];
    loading:boolean;
    error: string | null;
}

const initialState: ProductsState = {
    list: [],
    loading: false,
    error:null,
};

export const fetchProducts = createAsyncThunk<Product[]>(   
    "products/fetchProducts",
    async () =>{
        const res = await fetch("https://fakestoreapi.com/products");
        return await res.json();
    }
);

export const productsSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        removeProduct(state, action) {
            state.list = state.list.filter((p) => p.id !== action.payload);
          },
          
    },
    extraReducers:(builder) => {
        builder 
        .addCase(fetchProducts.pending, (state)=>{
            state.loading = true;
        })
        .addCase(fetchProducts.fulfilled, (state, action)=>{
            state.loading = false;
            state.list = action.payload
        })
        .addCase(fetchProducts.rejected, (state)=>{
            state.loading = false;
            state.error = "Ошибка загрузки продуктов";
        })
        },
});

export const selectProducts = (state: RootState ) => state.products.list;
export const selectLoading = (state: RootState) => state.products.loading;

export default productsSlice.reducer;

