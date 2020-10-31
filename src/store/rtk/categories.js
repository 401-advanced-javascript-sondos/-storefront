
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const categoriesSl = createSlice({
    name: "categories",
    initialState: {
        categories: [],
        activeCategory: "",
    },

    reducers: {

        activated(state, action) {
            console.log('action', action)

            state.activeCategory = action.payload;
            console.log('stattttttttttte',state.activeCategory)


        },

        getCategories(state,action){
            console.log('action', action.payload.result)

         state.categories = action.payload.result;
         state.activeCategory=action.payload.result[0].name
         console.log('stattttttttttte',state.activeCategory)
          

        }
    },
});




export const getRemoteData = () => async (dispatch) => {
   let result= await axios.get(`http://api-testtt.herokuapp.com/api/v1/categories`)
    
        console.log('data cata ',result.data)
        dispatch(getCategories(result.data));
   
}


export const { activated, getCategories } = categoriesSl.actions;
export default categoriesSl.reducer;


