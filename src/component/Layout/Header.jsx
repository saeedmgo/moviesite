import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header class="site-header">
        <div class="container">
          <Link to="/">
            <img src="images/logo.png" alt="" class="logo" />
            <div class="logo-copy">
              <h1 class="site-title">See Movie</h1>
              <small class="site-description">Best Site Movie</small>
            </div>
          </Link>

          <div class="main-navigation">
            <button type="button" class="menu-toggle">
              <i class="fa fa-bars"></i>
            </button>
            <ul class="menu">
              <li class="menu-item current-menu-item">
                <Link to="/movie/3">Home</Link>
              </li>
              <li class="menu-item">
                <a href="about.html">About</a>
              </li>
              <li class="menu-item">
                <a href="review.html">Movie reviews</a>
              </li>
              <li class="menu-item">
                <a href="joinus.html">Join us</a>
              </li>
              <li class="menu-item">
                <a href="contact.html">Contact</a>
              </li>
              <li class="menu-item">
                <a href="search.html">Search</a>
              </li>
            </ul>

            <form action="#" class="search-form">
              <input type="text" placeholder="Search..." />
              <button>
                <i class="fa fa-search"></i>
              </button>
            </form>
          </div>

          <div class="mobile-navigation"></div>
        </div>
      </header>
    </div>
  );
}
