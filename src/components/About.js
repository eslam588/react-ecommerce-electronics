import React, { Component } from 'react';


const About = () => {
    return ( 
        <div className="about">
            <section className="about-us text-center">
            <div className="container">
                <h1>About Us</h1>
                <hr/>
                <img src="images/shop.webp" width="600px"/>
                <p className="lead">We Create Your Digital Dreams Just Think And Tell Us What You Need 
                     Or Leave The Inspiration To Us And Just Watch, Just Believe In Our Professionals.
                </p>
                <img className="img-thumbnail"/>
            </div>        
        
           </section>  
        <section class="about-features text-center">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <i class="fa fa-code fa-5x"></i>
                        <h3>we love code</h3>
                        <p>We Create Your Digital Dreams Just Think And Tell Us What You Need Or Leave The Inspiration To Us And Just Watch, Just Believe In Our Professionals</p>
                    </div>
                    <div class="col-sm-4">
                        <i class="fa fa-child fa-5x"></i>
                        <h3>We Are Happy</h3>
                        <p>We Create Your Digital Dreams Just Think And Tell Us What You Need Or Leave The Inspiration To Us And Just Watch, Just Believe In Our Professionals</p>
                    </div> 
                    <div class="col-sm-4">
                        <i class="fa fa-child fa-5x"></i>
                        <h3>We Are Social</h3>
                        <p>We Create Your Digital Dreams Just Think And Tell Us What You Need Or Leave The Inspiration To Us    And Just Watch, Just Believe In Our Professionals</p>
                    </div> 
               </div>
            </div>        
        </section>
    
        <section class="testimonials text-center wow flipInY"data-wow-duration="1s" data-wow-offset="300">
          <div class="container">
            <h1>what are clients say</h1>
            <div id="carousel_testimonials" class="carousel slide" data-ride="carousel">
             <div class="carousel-inner" role="listbox">
                <div class="item active">
                   <p class="lead">Transition animations not supported in Internet Explorer 8 & 9Bootstrap exclusively uses CSS3 for its animations, but Internet Explorer 8 & 9 don't support the necessary CSS properties. Thus, there are no slide transition animations when using these browsers. We have intentionally decided not to include jQuery-based fallbacks for the transitions. </p>
                   <span>eslam gamal</span>
                  </div>
                <div class="item">
                    <p class="lead">Transition animations not supported in Internet Explorer 8 & 9Bootstrap exclusively uses CSS3 for its animations, but Internet Explorer 8 & 9 don't support the necessary CSS properties. Thus, there are no slide transition animations when using these browsers. We have intentionally decided not to include jQuery-based fallbacks for the transitions. </p>
                    <span>ahmed alaa</span>
                  </div>
                <div class="item">
                    <p class="lead">Transition animations not supported in Internet Explorer 8 & 9Bootstrap exclusively uses CSS3 for its animations, but Internet Explorer 8 & 9 don't support the necessary CSS properties. Thus, there are no slide transition animations when using these browsers. We have intentionally decided not to include jQuery-based fallbacks for the transitions. </p>
                    <span>ahmed yassin</span>
                  </div>
                <div class="item">
                     <p class="lead">Transition animations not supported in Internet Explorer 8 & 9Bootstrap exclusively uses CSS3 for its animations, but Internet Explorer 8 & 9 don't support the necessary CSS properties. Thus, there are no slide transition animations when using these browsers. We have intentionally decided not to include jQuery-based fallbacks for the transitions. </p>
                     <span>mahmoud elgazawy</span>
                  </div>
                </div>
              <ol class="carousel-indicators ">
                <li data-target="#carousel_testimonials" data-slide-to="0" class="active">
                   <img src="images/airPod1.PNG" alt="eslam"/>
                </li>
                <li data-target="#carousel_testimonials" data-slide-to="1">
                    <img src="images/airPod1.PNG" alt="alaa"/>
                </li>
                <li data-target="#carousel_testimonials" data-slide-to="2">
                    <img src="images/airPod1.PNG" alt="yassin"/>
                </li>
                <li data-target="#carousel_testimonials" data-slide-to="3">
                    <img src="images/airPod1.PNG" alt="gazawy"/>
                </li>
              </ol>
           </div>
         </div>
        </section>
        </div>
     );
}

export default About ;