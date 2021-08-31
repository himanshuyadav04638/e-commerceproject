import React from 'react'
import { CardItem } from './CardItem'

export const CardList = ({data}) => {
   
    const {cart} =data
    console.log(data,cart)
    return (
        <div className='container-fluid' >
          {cart.map(item=><CardItem key={item.id} item={item} data={data}  /> )}
            

        </div>
    )
}
