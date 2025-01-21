import React from 'react';
const Home=()=>
{

    return(
        <div>
 <section className="container-fluid">

{/* Hero section */}
<section id="hero" className="  row text-white text-start">
  <div className="col-8 ms-5 my-5">
    <h1 className='display-1 fw-bold'>Donate</h1>
    <h2 className='display-4 fw-semibold'>4 a better Word</h2>
    <p className='lh-sm p-0 m-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
    <p className='lh-sm mb-5'> Quidem error minima quae itaque nobis soluta! Minima possimus,iure minus.</p>
  </div>
  <div className='col-8 my-5 ms-5'>
    
    <button type='button' className='bgorange p-2 ps-3 pe-3 rounded-pill ms-5 text-white border1'> Donate Now</button>
    <button type='button' className='p-2 ps-3 pe-3 rounded-pill  border1 text-white ms-3 s2hov '> Read more</button>
  
  </div>
  
</section>

{/* Section one */}
<section>
  <div className="row justify-content-center my-5 text-center">
    <div className="col-11 col-md-5 col-lg-3 bgorange rounded-4 py-5 text-white me-3 ">
      <div>
        <img src="./Images/Illustration/hands-white.png" alt="" />
      </div>
      <div className="my-2">
        <h3>Become a Volunteer</h3>
      </div>
      <div className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis
        aliquam.
      </div>
    </div>

    <div
      className="col-11 col-md-5 image-container col-lg-3 bggrey rounded-4 py-5 text-center ms-md-3 me-lg-3 mt-2 mt-md-0 s2hov">
      <div className="text-center mx-auto">
        <img src="./Images/Illustration/donation-gray.png" alt="Normal Image" className="image1" />
      </div>

      <div className="my-2">
        <h3>Dance & Music</h3>
      </div>

      <div className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis
        aliquam.
      </div>
    </div>


    <div
      className="col-11 col-md-5  image-container  col-lg-3 bggrey rounded-4 py-5 text-center  ms-md-3 mt-2 mt-lg-0 s2hov">
      <div className="text-center mx-auto">
        <img src="./Images/Illustration/charity-gray.png" alt="" className="image2" />
      </div>

      <div className="my-2">
        <h3>Online Conference</h3>

      </div>
      <div className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis
        aliquam.
      </div>
    </div>

  </div>

</section>


{/* Welcome section */}
<section className="row justify-content-center wellcome p-5">
  <div className="col-12 col-lg-6 text-white">
    <div className='mb-5'>
      <h2 className="display-5 fw-bold">Welcome to our Charity</h2>
    </div>
    <div className='s3p'> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis
      aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum
      mauris quis aliquam. Integer accumsan sodales odio, id tempus velit ullamcorper id. Quisque at
      erat eu libero consequat tempus. Quisque molestie convallis tempus. Ut semper purus metus, a
      euismod sapien sodales ac. Duis viverra eleifend fermentum</p>
    </div>

    <div className='mt-5 mb-5 mb-lg-0'>
      <button type="button" className="bgorange rounded-pill border-0 p-3 text-white">Read more</button>
    </div>
  </div>

  <div className="col-12 col-lg-6">
    <img src="./Images/Illustration/welcome.jpg" alt="Welcome" width="100%" />
  </div>
</section>
{/* wellcome sectio end */}

{/* forth section start */}
<section>
  <div className="row text-start my-5 justify-content-md-center">

    <div className="col-11 col-lg-6">
      <div className="mb-5">
        <h2>Upcoming Events</h2>
      </div>
      <div className="row justify-content-between">
        <div className="col-5 col-md-4">
          <img src="./Images/Illustration/event-1.jpg" alt="" />
        </div>
        <div className="col-6 col-md-8">
          <div className="shov">
            <h2><a href="" className="text-decoration-none text-dark">Fundraiser for
              Kids</a></h2>
            <p> <a href="" className="text-decoration-none text-dark">Aug 25, 2018 </a> ||
              <a href="" className="text-decoration-none text-dark">Ball
                Room New York</a>
            </p>
          </div>
          <div className="">
            <p className="grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris tempus vestib
              ulum mauris. Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
          <div className="mt-3">
            <a href="">Read More</a>
          </div>
        </div>
      </div>
      {/* <!-- second div --> */}
      <div className="row justify-content-between mt-lg-4">
        <div className="col-5 col-md-4"><img src="./Images/Illustration/event-2.jpg" alt="" /></div>
        <div className="col-6 col-md-8">
          <div className="shov">
            <h2><a href="" className="text-decoration-none text-dark">Fundraiser for
              Kids</a></h2>
            <p> <a href="" className="text-decoration-none text-dark">Aug 25, 2018 </a> ||
              <a href="" className="text-decoration-none text-dark">Ball
                Room New York</a>
            </p>
          </div>
          <div className="">
            <p className="grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris tempus vestib
              ulum mauris. Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
          <div className="mt-3">
            <a href="">Read More</a>
          </div>
        </div>
      </div>
      {/* <!-- third div --> */}
      <div className="row justify-content-between mt-lg-4">
        <div className="col-5 col-md-4"><img src="./Images/Illustration/event-3.jpg" alt="" /></div>
        <div className="col-6 col-md-8">
          <div className="shov">
            <h2><a href="" className="text-decoration-none text-dark">Fundraiser for
              Kids</a></h2>
            <p> <a href="" className="text-decoration-none text-dark">Aug 25, 2018 </a> ||
              <a href="" className="text-decoration-none text-dark">Ball
                Room New York</a>
            </p>
          </div>
          <div className="">
            <p className="grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris tempus vestib
              ulum mauris. Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
          <div className="mt-3">
            <a href="">Read More</a>
          </div>
        </div>


      </div>
    </div>

    <div className="col-11 col-lg-5">
      <div className=" my-5 ">
        <h2 className="fs-1 fw-bold">Featured Cause</h2>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-md-5 col-lg-12">
          <img src="./Images/Illustration/featured-causes.jpg" alt="" width="100%" />
        </div>
        <div className="col-12 col-md-5 col-lg-11">
          <div className="shov">
            <h2><a href="" className="text-decoration-none text-dark">Fundraiser for
              Kids</a></h2>
            <p> <a href="" className="text-decoration-none text-dark">Aug 25, 2018 </a> ||
              <a href="" className="text-decoration-none text-dark">Ball
                Room New York</a>
            </p>
          </div>
          <div className="">
            <p className="grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris tempus vestib
              ulum mauris. Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
          <div className="mt-5">
            <button type="button" className="bgorange rounded-pill text-white border-0 p-3 px-3">Donate
              Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* forth section end */}

{/* section five */}
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
{/* section five end */}

{/* Footer */}

</section>
        </div>
    )
}
export default Home