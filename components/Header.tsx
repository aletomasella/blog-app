import React, { useContext } from "react";
import Link from "next/link";
import { Category } from "../models";

const categories: Category[] = [
  { name: "Category 1", slug: "category-1" },
  { name: "Category 2", slug: "category-2" },
];

const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href={"/"}>
            <span className="cursor-pointer font-bold text-4xl text-white">
              HydraGraph ex-GraphCMS
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories &&
            categories.map((category, i) => (
              <Link href={`/category/${category.slug}`}>
                <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                  {category.name}
                </span>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
