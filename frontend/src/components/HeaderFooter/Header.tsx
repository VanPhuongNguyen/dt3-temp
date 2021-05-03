import React, { useRef, useEffect } from 'react'
import { SearchOutlined, MenuOutlined, FacebookFilled, GoogleOutlined } from '@ant-design/icons'
import { RootState } from 'redux/reducers'
import { useSelector, useDispatch } from 'react-redux'
import { createSearch } from 'redux/actions/search'
import InputForm from 'components/utils/InputForm'
import { useFormik } from 'formik'
import NoProfile from 'assets/img/no-profile.jpg'

const Header = (props: any) => {
    const dispatch = useDispatch()
    const user = useSelector((state:RootState) => state.users.user)
    const getUserError = useSelector((state: RootState) => state.users.getUserError)
    const search = useSelector((state: RootState) => state.search.search)
    const ref = useRef<any>(null)
    const formik = useFormik({
        initialValues: {
            search: ''
        },
        onSubmit: ({ search }) => {
            dispatch(createSearch(search))
        }
    })

    useEffect(() => {
        if (search) alert(search?.text)
    }, [JSON.stringify(search)])

    //------------------------------------------------------------------------------
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

     //------------------------------------------------------------------------------
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

    const menuRender = () => (
        <ul className="flex flex-col bg-blue-500 m-0">
            <form className="flex flex-col w-full" onSubmit={formik.handleSubmit}>
                <InputForm
                    formik={formik}
                    type="text"
                    id="search"
                    className="border-b border-white px-5 justify-center"
                    Icon={SearchOutlined}
                />
                <button
                    className="absolute right-7 top-4 bg-gray-500 text-white py-1 px-3 rounded-full focus:outline-none"
                    type="submit"
                >Search</button>
            </form>
            {menuItems.map((item, i) => (
                <a key={i} href={item.link} className="text-decoration: none">
                    <li  className="text-white px-5 py-3 border-b cursor-pointer">{item.text}</li>
                </a>
            ))}
        </ul>
    )

    const headerRender = () => (
        <div className="flex flex-col shadow-md">
            <div className="flex bg-white h-16 justify-between items-center m-0 px-5">
                <a href="/"><img src="public/favicon.ico" alt="logo" className="w-24" /></a>
                <MenuOutlined 
                    style={{color: 'white'}} 
                    className="bg-blue-500 p-3 rounded-md transform hover:scale-110 duration-500 cursor-pointer"
                    onClick={() => {props.setDropMenu(!props.isDroppedMenu)}}
                />
            </div>
            <div ref={ref} className={`overflow-hidden ${props.isDroppedMenu?'h-menu':'h-0'} transform duration-500`}>
                {menuRender()}
            </div>
        </div>
    )

    //----------------------------------------------------------------------------

    return (
        <div className={`${props.className}  flex flex-col absolute w-full z-50`}>
            <div
            className="h-16 flex bg-black items-center justify-between m-0 px-5">
                {!getUserError
                ?<a
                onClick={() => props.setShownUserMenu(props.isShownUserMenu?false:true)}>
                    <img className="rounded-full w-8 h-8" src={user?.avatar? user?.avatar : NoProfile}/>
                </a>
                :<a className="text-white" href="/registerLogin">Sign in</a>}
                {otherLoginRender()}
            </div>
            {headerRender()}
        </div>
        
    )
}

export default Header
