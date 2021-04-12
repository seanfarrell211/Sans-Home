import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider} from './context/filter_context'
import { CartProvider} from './context/cart_context'
import { UserProvider} from './context/user_context'
import { Auth0Provider} from '@auth0/auth0-react';
//dev-11rhidyd.us.auth0.com
// nWBePue6Gt3eryYDSH4hxGQw0KxBeScs = for React Sans Home

ReactDOM.render(
<Auth0Provider
    domain="dev-11rhidyd.us.auth0.com"
    clientId="nWBePue6Gt3eryYDSH4hxGQw0KxBeScs"
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
>
    <UserProvider>
        <ProductsProvider>
            <FilterProvider>
                <CartProvider>
                    <App />
                </CartProvider>
            </FilterProvider>
        </ProductsProvider>
    </UserProvider>
</Auth0Provider>


,document.getElementById('root'))
