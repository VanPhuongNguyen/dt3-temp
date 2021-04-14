import React from 'react'
import { MenuOutlined, FacebookFilled, GoogleOutlined } from '@ant-design/icons'


const Footer = () => {
    const otherLoginItems = [
        FacebookFilled,
        GoogleOutlined
    ]

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
        <div className="flex flex-col bg-black text-white m-0 p-5">
            <img src="public/favicon.ico" alt="logo" className="w-24 mb-3" />
            <p>Lorem Ipsum is simply dummy text of the printing and 
                type setting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since when an unknown printer galley 
                of type and scrambled type specimen book...
            </p>
            <p>Call Us On (+65) 123456</p>
            {otherLoginRender()}
        </div>
    )
}

export default Footer
