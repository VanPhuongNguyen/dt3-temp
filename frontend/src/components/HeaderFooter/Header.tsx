import React, { useState } from 'react'
import { MenuOutlined, FacebookFilled, GoogleOutlined } from '@ant-design/icons'
import { RootState } from 'redux/reducers'
import { useSelector } from 'react-redux'

const Header = () => {
    const user = useSelector((state:RootState) => state.users.user)
    const [isDropped, setDrop] = useState(false)
    const menuItems = [
        { text: 'Home', link: "/" },
        { text: 'News', link: "/" },
        { text: 'Entertainment', link: "/" },
        { text: 'Bussiness', link: "/" },
        { text: 'Travel', link: "/" },
        { text: 'Life Style', link: "/" },
        { text: 'Video', link: "/" },
        { text: 'Feature', link: "/" }
    ]
    const otherLoginItems = [
        FacebookFilled,
        GoogleOutlined
    ]

    const logout = () => {
        localStorage.removeItem('beehive-auth')
        window.location.reload()
    }

    const menuRender = () => (
        <ul className="flex flex-col bg-blue-500 m-0">
            {menuItems.map((item, i) => (
                <a key={i} href={item.link} className="text-decoration: none">
                    <li  className="text-white px-5 py-3 border-b cursor-pointer">{item.text}</li>
                </a>
            ))}
        </ul>
    )

    const otherLoginRender = () => (
        <div className="flex">
            {otherLoginItems.map((Item, i) => (
                <Item
                    key={i} 
                    style={{color:'white'}} 
                    className="bg-blue-500 ml-2 p-2 rounded-full cursor-pointer"
                />
            ))}
        </div>
    )

    return (
        <div className="flex flex-col shadow-md z-50">
            <div className="flex bg-black h-16 items-center justify-between m-0 px-5">
                {user?
                <a onClick={logout} className="text-white">Log out</a>
                :<a className="text-white" href="/registerLogin">Sign in</a>}
                {otherLoginRender()}
            </div>
            <div className="flex bg-white h-16 justify-between items-center m-0 px-5">
                <a href="/"><img src="public/favicon.ico" alt="logo" className="w-24" /></a>
                <MenuOutlined 
                    style={{color: 'white'}} 
                    className="bg-blue-500 p-3 rounded-md transform hover:scale-110 duration-500 cursor-pointer"
                    onClick={() => {setDrop(!isDropped)}}
                />
            </div>
            <div className={`overflow-hidden ${isDropped?'h-menu':'h-0'} transform duration-500`}>
                {menuRender()}
            </div>
        </div>
    )
}

export default Header
