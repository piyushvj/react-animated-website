import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

const Profile = () => {

    return (
        <>
            <div class="container emp-profile">
                <form method="post">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="profile-img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt="" />
                                <div class="file btn btn-lg btn-primary">
                                    Change Photo
                                <input type="file" name="file" />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="profile-head">
                                <h1>
                                    Kshiti Ghelani
                                    </h1>
                                <h5>
                                    Profession [Doctor]
                                    </h5>
                                <p class="proile-rating">Profile reaching : <span>8/10</span></p>
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Personal Information</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Education & Profession</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="family-tab" data-toggle="tab" href="#family" role="tab" aria-controls="family" aria-selected="true">Family</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="references-tab" data-toggle="tab" href="#references" role="tab" aria-controls="references" aria-selected="false">References</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="profile-work">
                                <p>Social LINK</p>
                                <a href="">FaceBook Link</a><br />
                                <a href="">Instagram Link</a><br />
                                <a href="">LinkedIn Link</a>
                                <p>CONTACT</p>
                                <h6>Contact Number 123456789</h6>
                                <h6>Email Id 123456789</h6>
                                <h6>Address Kharadi pune</h6>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="tab-content profile-tab" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <h3> <b>Personal Information</b></h3>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Date Of Birth</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>06/02/1991</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Birth Place</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Pune, MH</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Gotra</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Dummy Gotra</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Height</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>5'3"</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Appearance</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Wheatish</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Experience</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Expert</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Hourly Rate</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>10$/hr</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Total Projects</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>230</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>English Level</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Expert</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Availability</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>6 months</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <label>Your Bio</label><br />
                                            <p>Your detail description</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade show active" id="family" role="tabpanel" aria-labelledby="family-tab">
                                    <h3> <b>Family</b></h3>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Date Of Birth</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>06/02/1991</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Birth Place</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Pune, MH</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Gotra</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Dummy Gotra</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Height</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>5'3"</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Appearance</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Wheatish</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade show active" id="references" role="tabpanel" aria-labelledby="references-tab">
                                    <h3> <b>REFERENCES Information</b></h3>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Date Of Birth</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>06/02/1991</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Birth Place</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Pune, MH</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Gotra</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Dummy Gotra</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Height</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>5'3"</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Appearance</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Wheatish</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Profile;