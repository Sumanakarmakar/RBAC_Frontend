import React from "react";
import { ImageUrl } from "../Api/AxiosInstance/ImageUrl";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      {/* page header */}
      <div class="page-heading products-heading header-text">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="text-content">
                <h4>Member Dashboard</h4>
                <h2>
                  b<span style={{ color: "#f33f3f" }}>b</span> products
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 d-flex align-item-center justify-content-center">
        <div class="card" style={{ width: "60%" }}>
          <div className="row">
            <div className="col-md-4">
              <img
                src={`${ImageUrl}/${user?.profile_pic}`}
                class="card-img-top"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{user?.name}</h5>
                <p class="card-text">Email: {user?.email}</p>
                <p class="card-text">Phone: {user?.phone}</p>
                <p class="card-text">First School: {user?.first_school}</p>
                <p class="card-text">City: {user?.address?.city}</p>
                <p class="card-text">State: {user?.address?.state}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
