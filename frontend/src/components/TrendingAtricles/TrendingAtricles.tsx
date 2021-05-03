import React from 'react'
import image from 'public/img/Landscape-Color.jpg'
import { articles } from 'temp-api/api'

const TrendingAtricles = () => {
    return (
        <div>
            {articles.map((article, i) => {
                if (i<5) {
                    
                    return (
                        <a key={i} href="#">
                            <div className={`relative ${i==0?'h-80':'h-48'} mb-1`}>
                                <img src={article.image} alt="article" className="absolute h-full w-full" />
                                <div className="absolute bg-black bg-opacity-50 w-full h-full"></div>
                                <div className="absolute bottom-0 left-5 text-white right-5">
                                    <button
                                        onClick={() => {}}
                                        className="border p-1 rounded mb-3 focus:outline-none hover:bg-white hover:text-black transform duration-500"
                                    >{article.category}</button>
                                    <h1 className="text-3xl text-white truncate">{article.title}</h1>
                                    <p>{article.author} - {article.publicDate}</p>
                                </div>
                            </div>
                        </a>
                    )
                } else {
                    return null
                }
            })}
        </div>
    )
}

export default TrendingAtricles
