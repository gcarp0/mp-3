import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/mains/Home";
import Education from "./components/mains/Education";
import Employment from "./components/mains/Employment";
import Extra from "./components/mains/Extra";
import Projects from "./components/mains/Projects";
import Resources from "./components/mains/Resources";
import Nav from "./components/Nav";
//done
const Wrapper = styled.div`
    flex: 1;
    background-color: #c1c1c113;
    font-family: 'Georgia', serif;
    align-self: stretch;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    flex: 1;
    background-color: #c1c1c113;
    align-items: stretch;


    @media screen and (max-width: 750px) {
        flex-direction: column;
    }
`;

const PageWrapper = styled.div`
    background-color: #c1c1c113;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

function Root(){ 
  return (
    <PageWrapper>
      <Header/>
      <Container>
        <Nav/>
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/education" element={<Education/>}/>
            <Route path="/employment" element={<Employment/>}/>
            <Route path="/extra" element={<Extra/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/resources" element={<Resources/>}/>
            <Route path="*" element={<h1>404 - Page Not Found</h1>}/>
          </Routes>
        </Wrapper>
      </Container>
      <Footer/>
    </PageWrapper>
  )
}

const router=createBrowserRouter(
    [{path:"*",Component:Root}]
)

export default function App() {
    return <RouterProvider router={router}/>
}