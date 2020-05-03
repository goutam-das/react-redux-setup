import React from 'react';
import styled from 'styled-components';

import Counter from '../components/Counter';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 56px);
`;

const Home = () => {
    return (
        <Container>
            <Counter />
        </Container>
    )
}

export default Home;