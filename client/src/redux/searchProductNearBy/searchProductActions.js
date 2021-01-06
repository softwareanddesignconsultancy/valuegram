import {SEARCH_PRODUCT_REQUEST,SEARCH_PRODUCT_SUCCESS,SEARCH_PRODUCT_FAILURE} from './searchProductType'; 
import Axios from "axios";
import { SEARCH_PRODUCT_URL } from '../../config';

const searchProductRequest=()=>{
return{
    type:SEARCH_PRODUCT_REQUEST
}
}

const searchProductSuccess=(searchProduct)=>{
    return{
        type:SEARCH_PRODUCT_SUCCESS,
        payload:searchProduct
    };
}

const searchProductFailure=(error)=>{
    return{
        type:SEARCH_PRODUCT_FAILURE,
        payload:error
    }

}

export const searchProduct=()=>{
    return(dispatch) => {
        dispatch(searchProductRequest);
        Axios.get(SEARCH_PRODUCT_URL).then((response) => {
            dispatch(searchProductSuccess(response.data));
        }).catch((error) => {
            dispatch(searchProductFailure(error.message));
        })
    }
}