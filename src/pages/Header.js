import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const HeaderWapper = styled.header`
background: #f9f9f9;
`

const Inner = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 1200px;
height: 100px;
margin: 0 auto;
`

const H1 = styled.h1`
font-size: 30px;
`

const GroablNav = styled.nav``

const UL = styled.ul`
display: flex;
gap: 40px;
`

const LI = styled.li``

const GroablNavLink = styled(Link)`

`

const Header = () => {
    return (
        <HeaderWapper>
            <Inner>
                <H1>
                    <GroablNavLink to='/'>LOGO</GroablNavLink>
                </H1>
                <GroablNav>
                    <UL>
                        <LI><GroablNavLink to='sub/sub01'>sub01</GroablNavLink></LI>
                        <LI><GroablNavLink to='sub/sub02'>sub02</GroablNavLink></LI>
                        <LI><GroablNavLink to='sub/sub03'>sub03</GroablNavLink></LI>
                    </UL>
                </GroablNav>
            </Inner>
        </HeaderWapper>
    )
}

export default Header