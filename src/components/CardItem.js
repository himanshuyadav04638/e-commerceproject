import React from 'react'

export const CardItem = ({item,data}) => {
    const {id,title,img,price,total,count}=item;
    const {increment,decrement,removItem}=data;
    return (
        <div className='row my-1 text-capitalize text-center' >
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} alt="xyz" style={{width:"5rem",height:'5rem'}}  />

            </div>
            <div className='col-10 mx-auto col-lg-2' ><span className='d-lg-none'>Product:</span> {720*title}</div>
            <div className='col-10 mx-auto col-lg-2' ><span className='d-lg-none'>price:</span> {720*price}</div>
            <div className='col-10 mx-auto col-lg-2' >
                <div className="d-flex justify-content-center">
                    <span className='btn btn-black mx-1 'onClick={()=>decrement(id)} >-</span>
                    <span className='btn btn-black mx-1 ' >{count}</span>
                    <span className='btn btn-black mx-1 'onClick={()=>increment(id)} >+</span>
                </div>
            
            </div>
            <div className='col-10 mx-auto col-lg-2' > <div className="cart-icon" onClick={()=>removItem(id)}   > <i className='fas fa-trash' ></i> </div></div>

            <div className='col-10 mx-auto col-lg-2' ><strong>item total: Rs{720*total}</strong></div>

            
            
        </div>
    )
}
