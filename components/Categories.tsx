import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Category } from "../models";
import { getCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((result) => setCategories(result));
  }, []);
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-8 mb-8 pb-12 mt-4">
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
        {categories &&
          categories.map((category: Category, i) => {
            return (
              <Link key={category.slug + i} href={`/category/${category.slug}`}>
                <span className="cursor-pointer block pb-3 mb-3">
                  {category.name}
                </span>
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default Categories;
