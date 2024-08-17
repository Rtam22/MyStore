import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./product.css";
import { products, productType } from "../data/products";
import { getLastParamLink } from "../utils/textFormatUtils";
import ImageDisplay from "../components/product/imageDisplay";
import InformationList from "../components/product/informationList";
import ProductForm from "../components/product/productForm";
import {
  ToastNotification,
  showToast,
} from "../components/common/toastNotification";

function Product() {
  const { productId } = useParams<{
    productId: string;
  }>();
  const [product, setProduct] = useState<productType | undefined>(undefined);

  useEffect(() => {
    const selectedProduct = products.find(
      (product) => productId === getLastParamLink(product.href)
    );
    setProduct(selectedProduct);
  }, [productId]);

  function handleToastNotification(
    message: string,
    status: "success" | "error" | "info" | "warning" = "info"
  ) {
    showToast(message, status);
  }

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {" "}
      <ToastNotification position="bottom-center" autoClose={3000} />
      <div className="content product">
        <div className="col-left">
          <ImageDisplay
            image={product.image}
            imageAlt={product.imageAlt}
            discount={product.discount}
          />
        </div>
        <div className="col-right">
          <InformationList
            title={product.title}
            price={product.price}
            discount={product.discount}
            salePrice={product.salePrice}
            rating={product.rating}
            description={product.description}
          />
          <ProductForm
            product={product}
            handleToast={handleToastNotification}
          />
        </div>
      </div>
    </>
  );
}

export default Product;
