import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions/counterActions';

import imgArrowLeft from '../assets/arrow-left.png';
import imgArrowRight from '../assets/arrow-right.png';

const Container = styled.div`
    width: calc(70% - 100px);
    height: calc(70% - 100px);
    background: grey;
    padding: 50px;
`;

const CountBlock = styled.div`
    display: flex;
    justify-content: center;
`;

const ButtonBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Count = styled.div`
    font-size: 120px;
    color: #fff;
`;

const Button = styled.button`
    height: 150px;
    width: 150px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    cursor: pointer;
    box-sizing: border-box;
    box-shadow: 0 0 2px #fff;
    margin: 10px;
    border: 0;
    outline: 0;
    transition: background 0.1s ease-in-out 0.0s;
    &:hover {
        box-shadow: 0 0 2px #000;
    }
`;

const Img = styled.img`
    width: auto;
    height: auto;
`;

const Counter = () => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();

    return (
        <Container>
            <CountBlock>
                <Count>{counter}</Count>
            </CountBlock>
            <ButtonBlock>
                <Button onClick={() => dispatch(decrement())}>
                    <Img src={imgArrowLeft} />
                </Button>
                <Button onClick={() => dispatch(increment())}>
                    <Img src={imgArrowRight} />
                </Button>
            </ButtonBlock>
        </Container>
    )
}

export default Counter;