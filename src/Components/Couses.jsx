import React from 'react';
const Couses = () => {
    return (
        <div className="container-fluid">
            <section className=' row text-white text-start' id='ourCauses'>
                <div className="col-12 ms-2">
                    <h1>Our Causes</h1> 
                </div>
            </section>

            {/* section2 */}

            <section>
                <div className="row text-start my-5 justify-content-center">
                    <div className="col-10 my-5 ">
                        <h2 className="fs-1 fw-bold">Featured Cause</h2>
                    </div>
                    <div className="col-11   ">

                        <div className="row justify-content-between justify-content-lg-center">
                            <div className="col-12 col-lg-5 py-5 bg-light me-lg-3">
                                <div className="row justify-content-center">
                                    <div className="col-12 col-md-5 col-lg-12">
                                        <img src="./Images/Illustration/eye-for.jpg" alt="" width="100%"/>
                                    </div>
                                    <div className="col-12 col-md-5 col-lg-11">
                                        <div className="shov">
                                            <h2><a href="" className="text-decoration-none text-dark">Fundraiser for Kids</a></h2>
                                            <p> <a href="" className="text-decoration-none text-dark">Aug 25, 2018 </a> || <a href="" className="text-decoration-none text-dark">Ball
                                                Room New York</a></p>
                                        </div>
                                        <div className="">
                                            <p className="grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib
                                                ulum mauris. Lorem ipsum dolor sit amet, consectetur.</p>
                                        </div>
                                        <div className="mt-5">
                                            <button type="button" className="bgorange rounded-pill text-white border-0 p-3 px-3">Donate Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div></div>
                            </div>

                            <div className="col-12 col-lg-5 py-5 mt-5 mt-lg-0  ms-lg-3 bg-light">
                                <div className="row justify-content-center">
                                    <div className="col-12 col-md-5 col-lg-12">
                                        <img src="./Images/Illustration/featured-causes.jpg" alt="" width="100%"/>
                                    </div>
                                    <div className="col-12 col-md-5 col-lg-11">
                                        <div className="">
                                            <h2><a href="" className="text-decoration-none text-dark">Fundraiser for Kids</a></h2>
                                            <p> <a href="" className="text-decoration-none text-dark">Aug 25, 2018 </a> || <a href="" className="text-decoration-none text-dark">Ball
                                                Room New York</a></p>
                                        </div>
                                        <div className="">
                                             <p className="grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib
                                                ulum mauris. Lorem ipsum dolor sit amet, consectetur.</p>
                                        </div>
                                        <div className="mt-5">
                                            <button type="button" className="bgorange rounded-pill text-white border-0 p-3 px-3">Donate Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div></div>
                            </div>

                        </div>

                    </div>
                </div>

            </section>
{/* section3 */}
<section className="row py-5 justify-content-center" id="ourCauses">
          <div className="col-11 col-md-8 col-lg-5 me-md-3  col-xl-3 bg-white p-0">

            <div>
              <img src="./Images/Illustration/cause-1.jpg" alt="cause-1" width="100%" />
            </div>
            <div className="p-2">
              <div>
                <h3 className="my-3 "> <a href="#" className="text-decoration-none text-black">Bringe Water to the
                  children</a>
                </h3>
              </div>

              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                  Sed cursus ante dapibus diam.</p>
              </div>

              <div>
                <input type="range" id="rangeSlider" className="range-slider form-range" min="0" max="100"
                  value="50" />
                <p className="mt-2">Value: <span id="rangeValue">50%</span></p>
                {/* <!-- Display percentage value here --> */}
              </div>
            </div>
          </div>

          {/* <!-- secind div --> */}

          <div className="col-11 col-md-10 col-lg-5 col-xl-3 ms-md-3 me-xl-3 bg-white p-0 d-none d-lg-block">

            <div>
              <img src="./Images/Illustration/cause-2.jpg" alt="cause-1" width="100%" />
            </div>
            <div className="p-2">
              <div>
                <h3 className="my-3 "> <a href="#" className="text-decoration-none text-black">Education for all
                </a>
                </h3>
              </div>

              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                  Sed cursus ante dapibus diam.</p>
              </div>

              <div>
                <input type="range" id="rangeSlider" className="range-slider form-range" min="0" max="100"
                  value="50" />
                <p className="mt-2">Value: <span id="rangeValue">50%</span></p>
                {/* <!-- Display percentage value here --> */}
              </div>
            </div>
          </div>

          <div className="col-11 col-md-8 col-lg-5 bg-white p-0 d-none d-xl-block  col-xl-3 ms-3">

            <div>
              <img src="./Images/Illustration/cause-3.jpg" alt="cause-1" width="100%" />
            </div>
            <div className="p-2">
              <div>
                <h3 className="my-3 "> <a href="#" className="text-decoration-none text-black">Bringe Water to the
                  children</a>
                </h3>
              </div>

              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                  Sed cursus ante dapibus diam.</p>
              </div>

              <div>
                <input type="range" id="rangeSlider" className="range-slider form-range" min="0" max="100"
                  value="50" />
                <p className="mt-2">Value: <span id="rangeValue">50%</span></p>
                {/* <!-- Display percentage value here --> */}
              </div>
            </div>


          </div>

        </section>
        {/* section4 */}
        <section className="row justify-content-center p-5 text-white bg-dark">
                <div className="col-12 col-lg-6">
                    <div className='mb-5'>
                        <h2 className="display-5 fw-bold">We love to help all the children that have problems in the world. After 15 years we have many goals achieved.</h2>
                    </div>
                    <div className='s3p'>
                        <p>LDolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam. Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className='mt-5 mb-5 mb-lg-0'>
                        <button type="button" className="bgorange rounded-pill border-0 p-3 text-white">Read more</button>
                    </div>
                </div>

                <div className="col-12 col-lg-6">
                    <img src="./Images/Illustration/oshomah.jpg" alt="Welcome" width="100%" />
                </div>
            </section>

            {/* section5 */}
            <section className="row py-5 justify-content-center" id="ourCauses">
          <div className="col-11 col-md-8 col-lg-5 me-md-3  col-xl-3 bg-white p-0">

            <div>
              <img src="./Images/Illustration/cause-4.jpg" alt="cause-1" width="100%" />
            </div>
            <div className="p-2">
              <div>
                <h3 className="my-3 "> <a href="#" className="text-decoration-none text-black">Bringe Water to the
                  children</a>
                </h3>
              </div>

              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                  Sed cursus ante dapibus diam.</p>
              </div>

              <div>
                <input type="range" id="rangeSlider" className="range-slider form-range" min="0" max="100"
                  value="50" />
                <p className="mt-2">Value: <span id="rangeValue">50%</span></p>
                {/* <!-- Display percentage value here --> */}
              </div>
            </div>
          </div>

          {/* <!-- secind div --> */}

          <div className="col-11 col-md-10 col-lg-5 col-xl-3 ms-md-3 me-xl-3 bg-white p-0 d-none d-lg-block">

            <div>
              <img src="./Images/Illustration/cause-5.jpg" alt="cause-1" width="100%" />
            </div>
            <div className="p-2">
              <div>
                <h3 className="my-3 "> <a href="#" className="text-decoration-none text-black">Education for all
                </a>
                </h3>
              </div>

              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                  Sed cursus ante dapibus diam.</p>
              </div>

              <div>
                <input type="range" id="rangeSlider" className="range-slider form-range" min="0" max="100"
                  value="50" />
                <p className="mt-2">Value: <span id="rangeValue">50%</span></p>
                {/* <!-- Display percentage value here --> */}
              </div>
            </div>
          </div>

          <div className="col-11 col-md-8 col-lg-5 bg-white p-0 d-none d-xl-block  col-xl-3 ms-3">

            <div>
              <img src="public/Images/Illustration/cause-6.jpg" alt="cause-1" width="100%" />
            </div>
            <div className="p-2">
              <div>
                <h3 className="my-3 "> <a href="#" className="text-decoration-none text-black">Bringe Water to the
                  children</a>
                </h3>
              </div>

              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                  Sed cursus ante dapibus diam.</p>
              </div>

              <div>
                <input type="range" id="rangeSlider" className="range-slider form-range" min="0" max="100"
                  value="50" />
                <p className="mt-2">Value: <span id="rangeValue">50%</span></p>
                {/* <!-- Display percentage value here --> */}
              </div>
            </div>


          </div>

        </section>
        </div>
    );
};

export default Couses;
