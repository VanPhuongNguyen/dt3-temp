import Header from 'components/HeaderFooter/Header'
import Footer from 'components/HeaderFooter/Footer'
import React, { useState, useRef, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import Breadcrumb from 'components/Breadcrumb'

const Layoutt = (props: any) => {
    const isMobile = useMediaQuery({ query: '(max-width: 500px)' })
    const [isShownUserMenu, setShownUserMenu] = useState(false)
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [isVisibleMenu, setVisibleMenu] = useState(true)
    const [isDroppedMenu, setDropMenu] = useState(false)
    const userMenuRef = useRef<any>(null)
    const contentRef = useRef<any>(null)

    useEffect(() => {
        // hide menu when srcolldown
        function handleScroll() {
            const currentScrollPos = contentRef.current ? contentRef.current.scrollTop : 0
            const visible = prevScrollPos > currentScrollPos
            setPrevScrollPos(currentScrollPos)
            setVisibleMenu(visible)
        }

        //User menu close when click outside
        function handleClickOutside(event:any) {
            if (isShownUserMenu && (userMenuRef.current && !userMenuRef.current.contains(event.target))) {
                setShownUserMenu(false)
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        contentRef.current.addEventListener("scroll", handleScroll)
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
            contentRef.current.removeEventListener("scroll", handleScroll)
        };
    })
    
    const logout = () => {
        localStorage.removeItem('beehive-auth')
        window.location.reload()
    }

    //---------------------------------------------------------------------------
    const userMenuItems = [
        { text: 'Profile', link: '/' },
        { text: 'Logout', onclick: () => logout() }
    ]

    const userMenuRender = () => (
        <div ref={userMenuRef} className="flex">
            <div 
            className={`fixed bg-white flex flex-col h-screen 
                ${isShownUserMenu?'w-52':'w-0'} 
                overflow-y-hidden duration-500`}
            >
                {userMenuItems.map((item, i) => (
                    <a
                    key={i}
                    onClick={item.onclick}
                    href={item.link}
                    className="text-black py-3 px-5 border-b">
                        {item.text}
                    </a>
                ))}
            </div>
            <div className={`${isShownUserMenu?'w-52':'w-0'} duration-500`} />
        </div>
    )

    return (
        <div className={`mx-auto flex overflow-x-hidden ${!isMobile?'w-mobile':'w-screen'}`}>
            {userMenuRender()}
            <div  className="relative min-w-full">
                {isShownUserMenu?
                    <div style={{zIndex:999999}} className="absolute w-full h-full bg-black bg-opacity-50 duration-500" />
                :null}

                {isDroppedMenu?
                    <div className="absolute w-full h-full bg-black bg-opacity-50 duration-500 z-40" />
                :null}

                <Header
                    className={`${isVisibleMenu?'top-0':'-top-16'} duration-500`}
                    setShownUserMenu={setShownUserMenu}
                    isShownUserMenu={isShownUserMenu}
                    isDroppedMenu={isDroppedMenu}
                    setDropMenu={setDropMenu}
                />
                <div ref={contentRef} className="flex flex-col layout__scrollbar h-screen overflow-y-auto">
                    <div className={`m-0 ${isVisibleMenu?'mt-32':'mt-16'} flex flex-col bg-white px-5 pt-5 pb-20 duration-500`}>
                        <Breadcrumb />
                        {props.children}
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Layoutt
