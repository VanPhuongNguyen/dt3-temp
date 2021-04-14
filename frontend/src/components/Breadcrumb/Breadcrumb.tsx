import React from 'react'
import { useLocation } from 'react-router-dom'
import { Breadcrumb } from 'antd'

const { Item } = Breadcrumb

const Breadcrumbs = () => {
    const location = useLocation()

    const pathnames = location.pathname.split('/').filter(x=>x)
    console.log(pathnames)

    return (
        pathnames.length > 0 ? 
            <div className="bg-gray-100 border border-gray-300 rounded-md content-center p-3 mb-5">
                <Breadcrumb>
                    <Item><a href="/">Home</a></Item>
                    
                    {pathnames.map((path, i) => {
                        if (i < pathnames.length - 1) {
                            return <Item key={i}><a href={path}>{path.replace(/^\w/, (c:any) => c.toUpperCase())}</a></Item>
                        } else {
                            return <Item key={i}>{path.replace(/^\w/, (c:any) => c.toUpperCase())}</Item>
                        }
                    })}
                </Breadcrumb>
            </div>
        :null
    )
}

export default Breadcrumbs
