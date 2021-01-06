import {FETCH_CATEGORY_REQUEST,FETCH_CATEGORY_SUCCESS,FETCH_CATEGORY_FAILURE} from './categoryType';

const initialState = {
    loading:false,
    category:[],
    error:'',
}

const categoryReducer = (state = initialState,action) => {
    switch(action.type){
        case FETCH_CATEGORY_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_CATEGORY_SUCCESS:
            return {
                loading: false,
                category:action.payload,
                error:''
            } 
        case FETCH_CATEGORY_FAILURE:
            return{
                ...state,
                loading: false,
                category:[],
                error: action.payload
            }

       default: return state          

    }
}

export default categoryReducer