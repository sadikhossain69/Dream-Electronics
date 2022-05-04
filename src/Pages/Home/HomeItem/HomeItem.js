import './HomeItem.css'
import React from 'react';

const HomeItem = ({ item }) => {

    const { name } = item

    return (
        <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="card" style={{ width: '18rem' }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    );
};

export default HomeItem;