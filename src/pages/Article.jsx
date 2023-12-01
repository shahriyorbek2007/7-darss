import { Link, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import React from "react"


function Article() {
    const { id } = useParams()
    const url = "http://localhost:3000/articles" + id
    const { data: article, isPending, error } = useFetch(url)

    return (
        <>
            {article && (
                <>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={article.image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{article.title}</h2>
                            <p>{article.author}</p>
                            <div className="card-actions">
                                <Link to="/" className="btn btn-primary">Home</Link>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Article