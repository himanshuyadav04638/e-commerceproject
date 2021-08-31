import React, { Component } from 'react';
import { storeProducts,detailProduct} from '../data';



const ProductContext=React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
    state={products:[],detailProduct:detailProduct,cart:[],modalOpen:true,modalProduct:detailProduct,cartsubTotal:0,cartTax:0,cartotal:0}
    handleDetail=(id)=>{
       
        const product=this.getItem(id);
        this.setState({detailProduct:product})
            
    }
    addToCart=(id)=>{
       // console.log(`hello from cart id is,${id}`);
        let tempProduct=[...this.state.products];
        const index=tempProduct.indexOf(this.getItem(id));
        //console.log(index)
        const product=tempProduct[index]
        
         product.inCart=true;
        
         product.count=1;
         const price=product.price;
         product.total=price;
         this.setState({products:tempProduct,cart:[...this.state.cart,product]});



    }


    setProducts=()=>{
        let tempProduct=[];
        storeProducts.forEach(item=>{
            const singleItem={...item};
            tempProduct=[...tempProduct,singleItem]
        })
        this.setState(()=>{
            return {products:tempProduct}
        })
    }
    componentDidMount(){
        this.setProducts();
    }
   /*  tester=()=>{
        console.log('State product:',this.state.products[0].inCart)
        console.log('data product',storeProducts[0].inCart);

        const tempProduct=[...this.state.products];
        tempProduct[0].inCart=true;
        this.setState(()=>{
            return(
                {products:tempProduct}
            )
        },()=>{
           
                console.log('State product:',this.state.products[0].inCart)
                console.log('data product',storeProducts[0].inCart);
           
        }
        )
    }
 */
   getItem=(id)=>{
       const product=this.state.products.find(item=>item.id===id)
       
       
       return product;

   }

   openModel=(id)=>{
       const product=this.getItem(id)
      this.setState({modalProduct:product,modalOpen:true})
   }
   closeModal=()=>{
       this.setState({modalOpen:false})
   }

   //cart functionality//

   increment=(id)=>{

     let tempCart=[...this.state.cart];
     const selectedProduct=tempCart.find(item=>item.id===id);
     const index=tempCart.indexOf(selectedProduct);
     const product=tempCart[index];
     product.count=product.count +1;
     product.total=product.price*product.count;
     this.setState({cart:[...tempCart],})


   }
   decrement=(id)=>{
    let tempCart=[...this.state.cart];
     const selectedProduct=tempCart.find(item=>item.id===id);
     const index=tempCart.indexOf(selectedProduct);
     const product=tempCart[index];
     product.count=product.count -1;
     if(product.count===0){
         this.removItem(id)
     }
     else{
        product.total=product.price*product.count;
        this.setState({cart:[...tempCart],})
   

     }
    
  }

  removItem=(id)=>{
   /* let tempProduct=[...this.state.products];
   let tempCart=[...this.state.cart];
   tempCart=tempCart.filter(item=>item.id===id);


   const index=tempProduct.indexOf(this.getItem(id));
   let removeProduct=tempProduct[index];
   removeProduct.inCart=false;
   removeProduct.count=0;
   removeProduct.total=0;
   this.setState({cart:[...tempCart],products:[...tempProduct]},()=>{this.addTotal()}) */
    let cart=[...this.state.cart]
   const removeItem = cart.filter((todo) => {
    return todo.id !== id;
  });
  this.setState({cart:removeItem});
  


}
clearCart=()=>{
 this.setState(()=>{
     
     return { cart:[]}
 },
 ()=>{this.setProducts();
    this.addTotal();

 }
 
 )

}
addTotal=()=>{
    let subTotal=0;
    this.state.cart.map(item=>(subTotal +=item.total));
    const tempTax=subTotal*0.1;
    const tax=parseFloat(tempTax.toFixed(2));
    const total =subTotal+tax;
    this.setState({cartsubTotal:subTotal,cartTax:tax,cartotal:total});


}

  

   
    render() {
        return (
          <ProductContext.Provider value={{...this.state,
          handleDetail:this.handleDetail,
          addTocart:this.addToCart ,
          openModal:this.openModel,
          closeModal:this.closeModal,increment:this.increment,decrement:this.decrement,removItem:this.removItem,clearCart:this.clearCart}} >
             {/*  <button onClick={this.tester} >test me</button> */}
              {this.props.children}

          </ProductContext.Provider>
        );
    }
}


const ProductConsumer=ProductContext.Consumer;
export {ProductConsumer,ProductProvider};