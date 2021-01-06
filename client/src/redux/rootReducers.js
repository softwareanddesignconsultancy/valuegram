import { combineReducers } from 'redux';
import searchProductReducer from './searchProductNearBy/searchProductReducer';
import categoryReducer from './category/categoryReducer';

const rootReducer = combineReducers({
searchProuduct:searchProductReducer,
category:categoryReducer,
})

export default rootReducer;