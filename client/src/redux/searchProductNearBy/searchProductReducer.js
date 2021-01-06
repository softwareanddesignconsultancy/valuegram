import {SEARCH_PRODUCT_REQUEST,SEARCH_PRODUCT_SUCCESS,SEARCH_PRODUCT_FAILURE} from './searchProductType';

const initialState = {
    loading:false,
    searchProduct:[],
    error:'',
}

const searchProductReducer = (state = initialState,action) => {
    switch(action.type){
        case SEARCH_PRODUCT_REQUEST:
            return {
                ...state,
                loading:true
            }
        case SEARCH_PRODUCT_SUCCESS:
            return {
                loading: false,
                searchProduct:action.payload,
                error:''
            } 
        case SEARCH_PRODUCT_FAILURE:
            return{
                ...state,
                loading: false,
                searchProduct:[],
                error: action.payload
            }

       default: return state          

    }
}

export default searchProductReducer