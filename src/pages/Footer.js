import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
padding: 30px 0;
border-top: 1px solid #ddd;
text-align: center;
`

const Inner = styled.div`
margin: 0 auto;
width: 1200px;
`


const Footer = () => {
    return (
        <FooterWrapper>
            <Inner>
                &copy; lee
            </Inner>
        </FooterWrapper>
    )
}

export default Footer