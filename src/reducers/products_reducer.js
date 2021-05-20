import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  GET_IDEA_BEGIN,
  GET_IDEA_SUCCESS,
  GET_IDEA_ERROR,
  GET_SINGLE_IDEA_BEGIN,
  GET_SINGLE_IDEA_SUCCESS,
  GET_SINGLE_IDEA_ERROR,
} from '../actions'

const products_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN){
    return {...state,isSidebarOpen:true}
  }

  if (action.type === SIDEBAR_CLOSE){
    return {...state,isSidebarOpen:false}
  }
  if(action.type === GET_PRODUCTS_BEGIN) {
    return {...state, products_loading: true}
  }

  if(action.type === GET_PRODUCTS_SUCCESS) {
    //const featured_products = action.payload.filter(
    //  (products) => products.featured === true)
    return {...state, products_loading: false, products:action.payload, featured_products:action.payload,}
  }

  if(action.type === GET_PRODUCTS_ERROR) {
    return {...state, products_loading: false, products_error: true}
  }

  if(action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return {...state, single_product_loading: true, single_product_error:false} 
  }

  if(action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return {...state, single_product_loading: false, single_product:action.payload}
  }

  if(action.type === GET_SINGLE_PRODUCT_ERROR) {
    return {...state, single_product_loading: false, single_product_error: true}
  }

  // IDEA SECTION
  if(action.type === GET_IDEA_BEGIN) {
    return {...state, idea_loading: true}
  }

  if(action.type === GET_IDEA_SUCCESS) {
    //const featured_idea = action.payload.filter(
     // (idea) => idea.featured === true)
    return {...state, idea_loading: false, idea:action.payload, featured_idea:action.payload,}
  }

  if(action.type === GET_IDEA_ERROR) {
    return {...state, idea_loading: false, idea_error: true}
  }

  if(action.type === GET_SINGLE_IDEA_BEGIN) {
    return {...state, single_idea_loading: true, single_idea_error:false} 
  }

  if(action.type === GET_SINGLE_IDEA_SUCCESS) {
    return {...state, single_idea_loading: false, single_idea:action.payload}
  }

  if(action.type === GET_SINGLE_IDEA_ERROR) {
    return {...state, single_idea_loading: false, single_idea_error: true}
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer
