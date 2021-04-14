import React from 'react'

const Input = ({ formik, id, type }: any) => {
    return (
        <div className="overflow-hidden flex flex-col h-16">
            <input
                type={type}
                id={id}
                placeholder={id.replace(/^\w/, (c:any) => c.toUpperCase())}
                className="h-10 px-3 rounded-md focus:outline-none"
                { ...formik.getFieldProps(id) }
            />
            <div className="text-red-600">
                { formik.touched[id] && formik.errors[id] ? formik.errors[id] : null }
            </div>
        </div>
    )
}

export default Input
