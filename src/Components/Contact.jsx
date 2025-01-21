import React, { useState } from 'react';
const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, message });
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="container-fluid contact-bg">
            <div className='row justify-content-center'>
                {/* <!-- Contact Start --> */}
                <div className="col-md-6">
                    <h1 className="text-center">Contact Us</h1>
                    <form onSubmit={handleSubmit} className="mt-4 border p-5 rounded-3 bg-white">
                        <div className="form-group">
                            <label htmlFor="nameInput" className="mb-2">Name</label>
                            <input 
                                type="text" 
                                className="form-control mb-3 p-2" 
                                id="nameInput" 
                                placeholder="Enter your name" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="emailInput" className="mb-2">Email address</label>
                            <input 
                                type="email" 
                                className="form-control mb-3 p-2" 
                                id="emailInput" 
                                placeholder="Enter your email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="messageInput" className="mb-2">Message</label>
                            <textarea 
                                className="form-control mb-3" 
                                id="messageInput" 
                                placeholder="Enter your message" 
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                rows="5" // Increased the number of rows for the textarea
                            />
                        </div>
                        {/* Centering the button */}
                        <div className="d-flex justify-content-center mt-4">
                            <button type="submit" className="   bgorange rounded-pill border-0 px-5 p-3 text-white">Submit</button>
                            {/* <button type="button" className="bgorange rounded-pill border-0 p-3 text-white">Read more</button> */}
           
                        </div>
                    </form>
                </div>
                {/* <!-- Contact End --> */}

                {/* Google Map Iframe */}
                <div className="col-12" style={{ marginTop: '20px' }}>
                    <h2 className="text-center">Our Location</h2>
                    <iframe 
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509198!2d144.9537353153164!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11f3b3%3A0x5045675218ceed30!2sMelbourne%20CBD%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sus!4v1633031234567!5m2!1sen!2sus" 
                        width="100%" 
                        height="450" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;