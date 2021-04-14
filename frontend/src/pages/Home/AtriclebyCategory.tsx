import React from 'react'
import { articles } from 'temp-api/api'

const AtriclebyCategory = () => {
    const categories = [
        {text:'Entertainment', color:'pink-400'},
        {text:'Bussiness', color:'blue-400'},
        {text:'Travel', color:'yellow-400'},
        {text:'Life Style', color:'green-400'}
    ]

    const articleRender = (articles: any, category:any) => (
        <div>
            {articles
                .filter((article:any) => article.category == category.text)
                .map((article:any, i:number) => {
                    if (i==0) {
                        return (<div className="relative flex flex-col" key={i}>
                            <button className={`absolute rounded bg-${category.color} text-sm p-2 font-semibold top-2 left-2 text-white`}>{category.text}</button>
                            <img src={article.image} alt="image" className="w-full h-64 rounded-md shadow-xl" />
                            <div className="flex flex-col mt-4">
                                <p className="m-0 text-gray-400">{article.author} - {article.publicDate}</p>
                                <h1 className="text-lg">{article.title}</h1>
                            </div>
                        </div>)
                    } else {
                        return (<div className="flex my-4 relative" key={i}>
                            <button className={`absolute rounded bg-${category.color} text-xs p-1 font-semibold top-1 left-1 text-white`}>{category.text}</button>
                            <img src={article.image} alt="image" className="w-28 h-20 rounded-md shadow-xl mr-4" />
                            <div className="flex">
                                <div className="flex flex-col my-auto">
                                    <p className="m-0 mb-1 text-gray-400">{article.author} - {article.publicDate}</p>
                                    <h1 className="">{article.title}</h1>
                                </div>
                            </div>
                            
                        </div>)
                    }
                })}
        </div>
    )

    return (
        <div>
            {categories.map((category, i) => (
                <div key={i} className="flex flex-col my-10">
                    <div className="flex border border-gray-300 rounded-md h-14 mb-10">
                        <div className={`bg-${category.color} h-full w-2 rounded-md`}></div>
                        <div className="text-lg mx-4 my-auto">{category.text}</div>
                    </div>
                    {articleRender(articles, category)}
                </div>
            ))}
        </div>
    )
}

export default AtriclebyCategory
