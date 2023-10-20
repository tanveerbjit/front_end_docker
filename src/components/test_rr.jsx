import React from 'react';

import { Link } from 'react-router-dom';



function UserDashboard() {
  return (
    <>
    <div className='user_dashboard'>
<section className="docboard-bg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-2 col-sm-1 col-md-1 col-lg-2 ps-0 pe-0 pe-lg-3">
              <div className="side-bar side-bar-two position-sticky docboard-bg-soft d-none d-md-none d-lg-block side-bar-border">
                <ul className="list-group">
                 
                  <li className="list-group-item item-border side-bar-content-border">
                    <a href="https://valerehealthcare.co/patient-profile" className="d-block w-100 sidebar-content-color text-decoration-none">
                      <span className="me-1">
                        <img src="https://valerehealthcare.co/web/front/assets/images/dashboard/patient/icon/profile.svg" alt="Icon" />
                      </span>

                      <span className="text-gray-dark pl-1">My Profile</span>
                    </a>
                  </li>
                  <li className="list-group-item  side-bar-content-border text-decoration-none">
                    <a href="https://valerehealthcare.co/patient-book-doctor" className="d-block w-100 sidebar-content-color text-decoration-none">
                      <span className="me-1">
                        <img src="https://valerehealthcare.co/web/front/assets/images/dashboard/patient/icon/reports.svg" alt="Icon" />
                      </span>
                       <span className="pl-1">Order</span>
                    </a>
                  </li>
                 
                  <li className="list-group-item  side-bar-content-border text-decoration-none">
                    <a href="https://valerehealthcare.co/patient-book-doctor" className="d-block w-100 sidebar-content-color text-decoration-none">
                      <span className="me-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="22"
        viewBox="0 96 960 960"
        width="22"
        fill="#435d91"
      >
        <path d="m694 936 53-54-93-93-54 53q-20 20-19.5 47t19.5 47q20 19 47 19.5t47-19.5Zm94-95 54-53q20-20 19.5-47T841 694q-20-20-46.28-20T748 694l-53 54 93 93Zm-52 137q-37 37-89 37t-89-37q-37-37-37-89t37-89l148-148q37-37 89-37t89 37q37 37 37 89t-37 89L736 978ZM180 876V276v600Zm0 60q-24.75 0-42.375-17.625T120 876V276q0-24.75 17.625-42.375T180 216h205q5-35 32-57.5t63-22.5q36 0 63 22.5t32 57.5h205q24.75 0 42.375 17.625T840 276v284q-15-4-30-5t-30 1V276H180v600h281q-1 15 .5 30t5.5 30H180Zm300-677q14 0 24.5-10.5T515 224q0-14-10.5-24.5T480 189q-14 0-24.5 10.5T445 224q0 14 10.5 24.5T480 259ZM280 436v-60h400v60H280Zm0 170v-60h400v49q-3 2-6.5 5t-6.5 6H280Zm0 170v-60h277l-42 42q-5 5-8.5 9t-7.5 9H280Z"></path>
      </svg>
      <span className='pl-1'>Purchase</span>
    </span>
                    </a>
                  </li>
                  <li className="list-group-item  side-bar-content-border text-decoration-none">
                    <a href="https://valerehealthcare.co/patient-book-doctor" className="d-block w-100 sidebar-content-color text-decoration-none">
                      <span className="me-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="22"
        viewBox="0 96 960 960"
        width="22"
        fill="#435d91"
      >
        <path d="m694 936 53-54-93-93-54 53q-20 20-19.5 47t19.5 47q20 19 47 19.5t47-19.5Zm94-95 54-53q20-20 19.5-47T841 694q-20-20-46.28-20T748 694l-53 54 93 93Zm-52 137q-37 37-89 37t-89-37q-37-37-37-89t37-89l148-148q37-37 89-37t89 37q37 37 37 89t-37 89L736 978ZM180 876V276v600Zm0 60q-24.75 0-42.375-17.625T120 876V276q0-24.75 17.625-42.375T180 216h205q5-35 32-57.5t63-22.5q36 0 63 22.5t32 57.5h205q24.75 0 42.375 17.625T840 276v284q-15-4-30-5t-30 1V276H180v600h281q-1 15 .5 30t5.5 30H180Zm300-677q14 0 24.5-10.5T515 224q0-14-10.5-24.5T480 189q-14 0-24.5 10.5T445 224q0 14 10.5 24.5T480 259ZM280 436v-60h400v60H280Zm0 170v-60h400v49q-3 2-6.5 5t-6.5 6H280Zm0 170v-60h277l-42 42q-5 5-8.5 9t-7.5 9H280Z"></path>
      </svg>
      <span className='pl-1'>Setting</span>
    </span>
                    </a>
                  </li>
                  
                </ul>
              </div>
            </div>
            <div className="col-10 col-sm-11 col-md-11 col-lg-10">
              <div className="rounded-2 py-3 px-2  shadow border border-primary" style={{ backgroundColor: '#fcfbf5', border: '1px solid #444541' }}>
                <div className="row align-items-center">
                  <div className="col-lg-3 col-12">
                    <div className="text-center">
                      <div>
                        <img src="https://valerehealthcare.co/patient-image/img741673329595.jpg" alt="Image" className="docboard-avater" id="image_output" />
                      </div>
                      <input type="file" className="input-file" id="upload" name="image" onChange={(e) => loadFile(e, 'image_output')} hidden />
                      <label htmlFor="upload" className="btn text-capitalize mt-2 custom-input-file">
                        <span className='pr-2'>Upload Photo</span>
                        <span className="ms-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-upload" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"></path>
                            <path fill-rule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"></path>
                          </svg>
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-9 col-12 mt-3 mt-lg-0">
                    <h4 className="mb-0 docboard-heading docboard-color-primary text-capitalize">Personal Information</h4>
                    <div className="row mt-lg-3 mt-1">
                      {/* ... Rest of your form fields ... */}
                      <div className="col-lg-4 col-12">
                        <label htmlFor="firstName" className="docboard-title text-gray-dark text-capitalize d-block mb-2">First Name <span className="text-danger fw-bold">*</span></label>
                        <input type="text" value="Tanveer" name="first_name" id="" autoComplete="off" className="border border-primary docboard-bg-soft docboard-field form-control field" placeholder="First Name" required="" />
                      </div>
                      <div className="col-lg-4 col-12 my-2 my-lg-0">
                        <label htmlFor="lastName" className="docboard-title text-gray-dark text-capitalize d-block mb-2">Last Name <span className="text-danger fw-bold">*</span></label>
                        <input type="text" value="Ahmed" name="last_name" id="" autoComplete="off" className="border border-primary docboard-bg-soft docboard-field form-control field" placeholder="Last Name" required="" />
                      </div>
                      <div className="col-lg-4 col-12">
                        <label htmlFor="age" className="docboard-title text-gray-dark text-capitalize d-block mb-2">Age<span className="text-danger fw-bold">*</span></label>
                        <input type="number" value="30" name="age" id="age" className="border border-primary docboard-bg-soft docboard-field form-control field" placeholder="Age" required="" />
                      </div>
                    </div>
                   
                    <div className="row mt-2 mt-lg-3">
                      <div className="col-lg-4 mb-2 mb-lg-0">
                        <label htmlFor="phoneNumber" className="docboard-title text-gray-dark text-capitalize d-block mb-2">Phone Number <span className="text-danger fw-bold">*</span></label>
                        <input type="number" value="01403899775" name="phone" autoComplete="off" id="phoneNumberField" className="border border-primary docboard-bg-soft docboard-field form-control field" placeholder="Phone Number" required="" />
                        <span className="fw-bold" id="phoneNumberError" style={{ color: '#EB4747' }}></span>
                      </div>
                      <div className="col-lg-4">
                        <label htmlFor="email" className="docboard-title text-gray-dark text-capitalize d-block mb-2">Email Address <span className="text-danger fw-bold">*</span></label>
                        <input type="email" value="atanveer712@gmail.com" name="email" id="emailField" autoComplete="off" className="border border-primary docboard-bg-soft docboard-field form-control field" placeholder="Email Address" required="" />
                        <span className="fw-bold" id="emailValidationError" style={{ color: '#EB4747' }}></span>
                      </div>
                      <div className="col-lg-4">
                        <label htmlFor="email" className="docboard-title text-gray-dark text-capitalize d-block mb-2">Occupation <span className="text-danger fw-bold">*</span></label>
                        <input type="text" name="occupation" value="SE" className="border border-primary docboard-bg-soft docboard-field form-control field" placeholder="Occupation" required="" />
                      </div>
                    </div>
                    <div className="row mt-2 mt-lg-3">
                      <div className="col-lg-12">
                        <label htmlFor="address" className="docboard-title text-gray-dark text-capitalize d-block mb-2">Address <span className="text-danger fw-bold">*</span></label>
                        <textarea name="address" id="address" className="docboard-bg-soft docboard-field form-control field border border-primary" placeholder="Address" required="">Tejgaon Link Road Gulshan 6D.205/1-A, Valere Enterprise Ltd., Hashim Tower.</textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
      
    </>
  );
}

export default UserDashboard;



