import {FETCH_CATEGORY_REQUEST,FETCH_CATEGORY_SUCCESS,FETCH_CATEGORY_FAILURE} from './categoryType';
import Axios from "axios";
import { FETCH_CATEGORY_URL } from '../../config';

const fetchCategoryRequest=()=>{
return{
    type:FETCH_CATEGORY_REQUEST
}
}

const fetchCategorySuccess=(fetchCategory)=>{
    return{
        type:FETCH_CATEGORY_SUCCESS,
        payload:fetchCategory
    };
}

const fetchCategoryFailure=(error)=>{
    return{
        type:FETCH_CATEGORY_FAILURE,
        payload:error
    }

}

export const fetchCategory=()=>{
    return(dispatch) => {
        dispatch(fetchCategoryRequest);
        Axios.get(FETCH_CATEGORY_URL).then((response) => {
            dispatch(fetchCategorySuccess(response.data));
        }).catch((error) => {
            dispatch(fetchCategoryFailure(error.message));
        })
    }
}
