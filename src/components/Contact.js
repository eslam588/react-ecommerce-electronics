import React, { Component } from 'react';
const Contact = () => {
    return ( 
        <div>
            <section class="contact-us text-center">
            <div class="fields">
                <div class="container">
                    <div class="row">
                        <i class="fa fa-headphones fa-5x"></i>
                        <h1>Tell Us What You Fell</h1>
                        <p>Feel Free To Contact Us Anytime</p>
                        <form role="form">
                            <div class="col-md-6 wow bounceInLeft" data-wow-duration="1s" data-wow-offset="300">
                              <div class="form-group">
                                <input type="text" class="form-control input-lg " placeholder="enter usernmae"/>
                              </div>
                              <div class="form-group">
                                <input type="text" class="form-control input-lg" placeholder="enter email"/>
                              </div>
                              <div class="form-group">
                                <input type="text" class="form-control input-lg" placeholder="enter cell phone"/>
                              </div>
                            </div>
                            <div class="col-md-6 wow bounceInRight" data-wow-duration="1s" data-wow-offset="300">
                               <div class="form-group">
                                <textarea class="form-control input-lg" placeholder="your message"></textarea>
                               </div>    
                                <button type="button" class="btn btn-danger btn-lg btn-block">contact us</button>
                            </div>
                        </form> 
                     </div>
                </div>
            </div>
        </section>
        </div>
     );
}

export default Contact;