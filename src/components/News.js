import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)


    const capitalizeFirstLowercaseRest = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };


    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parseData = await data.json();
        props.setProgress(70);
        setArticles(parseData.articles)
        setTotalResults(parseData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }


    useEffect(() => {
        document.title = `${capitalizeFirstLowercaseRest(props.category)} - NewsMonkey`;
        updateNews();
    }, [props.category, updateNews])



    // const handlePrevClick = async () => {
    //     setPage(page - 1)
    //     updateNews()
    // }

    // const handleNextClick = async () => {
    //     setPage(page + 1)
    //     updateNews();
    // }

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parseData = await data.json();
        setArticles(articles.concat(parseData.articles))
        setTotalResults(parseData.totalResults)
    };

    return (
        <>
            <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>NewsMonkey - Top {capitalizeFirstLowercaseRest(props.category)} Headlines</h1>
            {loading && <Spinner />}

            <InfiniteScroll
                dataLength={articles.length} //This is important field to render the next data
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}>

                <div className="container">

                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4 " key={element.url}>
                                <NewsItems title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 90) : ""}
                                    imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })
                        }
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News
