import { textType } from "../models";
import React from "react";

enum ContentType {
  HEADING_THREE = "HEADING_THREE",
  PARAGRAPH = "PARAGRAPH",
  IMAGE = "IMAGE",
  HEADING_FOUR = "HEADING_FOUR",
}

export const getContentFragment = (
  index: number,
  text: string,
  obj: textType,
  type?: string
) => {
  let modifiedText: any = text;

  if (obj) {
    if (obj.bold) {
      modifiedText = <b key={index}>{text}</b>;
    }
    if (obj.italic) {
      modifiedText = <em key={index}>{text}</em>;
    }
    if (obj.underline) {
      modifiedText = <u key={index}>{text}</u>;
    }
  }
  switch (type) {
    case ContentType.HEADING_THREE:
      return (
        <h3 key={index} className="text-xl font-semibold mb-4">
          {modifiedText.map((item: string, i: number) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </h3>
      );
    case ContentType.PARAGRAPH:
      return (
        <p key={index} className="mb-8">
          {modifiedText.map((item: string, i: number) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </p>
      );
    case ContentType.IMAGE:
      return (
        <img
          src={obj.src}
          alt={obj.title}
          height={obj.height}
          width={obj.width}
          key={index}
        />
      );
    case ContentType.HEADING_FOUR:
      return (
        <h4 key={index} className="text-md font-semibold mb-4">
          {modifiedText.map((item: string, i: number) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </h4>
      );

    default:
      return modifiedText;
  }
};
