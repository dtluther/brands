import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import SplashPage from './splash_page';
import BrandsPageContainer from './brands_page/brands_page_container';
import ProductsPageContainer from './products_page/products_page_container';
import BrandsFormPage from './brands_form/brands_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <header>
            <NavBarContainer />
        </header>

        <section className="main">
            <Switch>
                <Route path="/brands/new" component={BrandsFormPage}
                <Route path="/brands" component={BrandsPageContainer}/>
                <Route path="/products" component={ProductsPageContainer}/>
                <AuthRoute path="/login" component={SplashPage}/>
                <AuthRoute path="/" component={SplashPage}/>
            </Switch>
        </section>
    </div>
);

export default App;