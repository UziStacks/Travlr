import React from "react";
import Features from "./content/Features.component";

const Content = () => {
  const styles = {
    container: "text-center mt-5",
    title: "text-lg",
    subtitle: "text-2xl mb-[46px]",
    features:
      "flex flex-col items-center justify-center lg:flex-row lg:justify-between md:gap-5 2xl:gap-20 ",
    centerFeature: "lg:relative top-[-50px]",
  };
  const { container, title, subtitle, features, centerFeature } = styles;
  return (
    <div className={container}>
      <h4 className={title}>create lasing memories</h4>
      <h3 className={subtitle}>find travel perfection</h3>
      <div className={features}>
        <Features />
        <div className={centerFeature}>
          <Features />
        </div>
        <Features />
      </div>
    </div>
  );
};

export default Content;
