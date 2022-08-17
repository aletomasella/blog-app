import React from "react";
import { Author } from "../models";
import Image from "next/image";

const Author = ({ author }: { author: Author }) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
      <div className="absolute left-0 right-0 -top-14">
        <Image
          src={author.photo.url}
          unoptimized
          alt={author.name}
          height="100px"
          width={"100px"}
          className="align-middle rounded-full mr-4 aspect-square"
        />
      </div>
      <h3 className="text-white mt-4 mb-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-lg">{author.description}</p>
    </div>
  );
};

export default Author;
