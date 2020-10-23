import React from 'react';
import PropTypes from 'prop-types'

function ProductTable (props) {
    return(
        <div>
            {
                props.products.map((el, i) => 
                <div key={i}>
                        <p>{el.title}</p>
                        <p>{el.category}</p>
                        <p>{el.price}</p>                    
                </div>)
            }
        </div>
    )
}
ProductTable.defaultProps = {
    products: [{
        title: 'iPhone',
        category: 'phones',
        price: 120000
    }]
}
ProductTable.propTypes = {
    products: PropTypes.array.isRequired,
}

export default ProductTable