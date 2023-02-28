import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
//router 탭,  state 탭, 2가지 만들어보기...

const Section = styled.section`
padding: 100px 0;
`

const Inner = styled.div`
display: flex;
gap: 30px;
margin: 0 auto;
width: 1200px;
&>* {
    flex:1;
    overflow: hidden;
}

`

const RouterTab = styled.div``

const UL = styled.ul`
display: flex;
gap: 40px;
`

const LI = styled.li``


const MainTab = () => {
    return (
        <Section>
            <Inner>
                <RouterTab>
                    <UL>
                        <LI><Link to='tab01'>router tab01</Link></LI>
                        <LI><Link to='tab02'>router tab02</Link></LI>
                        <LI><Link to='tab03'>router tab03</Link></LI>
                    </UL>
                    <Outlet />
                    <Routes>
                        <Route path='/' element={<div>router con01</div>}></Route>
                        <Route path='tab01' element={<div>router con01</div>}></Route>
                        <Route path='tab02' element={<div>router con02</div>}></Route>
                        <Route path='tab03' element={<div>router con03</div>}></Route>
                    </Routes>
                </RouterTab>
            </Inner>
        </Section>
    )
}

export default MainTab