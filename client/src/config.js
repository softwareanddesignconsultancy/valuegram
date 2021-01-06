import pjson from './../package.json';


const prod = process.env.NODE_ENV === 'production';  

console.log(`Loading ${process.env.NODE_ENV} config...`);

export const SERVER_URL = prod ? '' : 'http://localhost:8080';
export const SEARCH_PRODUCT_URL = SERVER_URL+"/api/productSearch";
export const FETCH_CATEGORY_URL = SERVER_URL+"/api/category";
// export const CLIENT_VERSION = pjson.version;
// export const REACT_VERSION = pjson.dependencies.react;
