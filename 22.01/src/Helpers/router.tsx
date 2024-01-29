import React from 'react'
import Homepage from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'

interface RouteElement {
    path: string
    element: React.JSX.Element
    title: string
}

export const routes: Array<RouteElement> = [
    {
        path: "/",
        element: <Homepage/>,
        title: "Homepage"
    },
    {
        path: "/about",
        element: <About/>,
        title: "About us"
    },
    {
        path: "/contact",
        element : <Contact/>,
        title: "Contact"
    }
]
