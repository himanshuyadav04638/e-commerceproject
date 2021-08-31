import React from 'react'
import Tittle from './Tittle'
import CardColumn from './CardColumn';
import Cardempty from './Cardempty';
import { CardList } from './CardList';
import { ProductConsumer } from './Context';
import CardTotal from './CardTotal';




const Cards = () => {
    return (
        <section>
            <ProductConsumer>
                {
                    (data)=>{
                        const {cart}=data;
                        if(cart.length>0){
                            return(
                                <>
                                <Tittle name='your' title='cart' />
                                <CardColumn />
                                <CardList data={data} />
                                <CardTotal data={data} />
                                </>
                            )
                        }
                        else{
                            return <Cardempty />
                        }
                    }
                }

            </ProductConsumer>
           
           
            

        </section>
    )
}

export default Cards
