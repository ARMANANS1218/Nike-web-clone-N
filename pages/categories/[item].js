import React from "react";
import PageWrapper from "@/components/layout/PageWrapper";
import ProductCard from "@/components/ProductCard";
import { useRouter } from "next/router";
import { fetchDataFromApi } from "@/utils/api";
const Category = ({ category }) => {
  const router = useRouter();
  const { item } = router.query;
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className="w-full md:py-20">
      <PageWrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[20px] md:text-[34px] mb-5 font-semibold leading-light">
            {capitalizeFirstLetter(item)}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
            {category &&
              category.map((product) => {
                return (
                  <React.Fragment key={product.id}>
                    <ProductCard product={product} />
                  </React.Fragment>
                );
              })}
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default Category;

export async function getStaticPaths() {
  try {
    const categories = await fetchDataFromApi("/categories");
    const paths = categories.map((category) => ({
      params: {
        item: category,
      },
    }));
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error("Error getting static paths:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
}

export async function getStaticProps({ params: { item } }) {
  try {
    const category = await fetchDataFromApi(`/categories/${item}`);
    return {
      props: { category },
    };
  } catch (error) {
    console.error("Error while getting static properties:", error);
    return {
      props: { category: null },
    };
  }
}
