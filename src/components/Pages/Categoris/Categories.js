import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../newsSummaryCard/NewsSummaryCard';

const Categories = () => {
    const allNews = useLoaderData()
    return (
        <div>
            <h2>this category has <span className='text-praimary'>{allNews.length}</span> news</h2>
            {
                allNews.map(news => <NewsSummaryCard
                key={news._id}
                news = {news}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Categories;