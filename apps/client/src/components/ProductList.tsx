import { ProductType } from "@repo/types";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import Link from "next/link";
import Filter from "./Filter";

type ProductListProps = {
  category?: string;
  sort?: string;
  search?: string;
  params: "homepage" | "products";
};

const fetchData = async ({
  category,
  sort,
  search,
  params,
}: ProductListProps): Promise<ProductType[]> => {
  const queryParams = new URLSearchParams();

  if (category) queryParams.set("category", category);
  if (search) queryParams.set("search", search);
  queryParams.set("sort", sort || "newest");
  if (params === "homepage") queryParams.set("limit", "8");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_PRODUCT_SERVICE_URL}/products?${queryParams.toString()}`
  );

  if (!res.ok) {
    return [];
  }

  const data = await res.json();

  // Проверка структуры ответа (массив или объект с полем products/data)
  if (Array.isArray(data)) {
    return data;
  }

  return data.products || data.data || [];
};

const ProductList = async ({
  category,
  sort,
  search,
  params,
}: ProductListProps) => {
  const products = await fetchData({ category, sort, search, params });

  return (
    <div className="w-full">
      <Categories />
      {params === "products" && <Filter />}

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="py-12 text-center text-gray-500">
          No products found.
        </div>
      )}

      <Link
        href={category ? `/products/?category=${category}` : "/products"}
        className="flex justify-end mt-4 underline text-sm text-gray-500"
      >
        View all products
      </Link>
    </div>
  );
};

export default ProductList;