import { GlobalReset } from "./pages/CommonStyle"
import Footer from "./pages/Footer"
import Header from "./pages/Header"
import MainVisual from "./pages/MainVisual"
import MainContent from "./pages/MainContent"
import MainTab from "./pages/MainTab"
import Main from "./pages/Main"
import { Outlet, Route, Routes } from "react-router-dom"
import Subpage from "./pages/Subpage"

const App = () => {
    return (
        <>
            <GlobalReset />
            <Header />
            <Routes>
                <Route path="/*" element={
                    <Main>
                        <MainVisual />
                        <MainContent />
                        <MainTab />
                        <Outlet />
                    </Main>
                }>
                </Route>
                <Route path="/sub/:subId" element={<Subpage />}></Route>
            </Routes>

            <Footer />
        </>
    )
}

export default App