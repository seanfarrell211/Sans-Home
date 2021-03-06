import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'

import {Home, 
  SingleProduct,
  SingleIdea2Page,
  Cart, 
  Checkout, 
  Error, 
  About, 
  Products, 
  PrivateRoute,
  IdeaPage, 
  Membership,
  AuthWrapper} from './pages'

function App() {
  return(
    <AuthWrapper>
    <Router>
      <Navbar/>
      <Sidebar/>
      <Switch>    
        <Route exact path ='/'>
          <Home/>
        </Route>

        <Route exact path ='/about'>
          <About/>
        </Route>

        <Route exact path ='/cart'>
          <Cart/>
        </Route>

        <Route exact path ='/membership'>
          <Membership/>
        </Route>

        <Route exact path ='/idea'>
          <IdeaPage/>
        </Route>

        <Route exact path ='/products'>
          <Products/>
        </Route>

        <Route exact path ="/products/:id" children ={<SingleProduct />}
        />
        <Route exact path ="/idea/:id" children ={<SingleIdea2Page />}
        />

        <PrivateRoute exact path ='/checkout'>
          <Checkout/>
        </PrivateRoute>

        <Route path ="*">
          <Error/>
        </Route>


      </Switch>  
     <Footer />
    </Router>
    </AuthWrapper>
  )
}

export default App
