import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./product.css";
import { products, productType } from "../data/products";
import { getLastProductParamLink } from "../utils/textFormatUtils";
import ImageDisplay from "../components/product/imageDisplay";
import InformationList from "../components/product/informationList";
import ProductForm from "../components/product/productForm";
import {
  ToastNotification,
  showToast,
} from "../components/common/toastNotification";
import BreakCrumbNavigation from "../components/navigation/breadCrumbNavigation";
import Scroller from "../components/common/scroller/scroller";
import { selectRandomNumbersArray } from "../utils/calculationUtils";
import Footer from "../components/navigation/footer";

function Product() {
  const { productId } = useParams<{
    productId: string;
  }>();
  const [product, setProduct] = useState<productType | undefined>(undefined);
  const [recommended, setRecommended] = useState<productType[]>([]);
  useEffect(() => {
    const selectedProduct = products.find(
      (product) => productId === getLastProductParamLink(product.href)
    );
    setProduct(selectedProduct);

    setRecommended(fetchStoreSales(selectedProduct));
  }, [productId]);

  function fetchStoreSales(product: productType) {
    const categoryItems = products.filter(
      (item) => item.subCategory === product.subCategory
    );
    console.log(categoryItems);
    const itemIndex = selectRandomNumbersArray(
      categoryItems.length,
      categoryItems.length > 8 ? 8 : categoryItems.length
    );
    let result = [];
    itemIndex.forEach((index) => {
      result = [...result, categoryItems[index]];
    });
    return result;
  }

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
      <div className="product">
        <ToastNotification position="bottom-center" autoClose={3000} />
        <div className="content">
          <div className="top-bar">
            <BreakCrumbNavigation />
          </div>
        </div>
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
        <div className="content">
          <Scroller items={[...recommended]} title="Recommended" size="large" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Product;
