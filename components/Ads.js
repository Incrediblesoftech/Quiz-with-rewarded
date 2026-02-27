"use client";
import { useEffect } from "react";

const Ads = (props) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  // Determine the appropriate style based on props
  const adStyle =  props.display
      ? {
        display: "inline-block",
        width: "336px",
        height: "280px",
      }
      : {
        display: "block",
      };

  return (

    <ins
      className="adsbygoogle adbanner-customize"
      style={adStyle}
      data-ad-client="ca-pub-4575195873243785"
      {...props}
    />

  );
};

export default Ads;
