import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'

import reducer from '../reducers/products_reducer'
 import { url1 as url} from '../utils/constants'
 import { idea_url as ideaurl} from '../utils/constants'

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

const initialState = {
  isSidebarOpen:false,
  products_loading:false,
  products_error:false,
  products:[],
  featured_products:[],
  single_product_loading:false,
  single_product_error:false,
  single_product:{},
  idea_loading:false,
  idea_error:false,
  idea:[],
  featured_idea:[],
  single_idea_loading:false,
  single_idea_error:false,
  single_idea:[],
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN})
  }

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE})
  }

  const fetchProducts = async (url) => {
    dispatch({type: GET_PRODUCTS_BEGIN})
    try {
    const response = await axios.get(url)
    const products = response.data
    dispatch({type:GET_PRODUCTS_SUCCESS, payload: products })
  } catch(error) {
      dispatch({type: GET_PRODUCTS_ERROR })
    }
  }

  const fetchIdea = async (ideaurl) => {
    dispatch({type: GET_IDEA_BEGIN})
    try {
    const response = await axios.get(ideaurl)
    const idea = response.data
    dispatch({type:GET_IDEA_SUCCESS, payload: idea })
  } catch(error) {
      dispatch({type: GET_IDEA_ERROR })
    }
  }

  useEffect(() => {
    fetchProducts(url)
    fetchIdea(ideaurl)
  }, [])
  
  const fetchSingleProduct = async (url) => {
    dispatch({type: GET_SINGLE_PRODUCT_BEGIN})
    try {
    const response = await axios.get(url)
    const singleProduct = response.data
    dispatch({type:GET_SINGLE_PRODUCT_SUCCESS,payload:singleProduct})
  } catch(error) {
      dispatch({type:GET_SINGLE_PRODUCT_ERROR})
    }
  }
 
  // IDEA SECTION
  
  const fetchSingleIdea = async (ideaurl) => {
    dispatch({type: GET_SINGLE_IDEA_BEGIN})
    try {
    const response = await axios.get(ideaurl)
    const singleIdea = response.data
    dispatch({type:GET_SINGLE_IDEA_SUCCESS,payload:singleIdea})
  } catch(error) {
      dispatch({type:GET_SINGLE_IDEA_ERROR})
    }
  }

  return (
    <ProductsContext.Provider value={{...state,openSidebar,closeSidebar, fetchSingleProduct, fetchSingleIdea}}>
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
