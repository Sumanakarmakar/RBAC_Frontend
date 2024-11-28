import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Banner */}

      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div class="banner header-text">
            <div class="banner-item-01 carousel-item active">
              <div class="text-content">
                <h4>Best Offer</h4>
                <h2>New Arrivals On Sale</h2>
              </div>
            </div>
            <div class="banner-item-02 carousel-item">
              <div class="text-content">
                <h4>Flash Deals</h4>
                <h2>Get your best products</h2>
              </div>
            </div>
            <div className="carousel-item">
              <div class="banner-item-03">
                <div class="text-content">
                  <h4>Last Minute</h4>
                  <h2>Grab last minute deals</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          class="carousel-control-prev"
          type="button"
          data-target="#carouselExampleControls"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          type="button"
          data-target="#carouselExampleControls"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <div class="best-features">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section-heading">
                <h2>About Bright basket</h2>
              </div>
            </div>
            <div class="col-md-6">
              <div class="left-content">
                <h4>Looking for the best products?</h4>
                <p>
                  <a
                    rel="nofollow"
                    href="https://templatemo.com/tm-546-sixteen-clothing"
                    target="_parent"
                  >
                    This template
                  </a>{" "}
                  is free to use for your business websites. However, you have
                  no permission to redistribute the downloadable ZIP file on any
                  template collection website.{" "}
                  <a rel="nofollow" href="https://templatemo.com/contact">
                    Contact us
                  </a>{" "}
                  for more info.
                </p>
                <ul class="featured-list">
                  <li>
                    <a href="#">Lorem ipsum dolor sit amet</a>
                  </li>
                  <li>
                    <a href="#">Consectetur an adipisicing elit</a>
                  </li>
                  <li>
                    <a href="#">It aquecorporis nulla aspernatur</a>
                  </li>
                  <li>
                    <a href="#">Corporis, omnis doloremque</a>
                  </li>
                  <li>
                    <a href="#">Non cum id reprehenderit</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <div class="right-image">
                <img src="assets/images/feature-image.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div class="latest-products">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section-heading">
                <h2>Latest Products</h2>
                <Link to="/our_products">
                  view all products <i class="fa fa-angle-right"></i>
                </Link>
              </div>
            </div>
            <div class="col-md-4">
              <div class="product-item">
                <Link to="/our_products">
                  <img src="assets/images/laptop.jpg" alt="" />
                </Link>
                <div class="down-content">
                  <Link to="/our_products">
                    <h4>Laptops</h4>
                  </Link>
                  <h6>$25.75</h6>
                  <p>
                    Lorem ipsume dolor sit amet, adipisicing elite. Itaque,
                    corporis nulla aspernatur.
                  </p>
                  <ul class="stars">
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                  </ul>
                  <span>Reviews (24)</span>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="product-item">
                <Link to="/our_products">
                  <img src="assets/images/mobile.jpg" alt="" />
                </Link>
                <div class="down-content">
                  <Link to="/our_products">
                    <h4>Mobiles</h4>
                  </Link>
                  <h6>$30.25</h6>
                  <p>
                    Lorem ipsume dolor sit amet, adipisicing elite. Itaque,
                    corporis nulla aspernatur.
                  </p>
                  <ul class="stars">
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                  </ul>
                  <span>Reviews (21)</span>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="product-item">
                <Link to="/our_products">
                  <img src="assets/images/women_things.jpg" alt="" />
                </Link>
                <div class="down-content">
                  <Link to="/our_products">
                    <h4>Accessories</h4>
                  </Link>
                  <h6>$20.45</h6>
                  <p>
                    Sixteen Clothing is free CSS template provided by
                    TemplateMo.
                  </p>
                  <ul class="stars">
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                  </ul>
                  <span>Reviews (36)</span>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="product-item">
                <Link to="/our_products">
                  <img src="assets/images/Fashion_Clothes.jpg" alt="" />
                </Link>
                <div class="down-content">
                  <Link to="/our_products">
                    <h4>Fashion Hub</h4>
                  </Link>
                  <h6>$15.25</h6>
                  <p>
                    Lorem ipsume dolor sit amet, adipisicing elite. Itaque,
                    corporis nulla aspernatur.
                  </p>
                  <ul class="stars">
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                  </ul>
                  <span>Reviews (48)</span>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="product-item">
                <Link to="/our_products">
                  <img src="assets/images/Fragrances.jpg" alt="" />
                </Link>
                <div class="down-content">
                  <Link to="/our_products">
                    <h4>Sweet Smells</h4>
                  </Link>
                  <h6>$12.50</h6>
                  <p>
                    Lorem ipsume dolor sit amet, adipisicing elite. Itaque,
                    corporis nulla aspernatur.
                  </p>
                  <ul class="stars">
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                  </ul>
                  <span>Reviews (16)</span>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="product-item">
                <Link to="/our_products">
                  <img src="assets/images/furniture.jpg" alt="" />
                </Link>
                <div class="down-content">
                  <Link to="/our_products">
                    <h4>Home Decoration</h4>
                  </Link>
                  <h6>$22.50</h6>
                  <p>
                    Lorem ipsume dolor sit amet, adipisicing elite. Itaque,
                    corporis nulla aspernatur.
                  </p>
                  <ul class="stars">
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                  </ul>
                  <span>Reviews (32)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="call-to-action">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="inner-content">
                <div class="row">
                  <div class="col-md-8">
                    <h4>
                      Creative &amp; Unique <em>Bright Basket</em> Products
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Itaque corporis amet elite author nulla.
                    </p>
                  </div>
                  <div class="col-md-4">
                    <a href="#" class="filled-button">
                      Purchase Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
