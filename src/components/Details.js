import React from 'react'
import { ProductConsumer } from './Context'
import { Link } from 'react-router-dom'

const Details = () => {
    return (
      <ProductConsumer>
          {(data)=>{
              console.log(data.detailProduct)
              const {id,company,img,info,price,title,inCart}=data.detailProduct;
              return(
                  <div className="container py-5">
                      <div className="row">
                          <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                              <h1>{title}</h1>
                            {/*   end title */}
                             {/*   product info */}
                             <div className="row">
                                 <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                     <img src={img} alt={img} className='img-fluid' />
                                 </div>
                                 <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                     <h2>model : {title}</h2>
                                     <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                                         made by : <span className='text-uppercase'>{company}</span>
                                     </h4>

                                     <h4 className='text-blue'>
                                         <strong>
                                                price :<span>₹</span> {price*720}
                                         </strong>
                                     </h4>
                                     <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                                         some info about product:
                                     </p>
                                     <p className="text-muted lead">{info}</p>
                               {/*       buttton */}
                                      <div>
                                          <Link to='/' >
                                              <button className='home-btn'>Back to Home page</button>
                                        </Link>
                                         <button className="cart-btn" disabled={inCart ? true  :false} onClick={()=>{
                                             data.addTocart(id);data.openModal(id)
                                            
                                         }}>
                                             {inCart ? "incart" :"Add to cart"}

                                         </button>

                                      </div>
                                 </div>
                             </div>

                          </div>
                      </div>
                  </div>
              )

              

          }}
      </ProductConsumer>
    )
}

export default Details
