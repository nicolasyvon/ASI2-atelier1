import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './reducers/CardReducer';


export default configureStore({
 reducer: {
               cardReducer : cardReducer,

          },
});