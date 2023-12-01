import React, { useEffect } from 'react'
import { useFetch } from "../hooks/useFetch"
import ArticleList from '../components/ArticleList'
import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react'
import Loading from '../components/Loading'


function Home() {
  const { dispatch, loading } = useContext(ThemeContext)
  const { data: articles, isPending, error } = useFetch("http://localhost:3000/articles")

  useEffect(() => {
    dispatch({ type: 'CHANE_PENDING', payload: isPending })
  }, [isPending])


  if (loading) {
    return <Loading />
  }

  return (
    <div>
      {articles && <ArticleList articles={articles} />}
    </div>
  )
}

export default Home