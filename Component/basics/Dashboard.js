import React from 'react'
import "./style.css";

const Dashboard = () => {
    return (
        <div class="main">
              <div class="one">
                 <div class="name">
                    <img src="images/Capture.png" alt=""></img>
                      <h2>NEUROLINGUA</h2>
                   </div>
                <ul>
                    <li><a href="#"><i class="fas fa-tachometer-alt"></i>Dashboard</a></li>       
                    <li><a href=""><i class="fas fa-graduation-cap"></i>Courses</a></li>          
                    <li><a href=""><i class="far fa-calendar-alt"></i>Availability</a></li>     
                    <li><a href=""><i class="fas fa-user-graduate"></i>Students</a></li>    
                    <li><a href=""><i class="fas fa-book"></i>Blog</a></li>     
                    <li><a href=""><i class="fas fa-percent"></i>Coupons</a></li>             
                    <li><a href=""><i class="fas fa-rupee-sign"></i>Earnings</a></li>           
                    <li><a href=""><i class="fas fa-cog"></i>Settings</a></li> </ul>
                <div class="btn">
                     <button class="btn1"><i class="fas fa-sign-out-alt"></i>Logout</button></div>
        </div>
        <div class="two">
             <div class="two-one">
                    <div class="upper1 rad">
                        <span>Courses</span>
                        <i class="fas fa-ellipsis-h kebab"></i>
                        <i class="fas fa-graduation-cap"></i>
                        <span>2</span>
                    </div>
                    <div class="upper2 rad">
                        <span>
                            Class Taken
                        </span>
                        <i class="fas fa-ellipsis-h kebab"></i>
                        <i class="fas fa-mobile"></i>
                        <span>2</span>
                        
                    </div>
                    <div class="upper3 rad">
                        <span>Verified</span>
                        <i class="fas fa-ellipsis-h kebab "></i></div>
                        <i class="far fa-badge-check"></i>
                        <span>2</span>
                    <div class="upper4 rad">
                        <span>Non-Verified </span>
                        <i class="fas fa-ellipsis-h kebab"></i>
                        <i class="far fa-times-circle"></i>
                        </div>
             </div>
                <div class="two-two">
                    <div class="earning">
                            <div class="my">My Earning</div>
                            <div class="tp">
                                <div class="today">Today Earning
                                    <span>$1000</span>
                                </div>
                                <div class="pending">Pending
                                    <span>$60</span>
                                </div>
                            </div>
                            <div class="withdraw">
                                <button class="btn2">Withdraw</button>
                            </div>
                    </div>
                    <div class="session">
                        <h2>Session overview</h2>
                        <div class="h3">
                            <h3>Scheduled <span>1</span></h3>
                            <h3>UpComing <span>2</span></h3>
                            <h3>Cancled <span>0</span></h3>
                         </div>
                         </div>
                    <div class="stud">
                        <h2>My Student</h2>
                        <img src="images/pic.JPG"></img>
                        <h3>
                            See all Students
                        </h3>
                    </div>
                </div>
                <div class="two-three">
                    <div class="graph">
                        <div class="d1">
                            <div class="btnn">
                                <button class="c1">Courses Impression</button>
                                <button class="color">Per Session Earning</button>
                                <button class="color">Top Student</button>
                               
                            </div>
                            <span>week<i class="fas fa-chevron-down"></i></span>
                        </div>
                        <div class="d2">
                            <img src="images/graph.png"></img>
                            
                        </div>   
                    </div>
                </div>
        </div>
        <div class="three">
            <div class="icon"><i class="far fa-comment"></i>
                <i class="fas fa-bell"></i></div>
            <div class="img">
                <img src="images/pic.JPG"></img>
             </div>
             <div class="text"><p>Welcome Ayush!!</p>
                <h1>Upcoming Class</h1></div>
            <div class="join">
                <div class="border">
                <h1><i class="fab fa-canadian-maple-leaf"></i>French</h1></div>
                <div class="p">
                <p><i class="far fa-calendar-alt"></i>17th August</p>
                <p><i class="far fa-clock"></i>11:00 AM</p>
                <p><i class="fas fa-hourglass-end"></i>60 Minutes</p>
                <p><i class="fas fa-dollar-sign"></i>$10</p>
            </div>
                <button>Join Class</button>
            </div>
        </div>
    </div>
    );
};
export default Dashboard ;