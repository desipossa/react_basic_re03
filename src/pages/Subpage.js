import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import SubHeader from './SubHeader';

const SubpageWrapper = styled.article`
min-height: 700px;
padding: 100px 0;
`

const Inner = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 1200px;
height: 100px;
margin: 0 auto;
`

const Subpage = () => {
    const { subId } = useParams();
    return (
        <SubpageWrapper>
            <SubHeader />
            <Inner>Subpage    {subId}</Inner>
        </SubpageWrapper>
    )
}

export default Subpage;