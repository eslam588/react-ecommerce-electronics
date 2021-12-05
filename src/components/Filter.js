import React, { Component } from 'react';
import './Filter.css';
const Filter = () => {
    return ( 
        <div className="filter">
            <div className="filtered" >
            <form className="filter-resualt">
                    <input 
                           type = "text"
                           placeholder="Search for products..."
                    />
              </form>
            </div>
            <div className="filter-sort">
                <span>Order: </span>
                <select  >
                    <option>Latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
            </div>
            <div className="filter-size">
                <span>Categories: </span>
                <select  >
                    <option value="">All</option>
                    <option value="speaker">speaker</option>
                    <option value="headphone">headphone</option>
                    <option value="airpod">airpod</option>
                    <option value="mouse">mouse</option>
                    <option value="powerbank">powerbank</option>
                </select>
            </div>
        </div>
     );
}

export default Filter;