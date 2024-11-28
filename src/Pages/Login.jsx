import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../Api/Functions/Login.api";
import { setLogin } from "../Redux/AuthSlice";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import ButtonLoader from "../Components/ButtonLoader";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { mutate, isPending } = useMutation({
    mutationFn: (data) => userLogin(data),
    onSuccess: (data) => {
      if (data?.status === 200) {
        console.log("login data", data);
        localStorage.setItem("token", data?.token);
        localStorage.setItem("user", JSON.stringify(data?.data));

        Swal.fire({
          icon: "success",
          title: data?.message,
        });
        navigate("/");
      }
    },
    onError: (err) => {
      console.log("error msz", err);
      toast.error(err?.message);
      reset();
    },
  });

  const onSubmitLogin = (data) => {
    mutate(data, {
      onSuccess: (res) => dispatch(setLogin()),
    });
  };
  return (
    <>
      <div class="container">
        <div class="row"></div>
      </div>

      <div class="login_section">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section-heading">
                <h2>User Login</h2>
              </div>
            </div>

            <div class="login-form">
              <form id="contact" onSubmit={handleSubmit(onSubmitLogin)}>
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <fieldset>
                      <input
                        type="text"
                        class="form-control"
                        id="email"
                        placeholder="E-Mail Address"
                        {...register("email", {
                          required: true,
                        })}
                      />
                      {errors?.email?.type === "required" && (
                        <p>**This field is Required</p>
                      )}
                    </fieldset>
                  </div>

                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <fieldset>
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Password"
                        {...register("password", {
                          required: true,
                        })}
                      />
                      {errors?.password?.type === "required" && (
                        <p>**This field is Required</p>
                      )}
                    </fieldset>
                  </div>

                  <div class="col-lg-12">
                    <fieldset>
                      {isPending ? (
                        <button
                          type="submit"
                          id="form-submit"
                          class="filled-button"
                        >
                          <ButtonLoader />
                        </button>
                      ) : (
                        <button
                          type="submit"
                          id="form-submit"
                          class="filled-button"
                        >
                          Login
                        </button>
                      )}
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
