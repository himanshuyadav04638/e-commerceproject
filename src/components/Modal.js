import React, { Component } from 'react';
import { ProductConsumer } from './Context';
import { Link } from 'react-router-dom';

class Modal extends Component {
    render() {
        return (
            <ProductConsumer >
                {(data)=>{
                    const {modalOpen,closeModal}=data;
                    const {img,title,price}=data.modalProduct;
                   
                   if(!modalOpen){
                       return null;
                   }
                   else{
                       return(
                           <>
                           <div className="ModalContainer">
                           <div className="container">
                           <div className="row">
                               <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capotalize">
                             <h5>item added to the cart</h5>
                             <img src={img} alt="product" className='img-fluid' />
                             <h5>{title}</h5>
                             <h5 className='text-muted' >price : rs {720*price}</h5>
                             <Link to='/' >
                                 <button className="home-btn" onClick={()=>closeModal()}>
                                          home
                                 </button>
                             </Link>
                             <Link to='/Cards' >
                                 <button className="cart-btn" onClick={()=>closeModal()}>
                                            go to cart
                                 </button>
                             </Link>

                               </div>
                           </div>
                          </div>

                           </div>
                           </>
                       )
                   }
                
                }
                    
                }

              
          </ProductConsumer>
         
        );
    }
}

export default Modal;