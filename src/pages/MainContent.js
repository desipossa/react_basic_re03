import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Section = styled.section`
padding: 100px 0;
text-align: center;
background: #f7f7f7;
`

const Inner = styled.div`
display: flex;
gap: 30px;
margin: 0 auto;
width: 1200px;
&>* {
    flex:1;
    height: 300px;
    background: #444;
    color: #fff;
}

`

const Itm = styled.div`
display: flex;
justify-content: center;
align-items: center;
`



const MainContent = () => {
    return (
        <Section>

            <Inner>
                <Itm>01</Itm>
                <Itm>02</Itm>
                <Itm>03</Itm>
            </Inner>
        </Section>
    )
}

export default MainContent