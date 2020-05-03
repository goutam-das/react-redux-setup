import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header`
    height: 56px;
    background: lightgrey;
    display: flex;
    align-items: center;
    padding: 0 15px;
`;

const LinkItem = styled(Link)`
    padding: 6px 18px;
    border-bottom: 2px solid #000;
    cursor: pointer;
    margin: 0 5px;
    transition: background 0.1s ease-in-out 0.0s;
    color: #000;
    text-decoration: none;
    &:hover {
        background: rgba(0, 0, 0, 0.5);
        color: #fff;
    }
`;

const Nav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Flex1 = styled.div`
    flex: 1;
`;


export default () => {
    return (
        <Header>
            <Nav>
                <LinkItem exact to="/">Home</LinkItem>
                <Flex1 />
                {/* <LinkItem to="/login">Login</LinkItem> */}
                <LinkItem to="/profile">Profile</LinkItem>
                <LinkItem>Logout</LinkItem>
            </Nav>
        </Header>
    )
}