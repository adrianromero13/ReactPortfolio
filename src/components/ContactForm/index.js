import React from 'react';

const ContactForm = (props) => (
    <div className="container well">
    
        <div className="row border-top border-bottom border-success">
            <div className="col-auto text-success">
                <p className="">
                    <h5 className="text-justify-center align-middle">Contact Me</h5>
                </p>
            </div>
        </div>

        <br/>
        
        <div className="container well justify-content-md-center">
            <div className="row justify-content-md-center text-justify-center text-light">      

                <form className="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-xs-12 col-centered justify-content-md-center mx-auto" action="" className="">                   

                    <div className="form-group text">
                        <label for="formGroupExampleInput1">First Name</label>
                        <input type="text" className="form-control" id="formGroupExampleInput1" placeholder="First Name"/>
                    </div>
                    
                    <div className="form-group">
                        <label for="formGroupExampleInput2">Last Name</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Last Name"/>
                    </div>
                    
                    <div className="form-group">
                        <label for="exampleFormControlInput3">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput3" placeholder="name@example.com"/>
                    </div>
                    
                    <div className="form-group">
                        <label for="exampleFormControlInput4">Phone Number</label>
                        <input type="email" className="form-control" id="exampleFormControlInput4" placeholder="(123)456-7890"/>
                    </div>
                    
                    <div className="border-top border-bottom border-success bg-success"></div>
                    
                    <div className="form-group">
                        <label for="exampleFormControlTextarea5">Leave A Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea5" rows="4"></textarea>
                    </div>
                    
                    <select className="custom-select custom-select-sm">
                        <option selected>What is your preference of contact?</option>
                        <option value="1">Text</option>
                        <option value="2">Call</option>
                        <option value="3">Email</option>
                    </select>

                    <div className="col-centered" id="formButton">
                        <button type="submit" className="btn btn-primary mb-2">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
)

export default ContactForm;
