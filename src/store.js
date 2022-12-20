import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './reducers/CardReducer';
import userReducer from './reducers/UserReducer';
import listcardReducer from './reducers/ListCardReducer'


export default configureStore({
 reducer: {
               cardReducer : cardReducer,
               listcardReducer : listcardReducer,
               userReducer : userReducer
          },
});