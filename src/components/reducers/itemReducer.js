import {GET_ITEMS , ADD_ITEMS, DELETE_ITEM, TOGGLE_NAV , CLOSE_NAVBAR ,BANNER_CLOSE, INCREASE_ITEM, 
    DECREASE_ITEM, TOTAL_ITEMS , DETAILS , FILTER_ITEMS } from '../actions/types';

    const initialState = {
        items:[ {
            _id:1,
            img:'images/speaker1.PNG',
            title:'speaker Ads5',
            price:'100',
            details:'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
            count:1,
            isInCart:false,
            category:"speaker",
    
        },
        {
            _id:2,
            img:'images/speaker2.PNG',
            title:'speaker dfr8',
            price:'100',
            details:'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
            count:1,
            isInCart:false,
            category:"speaker",
    
        },
        {
            _id:3,
            img:'images/speaker3.PNG',
            title:'speaker mtys5',
            price:'100',
            details:'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
            count:1,
            isInCart:false,
            category:"speaker",
    
        },
        {
            _id:4,
            img:'images/speaker4.PNG',
            title:'speaker Ads5',
            price:'100',
            details:'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
            count:1,
            isInCart:false,
            category:"speaker",
    
        },
        {
            _id:5,
            img:'images/speaker5.PNG',
            title:'speaker Ads5',
            price:'100',
            details:'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
            count:1,
            isInCart:false,
            category:"speaker",
    
        },
        {
            _id:6,
            img:'images/speaker6.PNG',
            title:'speaker Ads5',
            price:'100',
            details:'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
            count:1,
            isInCart:false,
            category:"speaker",
    
        },
        {
            _id:7,
            img:'images/headphone1.PNG',
            title:'headphone Ads5',
            price:'100',
            details:'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
            count:1,
            isInCart:false,
            category:"headphone",
    
        },
        {
            _id:8,
            img:'images/headphone2.PNG',
            title:'headphone Ads5',
            price:'100',
            details:'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
            count:1,
            isInCart:false,
            category:"headphone",
    
        },
        {
            _id:9,
            img:'images/headphone3.PNG',
            title:'headphone Ads5',
            price:'100',
            details:'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
            count:1,
            isInCart:false,
            category:"headphone",
    
        },
        {
            _id:10,
            img:'images/headphone4.PNG',
            title:'headphone Ads5',
            price:'100',
            details:'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
            count:1,
            isInCart:false,
            category:"headphone",
    
        },
        {
            _id:11,
            img:'images/headphone5.PNG',
            title:'headphone Ads5',
            price:'100',
            details:'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
            count:1,
            isInCart:false,
            category:"headphone",
    
        },
        {
            _id:12,
            img:'images/headphone6.PNG',
            title:'headphone Ads5',
            price:'100',
            details:'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
            count:1,
            isInCart:false,
            category:"headphone",
    
        },
        {
            _id:13,
            img:'images/mouse1.PNG',
            title:'mouse Ads5',
            price:'100',
            details:'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
            count:1,
            isInCart:false,
            category:"mouse",
    
        },
        {
            _id:14,
            img:'images/mouse2.PNG',
            title:'mouse Ads5',
            price:'100',
            details:'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
            count:1,
            isInCart:false,
            category:"mouse",
    
        },
        {
            _id:15,
            img:'images/mouse3.PNG',
            title:'mouse Ads5',
            price:'100',
            details:'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
            count:1,
            isInCart:false,
            category:"mouse",
    
        },
        {
            _id:16,
            img:'images/mouse4.PNG',
            title:'mouse Ads5',
            price:'100',
            details:'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
            count:1,
            isInCart:false,
            category:"mouse",
    
        },
        {
            _id:17,
            img:'images/mouse5.PNG',
            title:'mouse Ads5',
            price:'100',
            details:'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
            count:1,
            isInCart:false,
            category:"mouse",
    
        },
        {
            _id:18,
            img:'images/mouse6.PNG',
            title:'mouse Ads5',
            price:'100',
            details:'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
            count:1,
            isInCart:false,
            category:"mouse",
    
        },
        {
            _id:19,
            img:'images/keyboard1.PNG',
            title:'keyboard Ads5',
            price:'100',
            details:'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
            count:1,
            isInCart:false,
            category:"keyboard",
    
        },
        {
            _id:20,
            img:'images/keyboard2.PNG',
            title:'keyboard Ads5',
            price:'100',
            details:'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
            count:1,
            isInCart:false,
            category:"keyboard",
    
        },
        {
            _id:21,
            img:'images/keyboard3.PNG',
            title:'keyboard Ads5',
            price:'100',
            details:'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
            count:1,
            isInCart:false,
            category:"keyboard",
    
        },
        {
            _id:22,
            img:'images/keyboard4.PNG',
            title:'speaker Ads5',
            price:'100',
            details:'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
            count:1,
            isInCart:false,
            category:"keyboard",
    
        },
        {
            _id:23,
            img:'images/keyboard5.PNG',
            title:'speaker Ads5',
            price:'100',
            details:'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
            count:1,
            isInCart:false,
            category:"keyboard",
    
        },
        {
            _id:24,
            img:'images/keyboard6.PNG',
            title:'speaker Ads5',
            price:'100',
            details:'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
            count:1,
            isInCart:false,
            category:"keyboard",
    
        },
        {
            _id:25,
            img:'images/airpod1.PNG',
            title:'speaker Ads5',
            price:'100',
            details:'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
            count:1,
            isInCart:false,
            category:"airpod",
    
        },
        {
            _id:26,
            img:'images/airpod2.PNG',
            title:'speaker Ads5',
            price:'100',
            details:'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
            count:1,
            isInCart:false,
            category:"airpod",
    
        },
        {
            _id:27,
            img:'images/airpod3.PNG',
            title:'speaker Ads5',
            price:'100',
            details:'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
            count:1,
            isInCart:false,
            category:"airpod",
    
        },
        {
            _id:28,
            img:'images/airpod4.PNG',
            title:'speaker Ads5',
            price:'100',
            details:'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
            count:1,
            isInCart:false,
            category:"airpod",
    
        },
        {
            _id:29,
            img:'images/airpod5.PNG',
            title:'speaker Ads5',
            price:'100',
            details:'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
            count:1,
            isInCart:false,
            category:"airpod",
    
        },
        {
            _id:30,
            img:'images/airpod6.PNG',
            title:'speaker Ads5',
            price:'100',
            details:'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
            count:1,
            isInCart:false,
            category:"airpod",
    
        },
        {
            _id:31,
            img:'images/powerbank1.PNG',
            title:'speaker Ads5',
            price:'100',
            details:'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
            count:1,
            isInCart:false,
            category:"powerbank",
    
        },

        {
            _id:32,
            img:'images/powerbank2.PNG',
            title:'speaker Ads5',
            price:'100',
            details:'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
            count:1,
            isInCart:false,
            category:"powerbank",
    
        },
        {
            _id:33,
            img:'images/powerbank3.PNG',
            title:'speaker Ads5',
            price:'100',
            details:'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
            count:1,
            isInCart:false,
            category:"powerbank",
    
        },
        {
            _id:34,
            img:'images/powerbank4.PNG',
            title:'speaker Ads5',
            price:'100',
            details:'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
            count:1,
            isInCart:false,
            category:"powerbank",
    
        },
        {
            _id:35,
            img:'images/powerbank5.PNG',
            title:'speaker Ads5',
            price:'100',
            details:'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
            count:1,
            isInCart:false,
            category:"powerbank",
    
        },
        {
            _id:36,
            img:'images/powerbank6.PNG',
            title:'speaker Ads5',
            price:'100',
            details:'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
            count:1,
            isInCart:false,
            category:"powerbank",
    
        },
    
        
    ],
    cart: [],
    isOpen:false,
    total:0,
    shipping:10,
    category:""
    }


    const Todos = (state=initialState, action)=>{
 
        switch(action.type){
              //get initial state
              case GET_ITEMS :
                  return{
                      ...state
                  }

              //    toggle navigation fro appearing
                case TOGGLE_NAV:
                    return{
                        ...state,
                        isOpen:!state.isOpen
                    }

                    // close navbar if it is open
                case CLOSE_NAVBAR:
                    
                if(state.isOpen===true){
                    return{
                        ...state,
                        isOpen:false
                    }
                }


                //   add items to cart
                case ADD_ITEMS:
                let check =state.cart.find(item=>item._id === action.payload);
                if(!check){
                    let items = state.items.filter(item => item._id === action.payload);
                    let itemsCart = [...state.cart , ...items]
                    return { 
                        ...state , 
                        cart:itemsCart
                    }
                }
                else{
                    let items = state.items.filter(item => item._id === action.payload);
                    items.forEach(item => {
                        item.isInCart = true;
                        // alert(`Already in Cart`)
                    })

                    return{
                        ...state
                    }
                }

                // for closing banner after specific time
                case BANNER_CLOSE:
                    state.items.forEach(item=>{
                        item.isInCart=false

                    })

                    return{
                        ...state
                    }
                
                case DELETE_ITEM:
                    const filteredCart = state.cart.filter(item=>item._id!==action.payload);
        
                    return{
                      ...state,
                      cart:filteredCart
                    } 

                case INCREASE_ITEM:
                    let incResults = state.cart.map(item => {
                        if(item._id===action.payload) {
                            item={...item , count:item.count + 1}
                        }
                        return item;
                    })
                    return {
                        ...state,
                        cart:incResults
                    }

                    // decrease item inside the cart
                case DECREASE_ITEM:
                    
                    let decResults = state.cart.map(item=>{
                        if(item._id===action.payload){
                            item={...item, count:item.count===1 ?item.count=1:item.count - 1}
                        }
                        return item;
                    })
            
                    return{
                    ...state,
                    cart:decResults
            
                        }

                
                //get total price 
                case TOTAL_ITEMS:

                    const totals = state.cart.reduce((prev, item)=>{
                    return prev + (item.price * item.count)
                    },0)

                return{
                    ...state,
                    total:totals
                }

                case DETAILS:
        
                return{
                    ...state
                }

                // case FILTER_ITEMS:
                //     filterProducts = (e) => {
                //         if(e.target.value === ""){
                //           setCategory({ category: e.target.value});
                //         }
                //         else
                //         {
                //              setState({ size: e.target.value , products : data.products.filter(
                //             (product) => product.availableSizes.indexOf(e.target.value) >=0 ),
                  
                //           });
                  
                //         }
                //     };
                    
                
                //      return{
                //         ...state
                //     }
 
  
        
                default:
                    return state
                }
    }
    export default Todos;
