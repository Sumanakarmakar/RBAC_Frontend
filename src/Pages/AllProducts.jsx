import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../Api/Functions/Allproducts.api";
import PageLoader from "../Components/PageLoader";
import { ImageUrl } from "../Api/AxiosInstance/ImageUrl";
import { deleteProduct } from "../Api/Functions/RemoveProduct.api";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Swal from "sweetalert2";

const AllProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const {
    isLoading,
    isError,
    data: allproductdata,
    error,
    refetch,
  } = useQuery({
    queryKey: ["all_products"],
    queryFn: getAllProducts,
  });

  // Function to handle category change
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Get unique categories from products
  const categories = allproductdata?.reduce(
    (acc, product) => {
      if (!acc.includes(product.category)) {
        acc.push(product.category);
      }
      return acc;
    },
    ["all"]
  );

  // Filter products based on selected category
  const filteredProducts = allproductdata?.filter((product) => {
    // Filter by category
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    // Filter by search query (case insensitive)
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });
  console.log("fill", filteredProducts, selectedCategory, searchQuery);

  //for delete product
  const handleDeleteProduct = async (id) => {
    const res = await deleteProduct(id);
    // console.log(res);
    if (res?.status === 200) {
      Swal.fire({
        icon: "success",
        title: res?.message
      })
    }
    refetch();
  };

  if (isLoading) {
    return <PageLoader />;
  }
  if (isError) {
    return <h2>{error?.message}</h2>;
  }
  console.log("prod", allproductdata);

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

      <div class="container d-flex mt-5">
        <a href="/addproduct">
          <button class="btn addProd_btn">Add Products</button>
        </a>

        <div class="ml-auto">
          <form
            className="search_bar d-flex align-items-center justify-content-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              class=""
              placeholder="Search by title..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button type="submit" className="mr-2 search_btn">
              <SearchIcon />
            </button>
          </form>
        </div>

        <div class="dropdown ml-2">
          <select
            name="category"
            id="category"
            class="btn btn-dark dropdown-toggle"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            {categories?.map((category, index) => (
              <option key={index} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div class="container">
        <table class="table table-striped table-secondary mt-4">
          <thead>
            <tr>
              <th scope="col">Sl No.</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Image</th>
              <th scope="col">Category</th>
              <th scope="col" colSpan={2} class="">
                Actions
              </th>
            </tr>
          </thead>
          <tbody id="all_product">
            {Array.isArray(filteredProducts) &&
              filteredProducts.map((item, index) => (
                <>
                  {item.isDeleted ? (
                    <></>
                  ) : (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{item?.title}</td>
                      <td>{item?.description.slice(0, 30)}...</td>
                      <td>&#8377; {item?.price}</td>
                      <td>
                        <img
                          src={`${ImageUrl}/${item?.image[0]}`}
                          alt="Img"
                          height={50}
                          width={50}
                        />
                      </td>
                      <td>{item?.category}</td>

                      <td>
                        <Link
                          style={{ color: "#fff" }}
                          to={`/editproduct/${item._id}`}
                        >
                          <EditIcon />
                        </Link>
                      </td>
                      <td>
                        <Button
                          style={{ color: "#fff" }}
                          onClick={() => handleDeleteProduct(item?._id)}
                        >
                          <DeleteIcon />
                        </Button>
                      </td>
                    </tr>
                  )}
                </>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllProducts;
