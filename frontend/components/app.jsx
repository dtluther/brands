import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import SplashPage from './splash_page';
import SessionFormContainer from './session_form/session_form_container';
import BrandsPageContainer from './brands_page/brands_page_container';

const App = () => (
    <div>
        <header>
            <NavBarContainer />
        </header>

        <section className="main">
            <Switch>
                <Route path="/brands" component={BrandsPageContainer}/>
                <Route path="/" component={SplashPage}/>
            </Switch>
        </section>
    </div>
);

export default App;