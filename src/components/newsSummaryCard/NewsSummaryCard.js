import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { BsBookmark } from "react-icons/bs";
import { BsFillShareFill } from "react-icons/bs";
import { AiTwotoneStar } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

import { Link } from 'react-router-dom';

const NewsSummaryCard = ({news}) => {
    let {title,author,image_url,total_view,details,rating,_id} = news;
    let {img, name,published_date} = author;
    // console.log(news);
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
            {
                details.length > 250 ?
                <p>{details.slice(0,250) +'...'}<Link to={`/news/${_id}`}>SeeMore</Link></p> 
                :
                <p>{details}</p>
            }
          </Card.Text>
          
        </Card.Body>
        <Card.Footer className="text-muted">
          <div className='d-flex justify-content-between'>
            <div> <AiTwotoneStar className='text-warning'></AiTwotoneStar>  {rating.number}   review : {rating.badge}</div>
            <div><AiFillEye className='text-success'></AiFillEye> {total_view}</div>
          </div>
         
          </Card.Footer>
      </Card>
    );
};

export default NewsSummaryCard;