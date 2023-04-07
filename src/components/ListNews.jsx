import OneNews from './OneNews';
import React, { useState, useEffect } from 'react';
import { getReports} from '../api/api'
import axios from 'axios';
import Spinner from './Spinner';
import { useInView } from 'react-intersection-observer';



const ListNews = () => {
const [articles, setArticles] = useState([]);
const [toNews,setToNews] = useState(5)
const [loading, setLoading] = useState(true)
const {ref, inView} = useInView({
    threshold: 0.5,
})

console.log(inView);


useEffect(()=>{
    if (inView) {setToNews(toNews+4)}
},[inView])

    useEffect(() => {
      const token = 'pk_fe6d7166b78c45caa34379e92b699531';
        getReports(token,toNews)
        .then(response => {
          setArticles(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.log(error);
        });
    }, [toNews]);



    return (
        <>
        {articles.map(article => (
          <OneNews key={article.url} {...article} />
        ))}
        <div ref={ref} ></div>
        {inView
        ?<Spinner/>
        :<div></div>
        }
      </>
    );
};

export default ListNews;