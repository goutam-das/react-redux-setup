import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';

const PageContainer = styled.div`
    width: 80%;
    margin: 0 auto;
`;

const Pages = () => {
    return (
        <PageContainer>
            <Header />
            <main>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/profile" exact component={Profile} />
                </Switch>
            </main>
        </PageContainer>
    )
}

export default Pages;