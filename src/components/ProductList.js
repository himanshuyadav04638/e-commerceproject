import React from 'react'
import Product from './Product'
import Tittle from './Tittle'
//import { storeProducts } from '../data'
import { ProductConsumer } from './Context'

const ProductList = () => {
    //const [state,setstate]=useState({Product:storeProducts})
    //console.log(state.Product)

    return (
    
            <React.Fragment>
                <div className="py-4">
                    <div className="container">
                        <div className="row">
                            <Tittle name="our" title="product" />

                        </div>
                        <div className="row">
                            <ProductConsumer>
                                {
                                    (data)=>{
                                      
                                        return data.products.map((item)=>{
                                            return <Product items={item} key={item.id} />
                                        })
                                    }
                                }
                            </ProductConsumer>
                        </div>
                    </div>


                </div>



            </React.Fragment>
            
            //<Product />

            
        
    )
}

export default ProductList
