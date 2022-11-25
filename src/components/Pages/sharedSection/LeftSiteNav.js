import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';





const LeftSiteNav = () => {

    const [categoris,setCategories] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res => res.json())
        .then(data => setCategories(data))
        
        
    },[])

   
   
    return (
        <div>
            <h4 id='topSection'>All category</h4>
            {
                categoris.map(category => 
                    <p key={category.id}>
                        <Link to={`/categoris/${category.id}`}>{category.name}</Link>
                    </p>
                )
            }
        </div>
    );
};

export default LeftSiteNav;