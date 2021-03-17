import React from "react";

const ContactDetails = () => {
    return (
        <>
        <section className="contact_info mt-5 mb-5">
          <div className="container">
            <div className="row row justify-content-center mt-5">
              <div class="col-xl-5">
                <div class="ambiLMS_tittle  text-center">
                  <p>AmbiLMS Contact Details </p>
                  <h2>Contact Us </h2>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-7">
                <div className="get_in_touch_form">
                  <div className="get_touch_form">
                    <div className="tittle_section d-flex">
                      <div className="icon_section">
                        <i class="fa fa-phone"></i>
                      </div>
                      <div className="tittle_part">
                        <h3>Get In Touch</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet animi possimus debitis non sequi, magnam facilis blanditiis at. Est ex sit voluptate similique culpa dolores, possimus iste odio vero maiores!</p>
                      </div>
                    </div>

                    <div className="form_container">
                    <form>
                      <div class="form-group mb-4">
                        <label for="fullName">Full Name</label>
                        <input type="text" class="form-control" id="fullName" placeholder="Full Name"/>
                      </div>
                      <div class="form-group mb-4">
                        <label for="m_number">Mobile Number</label>
                        <input type="number" class="form-control" id="m_number" placeholder="Mobile Number"/>
                      </div>
                      <div class="form-group mb-4">
                        <label for="mail">Email ID</label>
                        <input type="email" class="form-control" id="mail" placeholder="eg.- yourmailid@mail.com"/>
                      </div>
                      <div class="form-group mb-4">
                        <label for="type_of_query">State</label>
                        <select id="query" class="form-control">
                          <option selected>Option 1</option>
                          <option>Option 2</option>
                          <option>Option 3</option>
                          <option>Option 4</option>
                          <option>Option 5</option>
                          <option>Option 6</option>
                        </select>
                      </div>
                      <div class="form-group mb-4">
                        <label for="message">Message</label>
                        <textarea class="form-control" id="message" rows="2"></textarea>
                      </div>
                     
                      <button type="submit" class="btn  button" >Submit</button>
                    </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="address_pannel">
                  <div className="address_container">
                    <div className="tittle_section d-flex">
                      <div className="icon_section">
                        <i class="fa fa-phone"></i>
                      </div>
                      <div className="tittle_part">
                        <h3>Get In Touch</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet animi possimus debitis non sequi, magnam facilis blanditiis at.</p>
                      </div>
                    </div>
                    <div className="address_card">
                      <div className="address_seq">
                        <div className="address_part d-flex mb-3">
                          <div className="address_icon">
                            <i class="fa fa-map-marker"></i>
                          </div>
                          <div className="address_info">
                            <h5>Headquaters <small>New Delhi</small></h5>
                            <div className="contact_details">
                              <a className="mb-2" href="http://"> B -30 , Sector-6, Noida 201301, Uttar Pradesh, India </a>
                              <a href="tel:+91 9760078301">+91 9760078301</a><br/>
                              <a href="mailto:example@gmail.com">example@gmail.com</a>
                            </div>
                          </div>
                        </div>
                        <div className="address_part d-flex mb-3">
                          <div className="address_icon">
                            <i class="fa fa-map-marker"></i>
                          </div>
                          <div className="address_info">
                            <h5>Headquaters <small>New Delhi</small></h5>
                            <div className="contact_details">
                              <a className="mb-2" href="http://"> B -30 , Sector-6, Noida 201301, Uttar Pradesh, India </a>
                              <a href="tel:+91 9760078301">+91 9760078301</a><br/>
                              <a href="mailto:example@gmail.com">example@gmail.com</a>
                            </div>
                          </div>
                        </div>
                        <div className="address_part d-flex mb-3">
                          <div className="address_icon">
                            <i class="fa fa-map-marker"></i>
                          </div>
                          <div className="address_info">
                            <h5>Headquaters <small>New Delhi</small></h5>
                            <div className="contact_details">
                              <a className="mb-2" href="http://"> B -30 , Sector-6, Noida 201301, Uttar Pradesh, India </a>
                              <a href="tel:+91 9760078301">+91 9760078301</a><br/>
                              <a href="mailto:example@gmail.com">example@gmail.com</a>
                            </div>
                          </div>
                        </div>
                        <div className="address_part d-flex mb-3">
                          <div className="address_icon">
                            <i class="fa fa-map-marker"></i>
                          </div>
                          <div className="address_info">
                            <h5>Headquaters <small>New Delhi</small></h5>
                            <div className="contact_details">
                              <a className="mb-2" href="http://"> B -30 , Sector-6, Noida 201301, Uttar Pradesh, India </a>
                              <a href="tel:+91 9760078301">+91 9760078301</a><br/>
                              <a href="mailto:example@gmail.com">example@gmail.com</a>
                            </div>
                          </div>
                        </div>
                        <div className="address_part d-flex mb-3">
                          <div className="address_icon">
                            <i class="fa fa-map-marker"></i>
                          </div>
                          <div className="address_info">
                            <h5>Headquaters <small>New Delhi</small></h5>
                            <div className="contact_details">
                              <a className="mb-2" href="http://"> B -30 , Sector-6, Noida 201301, Uttar Pradesh, India </a>
                              <a href="tel:+91 9760078301">+91 9760078301</a><br/>
                              <a href="mailto:example@gmail.com">example@gmail.com</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-5 pt-5 mb-5">
                <div className="map_comtainer">
                  <div className="google_map_container">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.250616530997!2d77.31363391460312!3d28.5922574926544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5db5970596f%3A0x41db9115c8ba7c06!2sAmbiguous%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sus!4v1615557404777!5m2!1sen!2sus" width="1200" height="500"  allowfullscreen="" loading="lazy"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}
export default ContactDetails;