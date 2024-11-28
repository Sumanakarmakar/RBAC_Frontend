import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { updateProduct } from "../Api/Functions/Update.api";
import ButtonLoader from "../Components/ButtonLoader";
import { getProductDetails } from "../Api/Functions/Details.api";

const EditProduct = () => {
  const { id } = useParams();
  const [prodData, setProdData] = useState();
  const [image, setImage] = useState([]);
  const [cat, setCat] = useState();
  const navigate = useNavigate();

  const { register, handleSubmit, setValue } = useForm();

  const { mutate, isPending } = useMutation({
    mutationFn: (data) => updateProduct(id, data),
    onSuccess: (data) => {
      if (data?.status === 200) {
        // toast.success(data?.message)
        navigate("/our_products");
      }
    },
    onError: (err) => {
      console.log("err detected", err);
    },
  });

  //for image change
  const imageChange = (e) => {
    const imgs = Array.from(e.target.files);
    setImage(imgs);
  };

  const onSubmitEditprod = (data) => {
    let formdata = new FormData();
    formdata.append("title", data?.title);
    formdata.append("description", data?.description);
    formdata.append("price", data?.price);
    formdata.append("category", cat);
    image.forEach((i) => formdata.append("image", i));
    mutate(formdata);
  };

  useEffect(() => {
    const fetchProductDetail = async (id) => {
      try {
        const res = await getProductDetails(id);
        setProdData(res);
        setCat(res?.category)
      } catch (err) {
        console.log("error detected", err);
      }
    };
    fetchProductDetail(id);
  }, [id]);

  console.log("dvsd", prodData);

  useEffect(() => {
    setValue("title", prodData?.title);
    setValue("description", prodData?.description);
    setValue("price", prodData?.price);
    // setValue("category", prodData?.category);
    // setValue("image", document.getElementById('image').files[0])
  }, [prodData, setValue]);
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
                <h2>Update your product</h2>
              </div>
            </div>

            <div class="add-form">
              <form id="contact" onSubmit={handleSubmit(onSubmitEditprod)}>
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <fieldset>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Title*"
                        {...register("title")}
                      />
                    </fieldset>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <fieldset>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Description*"
                        {...register("description")}
                      />
                    </fieldset>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <fieldset>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Price*"
                        {...register("price")}
                      />
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
                          checked={cat==='Electronics'}
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
                          checked={cat==='Garments'}
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
                          checked={cat==='Groceries'}
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
                          checked={cat==='Furniture'}
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
                          Save Changes
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

export default EditProduct;
