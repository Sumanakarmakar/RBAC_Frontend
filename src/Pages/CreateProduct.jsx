import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { addproduct } from "../Api/Functions/Addproduct.api";
import ButtonLoader from "../Components/ButtonLoader";

const CreateProduct = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState([]);
  const [cat, setCat] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { mutate, isPending } = useMutation({
    mutationFn: (data) => addproduct(data),
    onSuccess: (data) => {
      if (data?.status === 200) {
        console.log("product data", data);

        Swal.fire({
          icon: "success",
          title: data?.message,
        });
        navigate("/our_products");
      }
    },
    onError: (err) => {
      console.log("error msz", err);
      toast.error(err?.message);
      reset();
    },
  });

  //for image change
  const imageChange = (e) => {
    const imgs = Array.from(e.target.files);
    setImage(imgs);
  };

  const onSubmitproduct = (data) => {
    let formdata = new FormData();
    formdata.append("title", data?.title);
    formdata.append("description", data?.description);
    formdata.append("price", data?.price);
    formdata.append("category", cat);
    image.forEach((i) => formdata.append("image", i));

    mutate(formdata);
  };

  return (
    <>
      {/* page header */}
      <div class="page-heading products-heading header-text">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="text-content">
                <h4>new arrivals</h4>
                <h2>
                  b<span style={{ color: "#f33f3f" }}>b</span> products
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-3">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section-heading">
                <h2>Add your product</h2>
              </div>
            </div>

            <div class="add-form">
              <form id="contact" onSubmit={handleSubmit(onSubmitproduct)}>
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <fieldset>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Title*"
                        {...register("title", {
                          required: true,
                        })}
                      />
                      {errors?.title?.type === "required" && (
                        <p>**This field is Required</p>
                      )}
                    </fieldset>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <fieldset>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Description*"
                        {...register("description", {
                          required: true,
                        })}
                      />
                      {errors?.description?.type === "required" && (
                        <p>**This field is Required</p>
                      )}
                    </fieldset>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <fieldset>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Price*"
                        {...register("price", {
                          required: true,
                        })}
                      />
                      {errors?.price?.type === "required" && (
                        <p>**This field is Required</p>
                      )}
                    </fieldset>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <input
                      type="file"
                      className="form-control"
                      name="image"
                      multiple
                      onChange={imageChange}
                    />
                    {image !== null && image !== undefined && image !== "" ? (
                      <>
                        <div style={{ display: "flex" }}>
                          {image.map((i) => (
                            <img
                              src={URL.createObjectURL(i)}
                              alt="PHOTO"
                              height="100px"
                              width="100px"
                            />
                          ))}
                        </div>
                      </>
                    ) : (
                      <>
                        {image === null &&
                          image === undefined &&
                          image === "" && <p>Drag and Drop Image</p>}
                      </>
                    )}
                  </div>

                  <div class="col-lg-12 col-md-12 col-sm-12 d-flex align-items-center">
                    <label className="">Category: </label>
                    <div class="form-check d-flex check_form">
                      <div className="d-flex align-items-center justify-content-center">
                        <input
                          className="check_input"
                          name="category"
                          type="radio"
                          value="Electronics"
                          id="chk_s_size"
                          onChange={(e) => setCat(e.target.value)}
                        />
                        <label className="ml-1" for="chk_s_size">
                          Electronics
                        </label>
                      </div>

                      <div className="d-flex align-items-center justify-content-center ml-2">
                        <input
                          className="check_input"
                          name="category"
                          type="radio"
                          value="Garments"
                          id="chk_s_size"
                          onChange={(e) => setCat(e.target.value)}
                        />
                        <label className="ml-1" for="chk_s_size">
                          Garments
                        </label>
                      </div>

                      <div className="d-flex align-items-center justify-content-center ml-2">
                        <input
                          className="check_input"
                          name="category"
                          type="radio"
                          value="Groceries"
                          id="chk_s_size"
                          onChange={(e) => setCat(e.target.value)}
                        />
                        <label className="ml-1" for="chk_s_size">
                          Groceries
                        </label>
                      </div>

                      <div className="d-flex align-items-center justify-content-center ml-2">
                        <input
                          className="check_input"
                          name="category"
                          type="radio"
                          value="Furniture"
                          id="chk_s_size"
                          onChange={(e) => setCat(e.target.value)}
                        />
                        <label className="ml-1" for="chk_s_size">
                          Furniture
                        </label>
                      </div>
                    </div>
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
                          Add
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

export default CreateProduct;
