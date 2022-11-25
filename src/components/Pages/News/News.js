import React from 'react';
import { Image } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';
import { BsBookmark, BsFillShareFill } from 'react-icons/bs';
import {useLoaderData } from 'react-router-dom';


const News = () => {
    const news = useLoaderData()
    let {title,author,image_url,total_view,details,rating,_id} = news;
    let {img, name,published_date} = author;
    return (
        <Card className="text-center my-3">
        <Card.Header className='d-flex align-items-center justify-content-between'>
            <div className='d-flex'>
                 <div><Image roundedCircle variant="top" src={img} style={{width:'50px'}}></Image></div>
                <div  className='m-2 text-start'>
                    <div><strong>{name}</strong></div>
                    <div>{published_date}</div>
                </div>
            </div>
            <div>
                <BsBookmark></BsBookmark> <br />
                <BsFillShareFill></BsFillShareFill>
            </div>
        </Card.Header>

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <div><Image  className='img-fluid' src={image_url}></Image></div>
          <Card.Text>
            
               
                <p>{details}</p>
            
          </Card.Text>
          
        </Card.Body>
        <Card.Footer className="text-muted">Rating :  {rating.number}   people review  : {rating.badge}</Card.Footer>
      </Card>
    );
};

export default News;