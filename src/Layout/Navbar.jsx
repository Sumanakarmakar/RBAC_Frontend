import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { logout } from "../Redux/AuthSlice";
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { ImageUrl } from "../Api/AxiosInstance/ImageUrl";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //for logout
  const handleLogout = () => {
    dispatch(logout());
    Swal.fire({
      icon: "success",
      text: "Logged Out Successfully",
    });
  };
  return (
    <>
      <header class="">
        <nav class="navbar navbar-expand-lg">
          <div class="container">
            <Link class="navbar-brand" to="/">
              <h2>
                Bright <em>Basket</em>
              </h2>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <Link class="nav-link" to="/">
                    Home
                    <span class="sr-only">(current)</span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/about">
                    About Us
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/our_products">
                    Our Products
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/contact">
                    Contact Us
                  </Link>
                </li>
                <li class="nav-item d-flex align-items-center justify-content-center">
                  {isLoggedIn ? (
                    <>
                      <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                          <Avatar
                            alt="A"
                            src={`${ImageUrl}/${
                              JSON.parse(localStorage.getItem("user"))
                                .profile_pic
                            }`}
                          ></Avatar>
                        </IconButton>
                      </Tooltip>
                      <Menu
                        sx={{ mt: "45px" }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                      >
                        <Link to="/profile" className="text-black">
                          <MenuItem onClick={handleCloseUserMenu}>
                            <Typography textAlign="center" variant="subtitle1">
                              Profile
                            </Typography>
                          </MenuItem>
                        </Link>
                        <Link to="/login">
                          <MenuItem onClick={handleLogout}>
                            <Typography textAlign="center" variant="subtitle1">
                              Log out
                            </Typography>
                          </MenuItem>
                        </Link>
                      </Menu>
                    </>
                  ) : (
                    
                    <Link class="" to="/login">
                      <button className="btn btn-danger login_btn">
                        Login
                      </button>
                    </Link>
                    
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
