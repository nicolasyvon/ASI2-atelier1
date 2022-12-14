import { configureStore } from '@reduxjs/toolkit';
import cardListReducer from '../../reducers/CardListReducer';
import cardReducer from '../../reducers/CardReducer';


export default configureStore({
 reducer: {
               cardReducer : cardReducer,
               cardListReducer : cardListReducer

          },
});