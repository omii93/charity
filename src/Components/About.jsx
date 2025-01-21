import React from 'react';
const About=()=>
{

    return(
        <div className="container-fluid">
            {/* First Section */}
            <section className='About1 row text-white text-start'>
                <div className="col-12 ms-5 ">
                    <h1>About </h1>
                </div>
            </section>

            {/* Second Section */}
            <section className="  row justify-content-center p-5">
                <div className="col-12 col-lg-6">
                    <div className='mb-5'>
                        <h2 className="display-5 fw-bold">Welcome to our Charity</h2>
                    </div>
                    <div className='s3p'>
                        <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis
                             aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Mauris tempus vestibulum mauris quis aliquam.Integer accumsan sodales odio,
                               id tempus velit ullamcorper id. Quisque at erat eu libero consequat tempus. 
                             Quisque molestie convallis tempus. Ut semper purus metus, a euismod sapien sodales ac. 
                             Duis viverra eleifend fermentum.

                        </p>
                    </div>

                    <div className='mt-5 mb-5 mb-lg-0'>
                        <button type="button" className="bgorange rounded-pill border-0 p-3 text-white">Read more</button>
                    </div>
                </div>

                <div className="col-12 col-lg-6">
                    <img src="./Images/Illustration/welcome.jpg" alt="Welcome" width="100%" />
                </div>
            </section>

            {/* Pie Charts Section */}

            <section className="row justify-content-center m-3 my-5 border text-white text-center">
                <div className="col-11 col-md-3 bg-dark p-5 ">

                    <div className="chart-wrapper">
                        <div className='chart' data-percent="83" id='chart1'>
                            <p className='fw-bold fs-3 percent text-white' >83%</p>
                        </div>
                    </div>
                    <div>
                        <p className='fw-semibold fs-5'>Hard work</p>

                    </div>
                </div>
                <div className="col-11 col-md-3 bg-dark p-5 ">

                    <div className="chart-wrapper">
                        <div className="chart" data-percent="100" id='chart2'>
                            <p className='fw-bold fs-3 percent text-white' >100%</p>
                        </div>
                    </div>
                    <div>
                        <p className='fw-semibold fs-5'>Pure Love</p>

                    </div>
                </div>
                <div className="col-11 col-md-3 bg-dark p-5 ">

                    <div className="chart-wrapper">
                        <div className="chart" data-percent="75" id='chart3'>
                            <p className='fw-bold fs-3 percent text-white' >75%</p>
                        </div>
                    </div>
                    <div>
                        <p className='fw-semibold fs-5'>Smart Ideas</p>

                    </div>
                </div>
                <div className="col-11 col-md-3 bg-dark p-5 ">

                    <div className="chart-wrapper">
                        <div className="chart" data-percent="65" id='chart4'>
                            <p className='fw-bold fs-3 percent'>65%</p>
                        </div>
                    </div>
                    <div>
                        <p className='fw-semibold fs-5'>Good Decisions</p>

                    </div>
                </div>
            </section>

            {/* end of the session */}


            {/* section3 */}

            <section className='row justify-content-around s3 m-3 mt-5 '>
                <div className='col-11 col-md-5'>

                    <div className=''><p className='h1'>We love to help all the children that have problems in the world. After 15 years we have many goals achieved.</p></div>
                    <div className='d-flex align-items-center mb-5 mt-5'>
                        <div><img src="./Images/Illustration/testimonial-2.jpg" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="" /></div>
                        <div className='ms-2 fw-semibold'><p>Cristian James,<span className='orange'> Volunteer</span></p></div>
                    </div>
                </div>
                <div className='col-11 col-md-5'>

                    <div className=''><p className='h1'>We love to help all the children that have problems in the world. After 15 years we have many goals achieved.</p></div>
                    <div className='d-flex align-items-center mb-5 mt-5' >
                        <div><img src="public\Images\Illustration\testimonial-1.jpg" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="" /></div>
                        <div className='ms-2 fw-semibold'><p>Maria Williams, <span className='orange'>Volunteer</span> </p></div>
                    </div>
                </div>


            </section>
            {/* section4 */}
            <section className='row bgorange text-white justify-content-center p-5 align-items-center'>
                <div className='col-11 col-md-10 col-lg-7 p-5'><h2>Help us so we can help others</h2></div>
                <div className='col-11 col-md-10 col-lg-3 '>  <button type='button' className='bgorange text-white rounded-pill border p-2 ps-4 pe-4'>Donate Now</button></div>
            </section>
        </div>

    )
}
export default About