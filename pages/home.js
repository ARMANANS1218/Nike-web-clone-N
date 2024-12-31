import React from "react";
import Banner from "@/components/UI/banner/Banner";
import PageWrapper from "@/components/layout/PageWrapper";
import ProductCard from "@/components/ProductCard";
import { fetchDataFromApi } from "@/utils/api";
import VideoPage from "@/components/UI/videoPage";
import EssentialPage from "@/components/UI/essentialPage";
import MembershipPage from "@/components/UI/membershipPage";

export default function Home({ products }) {
  return (
    <div>
      <Banner />
      <PageWrapper>
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            KEEP IT FRESH
          </div>
          <div className="text-md md:text-2xl ">
            Experience iconic styles in remixed coloways with the latest Air Max
            90, Air Max 97, and more...
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-14 px-5 md:px-0">
          {products.slice(0, 12).map((product) => {
            return (
              <React.Fragment key={product.id}>
                <ProductCard product={product} />
              </React.Fragment>
            );
          })}
        </div>
        <div>
          <VideoPage />
        </div>
        <div className="mt-[80px]">
          <EssentialPage />
          <MembershipPage />
        </div>
      </PageWrapper>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const products = await fetchDataFromApi("/products");
    return {
      props: { products },
    };
  } catch (error) {
    console.error("Error while getting static properties::", error);
    return {
      props: { products: [] },
    };
  }
}
