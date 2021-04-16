import Header from 'components/HeaderFooter/Header'
import Footer from 'components/HeaderFooter/Footer'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Breadcrumb from 'components/Breadcrumb'

const Layoutt = (props: any) => {
    const isMobile = useMediaQuery({ query: '(max-width: 500px)' })

    return (
        <div className={`mx-auto flex flex-col ${!isMobile?'w-mobile':'w-screen'}`}>
            <Header />
            <div className="bg-white h-full m-0 px-5 pt-5 pb-20">
                <Breadcrumb />
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layoutt
