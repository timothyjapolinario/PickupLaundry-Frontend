"use client";
import { useEffect } from "react";
type Props = {
  imageHeight: number;
  imageWidth: number;
};

const SampleComponent = ({ imageHeight, imageWidth }: Props) => {
  useEffect(() => {
    console.log(imageHeight, imageWidth);
  }, []);
  return (
    <div>
      <h1>{imageHeight}</h1>
      <h1>{imageWidth}</h1>
    </div>
  );
};

export default SampleComponent;
