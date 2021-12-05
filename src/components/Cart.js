import React, { Component , useState ,useEffect } from 'react';
import {connect} from 'react-redux';
import {deleteItem , increaseItem , decreaseItem ,getTotals} from '../components/actions/itemActions';
import './Cart.css';


const Cart = (props) => {
    

    const {cart} = props.item;

    useEffect(()=>{

        props.getTotals();

    },[])

    
    return ( 
        <div className="cart">
            <div className="inside-container">
                 
                    {cart.length===0 ?
                        <>
                           
                           <img src="images/cart.jpg" className="logocart"/>
                        </>
                        :
                        <>
                          <h3>Cart Products</h3>
                          <div className="cart-center">
                              <div className="cart-info">
                                  {cart.map(cart => (
                                      <div className="single-cart" key={cart._id}>
                                          <div className="cart-img">
                                              <img src={cart.img}/>

                                          </div>
                                          <div className="cart-title sameItem">
                                              <h4>{cart.title}</h4>
                                          </div>
                                          <div className="counting">
                                              <button onClick={()=>{
                                                  props.decreaseItem(cart._id);
                                                  props.getTotals();
                                              }}  
                                              >-</button>
                                              <span>{cart.count}</span>
                                              <button onClick={()=>{
                                                  props.increaseItem(cart._id);
                                                  props.getTotals();
                                              }}
                                              >+</button>
                                          </div>
                                          <div className="price">
                                               <h4>${cart.price * cart.count}</h4>
                                          </div>
                                          <div className="delete-item" onClick={()=>{
                                              props.deleteItem(cart._id);
                                              props.getTotals();

                                            }}
                                          >
                                              <i className="fas fa-trash"></i>
                                          </div>

                                      </div>
                                  ))}
                              </div>
                              <div className="cart-results">
                                   <h3>product details</h3>

                                       <h4>shipping : {props.item.total>=90?<span className="free">free</span>:`${props.item.shipping}`}</h4>
                                       <h4>price: $<span>{props.item.total}</span></h4>

                                      <h4>Total price <span>{props.item.total>=90?
                                      props.item.total:props.item.total + props.item.shipping}
                                      </span></h4>
                            </div>

                          </div>
                           
                        </>
                    }
                
            </div> 
        </div>
     );
}

const mapStateToProps=(state)=>({
    item:state.item
   
   })
   
   
   export default connect(mapStateToProps,{deleteItem , increaseItem , decreaseItem , getTotals})(Cart);