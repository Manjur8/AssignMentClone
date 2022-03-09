import React, { useEffect, useState } from 'react';
import "./edit.css";
import { Link } from 'react-router-dom';


// import imagees
import star1 from "../../../assets/images/star1.png";
import star2 from "../../../assets/images/star2.png";
import dash from "../../../assets/images/dashico1.png";
import dash2 from "../../../assets/images/dashico2.png";
import dash3 from "../../../assets/images/dashico3.png";
import dash4 from "../../../assets/images/dashico4.png";
import dash7 from "../../../assets/images/dashico7.png";
import dash8 from "../../../assets/images/dashico8.png";
import dash9 from "../../../assets/images/dashico9.png";
import dash10 from "../../../assets/images/dashico10.png";



const Edit = () => {
    let user = JSON.parse(localStorage.getItem("user-info"));

    const [name, setName] =useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [new_password, setNewPassword] = useState("");
    const [confirm_password, setConfirmPassword] = useState("");

    // useEffect(()=>{
    //     getUsers();
    // },[])

    // const getUsers =()=>{
    //     setName(user.result.userdata.name);
    //     setEmail(user.result.userdata.email);
    //     setPhone(user.result.userdata.phone);
    // }

    // const updateUser =()=>{
    //     let item = {name, phone, email, new_password, confirm_password};
    //     console.log(item);
    //     fetch("https://phpwebdevelopmentservices.com/project-react-backend/api/edit-profile",{
    //         method:'POST',
    //         headers:{
    //             'Accept':'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body:JSON.stringify(item)
    //     }).then((result)=>{
    //         result.json().then((res)=>{
    //             console.log(res);
    //             getUsers()
    //         })
    //     })
    // }
  return (
    <section className="mainDasbordsec">
	<div className="container">
		<div className="mainDasbordInr">
			<div className="row">
				<div className="col-lg-3 col-md-12 col-sm-12 pl-0">
					<div className="dasbordLeftsec">
						{/* <a href="#url" className="showmeu" data-toggle="collapse" data-target="#demo"><i className="fa fa-bars"></i>Show Menus</Link> */}
						<div className="dasbordLeft ">						
							<div className="profibx">
								{/* <em><img src="images/dachprofi.jpg" alt="" /></em> */}
								<strong>{user.result.userdata.name}</strong>
								<ul>
									<li><Link to="/edit"><img src={star1} alt="" /></Link></li>
									<li><Link to="/edit"><img src={star1} alt="" /></Link></li>
									<li><Link to="/edit"><img src={star1} alt="" /></Link></li>
									<li><Link to="/edit"><img src={star1} alt="" /></Link></li>
									<li><Link to="/edit"><img src={star2} alt="" /></Link></li>
									{/* <li><span>(410)</span></li> */}
								</ul>
							</div>
							<div className="dasbordLeftlink">
								<ul>
									<li><Link to="/edit">
										<span>
											<img src={dash} alt="" className="dashico1" />
										</span>
										Dashboard
									</Link></li>
									<li><Link to="/edit" className="activ">
										<span>
											<img src={dash2} alt="" className="dashico1" />
										</span>
										Edit Profile
									</Link></li>
									<li><Link to="/edit">
										<span>
											<img src={dash3} alt="" className="dashico1" />
										</span>
										My Order
									</Link></li>
									<li><Link to="/edit">
										<span>
											<img src={dash10} alt="" className="dashico1" />
										</span>
										My Favorite
									</Link></li>
									<li><Link to="/edit">
										<span>
											<img src={dash4} alt="" className="dashico1" />
										</span>
										Reviews
									</Link></li>
									
									<li><Link to="/edit">
										<span>
											<img src={dash7} alt="" className="dashico1" />
										</span>
										Messages
									</Link></li>
									<li><Link to="/edit">
										<span>
											<img src={dash8} alt="" className="dashico1" />
										</span>
										Notifications
										
									</Link></li>
									<li><Link to="/login">
										<span>
											<img src={dash9} alt="" className="dashico1" />
										</span>
										Log Out
										
									</Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-9 col-md-12 col-sm-12 pr-0">
					<div className="dasbordRightlink">
						<h1>Edit Profile</h1>
						<div className="dasbordRightBody">							
							
							<div className="editProformBx">
								<form action="edit-profile-service-offered.html">
									<div className="editProformir">
										
										<div className="row">                                            
											<div className="col-md-4 col-sm-12">
												<div className="iputBx">
													<label>Name</label>
													<input type="text" placeholder="Enter here" value={name} onChange={(e)=>setName(e.target.value)} />
												</div>
											</div>
                                            <div className="col-md-4 col-sm-12">
												<div className="iputBx">
													<label>Email</label>
													<input type="text" placeholder="Enter here" value={email} onChange={(e)=>setEmail(e.target.value)} />
												</div>
											</div>
                                            <div className="col-md-4 col-sm-12">
												<div className="iputBx">
													<label>Phone</label>
													<input type="text" placeholder="Enter here" value={phone} onChange={(e)=>setPhone(e.target.value)} />
												</div>
											</div>
											{/* <div className="col-sm-12">
												<div className="iputBx">
													<label>About me</label>
													<textarea placeholder="Enter your description here..."></textarea>
												</div>
											</div> */}
                                            
                                            
                                            
                                            {/* <div className="col-md-5 col-sm-6">
												<div className="iputBx">
													<label>Date of Birth</label>
													<input type="text" className="datepicker" placeholder="Enter here" />
												</div>
											</div>
                                            
                                            <div className="col-md-4 col-sm-6">
												<div className="genfil">
													<span>Gender</span>
													<ul>
														<li>
															<input type="radio" id="radio1" name="radios" value="all" checked />
															<label for="radio1">Male</label>
														</li>
														<li>
															<input type="radio" id="radio2" name="radios" value="all" />
															<label for="radio2">Female</label>
														</li>
													</ul>
												</div>
											</div> */}
                                            
			{/* <div className="col-sm-12">
			 <div className="form_group edt_checkk">
			    <label className="search_label">Travel</label>
				<ul className="c_ul">
                  <li>
                     <label className="contect_container_checkBox">Bus
                     <input type="checkbox" checked="" name="text" />
                     <span className="contect_checkmark"></span>
                     </label>
                  </li>
                  <li>
                     <label className="contect_container_checkBox">Car
                     <input type="checkbox" name="text" />
                     <span className="contect_checkmark"></span>
                     </label>
                  </li>
                  <li>
                     <label className="contect_container_checkBox">Track
                     <input type="checkbox" name="text" />
                     <span className="contect_checkmark"></span>
                     </label>
                  </li>
                  <li>
                     <label className="contect_container_checkBox">Walk
                     <input type="checkbox" name="text" />
                     <span className="contect_checkmark"></span>
                     </label>
                  </li>
                  <li>
                     <label className="contect_container_checkBox">Scooter
                     <input type="checkbox" name="text" />
                     <span className="contect_checkmark"></span>
                     </label>
                  </li>
               </ul>
			 </div>
			</div> */}
            
            {/* <div className="col-sm-12">
            <div className="form_fild_area_m frm_grp arro">
              <label>Language </label>
              <select data-placeholder="Select" className="chosen-select" multiple tabindex="4">
                <option value=""></option>
                <option value="">Htmuyyiyyuyu uyytuyl</option>
                <option value="">Htmuyyiyyuyu uyytuyl</option>
                <option value="">Htmuyyiyyuyu uyytuyl</option><option value="">Htmuyyiyyuyu uyytuyl</option>
              </select>
            </div>
			</div>                                */}
                                            
											{/* <div className="col-sm-12">
												<div className="uplodimg">
													<span>Profile Image</span>
													<div className="uplodimgfil">
														<input type="file" name="file-1[]" id="file-1" className="inputfile inputfile-1" data-multiple-caption="{count} files selected" multiple />
														<label for="file-1">Click here to Upload Profile Image<img src="images/clickhe.png" alt="" /></label>
													</div>
													<div className="uplodimgfilimg">
														<em><img src="images/uplodimg.jpg" alt="" /></em>
													</div>	
												</div>
											</div> */}
										</div>
                                        
                                        
                                        
										{/*<div className="locatioSec">
											<h3>Location</h3>
											<div className="row">
												<div className="col-md-4 col-sm-6">
													<div className="iputBx">
														<label>Country</label>
														<select>
															<option>Select</option>
															<option>Select1</option>
														</select>
													</div>
												</div>
												<div className="col-md-4 col-sm-6">
													<div className="iputBx">
														<label>State</label>
														<input type="text" placeholder="Enter here" />
													</div>
												</div>
												<div className="col-md-4 col-sm-12">
													<div className="iputBx">
														<label>City</label>
														<input type="text" placeholder="Enter your full address" />
													</div>
												</div>
											</div>
										</div> */}
                                        
                                        
                                        <div className="locatioSec">
											<h3>Change password</h3>
											<div className="row">
												{/* <div className="col-md-4 col-sm-6">
													<div className="iputBx">
														<label>Current password</label>
														<input type="password" placeholder="Enter here" value={password} onChange={(e)=>setPassword(e.target.value)} />
													</div>
												</div> */}
												<div className="col-md-4 col-sm-6">
													<div className="iputBx">
														<label>New password</label>
														<input type="password" placeholder="Enter here" value={new_password} onChange={(e)=>setNewPassword(e.target.value)} />
													</div>
												</div>
												<div className="col-md-4 col-sm-12">
													<div className="iputBx">
														<label>Confirm password</label>
														<input type="password" placeholder="Enter here" value={confirm_password} onChange={(e)=>setConfirmPassword(e.target.value)} />
													</div>
												</div>
											</div>
										</div>
                                        
                                        
										<div className="footdashSec">
											<input type="submit" value="Save all changes" className="subbtn" 
											//  onClick={updateUser}
										/>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
  )
}

export default Edit