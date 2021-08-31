import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from './Context';
import PropTypes from 'prop-types'
class Product extends Component {
    render() {
        const {id,title,img,price,inCart}=this.props.items;
        return (
            <div className='col-9 mx-auto col-md-6 col-lg-3 my-3 productWrapper'>
            
                <div className="card">
                    <ProductConsumer>
                        {(data)=>(
                             <div className="img-container p-5" onClick={()=>data.handleDetail(id)}>
                             <Link to='/Details' >
                                 <img src={img} alt="" className='card-img-top' />
                                 
                             </Link>
                             <button className='card-btn' disabled={inCart ? true :false} onClick={()=>{data.addTocart(id);data.openModal(id)}} >
                                 {inCart ? (
                                 <p className="text-capitalize mb-0" disabled >{""}in cart</p>) :(<i className='fas fa-cart-plus' />)}
                                 
                             </button>
                             
                         </div>

                        )}
                   
                    </ProductConsumer>
                  
                   
                    {/* card footer */}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="algn-self-center mb-0">
                            {title}
                        </p>
                        <h5 className='text-blue font-italic mb-0' >
                            <span className='mr-1'>₹</span>
                            { 720*price}
                        </h5>

                    </div>

                </div>
            </div>
        );
    }
}

Product.propTypes={
    products:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool

    }).isRequired
}


export default Product;
