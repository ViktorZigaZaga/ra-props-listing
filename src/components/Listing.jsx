import React from "react";
import PropsTypes from 'prop-types';

function Listing(props) {
    const {items = []} = props;

    return (
        <div className="item-list">
            {items.map((item) => item && (item.state !== 'removed') &&
                <div className="item" key={item.listing_id}>
                    <div className="item-image">
                        <a href={item.url}>
                            <img src={item.MainImage && item.MainImage.url_570xN} />
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title">{(item.title.length > 50) 
                                                    ? item.title.substring(0,50) + '...' 
                                                    : item.title}</p>
                        <p className="item-price">{item.currency_code === 'USD' 
                                                    ? `$${item.price}` :
                                                    item.currency_code === 'EUR'
                                                    ? `€${item.price}` :
                                                    `${item.currency_code} ${item.price}`
                        }</p>
                        <p className={`item-quantity level-${item.quantity <= 10 
                                                            ? 'low' 
                                                            : item.quantity > 10 
                                                            ? 'medium' 
                                                            : item.quantity > 20 
                                                            ? 'high' : ''}`}>
                        {item.quantity + ' left'}</p> 
                    </div>
                </div>
            )}
        </div>
    );
}

Listing.PropsTypes = {
    items: PropsTypes.arrayOf(
        PropsTypes.shape({
            listing_id: PropsTypes.number.isRequired,
            url: PropsTypes.string.isRequired,
            MainImage: PropsTypes.shape({
                url_570xN: PropsTypes.string.isRequired,
            }),
            title: PropsTypes.string.isRequired,
            currency_code: PropsTypes.string.isRequired,
            price: PropsTypes.string.isRequired,
            quantity: PropsTypes.number.isRequired,
        })
    )
}

export default Listing