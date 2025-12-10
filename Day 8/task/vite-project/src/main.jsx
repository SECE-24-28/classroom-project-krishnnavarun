import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Homelayout from './layout/Homelayout.jsx'
import BlogList from '../../../Router/router-project/src/components/BlogList.jsx'
import BlogDetails from '../../../Router/router-project/src/components/BlogDetails.jsx'


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes element = {Homelayout}>
            <Route path="/blogs">
                    <Route index element={<BlogList/>} />
                    <Route path=":id" element={<BlogDetails/>} />
            </Route>
        </Routes>
    </BrowserRouter>
)