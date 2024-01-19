import React from 'react'

const Footer = () => {
  return (
    <div className="container">
            <div className="row mx-2">
              <div className="col-lg-5">
                {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6692316201743!2d77.53650917313787!3d12.992995314412783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d8ad89380bd%3A0xe619385693ac1684!2sBe%20Practical%20Tech%20Solutions!5e0!3m2!1sen!2sin!4v1705578260296!5m2!1sen!2sin" width="450" height="390"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='col-lg-12'></iframe>
              </div>
              <div className="col-lg-7">
                <form>
                  <div className="row m-2">
                    <div className="col-md-9">
                      <div className="row mb-4">
                        <div className="col-md-6 mb-4 mb-md-0">
                          <div className="form-outline">
                            <input type="text" id="form3Example1" className="form-control" />
                            <label className="form-label" for="form3Example1">First name</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-outline">
                            <input type="email" id="form3Example2" className="form-control" />
                            <label className="form-label" for="form3Example2">Email Address</label>
                          </div>
                        </div>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example3" className="form-control" />
                        <label className="form-label" for="form3Example3">Subject</label>
                      </div>
                      <div className="form-outline mb-4">
                        <textarea className="form-control" id="form4Example3" rows="4"></textarea>
                        <label className="form-label" for="form4Example3">Message</label>
                      </div>
                      <div className="text-center text-md-start">
                        <button type="submit" className="btn btn-primary mb-5 mb-md-0">
                          Send
                        </button>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <ul className="list-unstyled">
                        <li>
                          <i className="bi bi-geo-alt-fill bi-2x text-primary"></i>
                          <p><small>Bangalore</small></p>
                        </li>
                        <li>
                          <i className="bi bi-telephone-fill bi-2x text-primary"></i>
                          <p><small>+91 XXXXX XXXXX</small></p>
                        </li>
                        <li>
                          <i className="bi bi-envelope-at bi-2x text-primary"></i>
                          <p><small className='text-lowercase'>name@gmail.com</small></p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>
              </div>
            </div>
        </div>
  )
}

export default Footer