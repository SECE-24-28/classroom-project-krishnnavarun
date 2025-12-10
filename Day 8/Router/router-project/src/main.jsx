import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import HomeLayout from './layout/HomeLayout.jsx'
import LoginForm from './components/LoginForm.jsx'
import ProductsList from './components/ProductsList.jsx'
import ProductDetails from './components/ProductDetails.jsx'
import BlogList from './components/BlogList.jsx'
import BlogDetails from './components/BlogDetails.jsx'
import AdminPage from './components/AdminPage.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

const products = [
    {
        id: 1,
        name: "Product 1",
        price: 100,
        image: "https://picsum.photos/id/7/300/300"
    },
    {
        id: 2,
        name: "Product 2",
        price: 200,
        image: "https://picsum.photos/id/74/300/300"
    },
    {
        id: 3,
        name: "Product 3",
        price: 300,
        image: "https://picsum.photos/id/15/300/300"
    }
]


createRoot(document.getElementById('root')).render(


    <BrowserRouter>
        <Routes>
            <Route element={<HomeLayout />}>
                <Route path='/' element={<App />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path="/products">
                    <Route index element={<ProductsList products={products} />} />
                    <Route path=":id" element={<ProductDetails/>} />
                </Route>
                <Route path="/blogs">
                    <Route index element={<BlogList/>} />
                    <Route path=":id" element={<BlogDetails/>} />
                </Route>
            </Route>
            <Route path="/login" element={<LoginForm />} />
            <Route path='/admin' element={<ProtectedRoute><AdminPage/></ProtectedRoute>} />

        </Routes>
    </BrowserRouter>
)