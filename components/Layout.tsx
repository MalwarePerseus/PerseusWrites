import React from 'react'
import { Header } from './'

function Layout({ children } : {children:any}) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default Layout
