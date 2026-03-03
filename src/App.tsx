import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router";
import styled from "styled-components";

function Root(){ 
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>}/>
      <Route path="/education" element={<h1>Education</h1>}/>
      <Route path="/employment" element={<h1>Employment</h1>}/>
      <Route path="/extra" element={<h1>Extracurriculars</h1>}/>
      <Route path="/projects" element={<h1>Projects</h1>}/>
      <Route path="/resources" element={<h1>Resources</h1>}/>
    </Routes>
  )
}

const router=createBrowserRouter(
    [{path:"*",Component:Root}]
)

export default function App() {
    return (
        <>
          <RouterProvider router={router}/>
        </>
    )
}
// add styling and media screens