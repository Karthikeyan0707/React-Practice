import React from "react";
import Button from "../components/Button";
import {
  GoBell,
  GoCloudDownload,
  GoDatabase,
  GoAlert,
  GoBug,
} from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {
    // console.log("Click!");
  };
  return (
    <div>
      <div>
        <Button
          success
          outline
          rounded
          className="mt-5 mb-5 ml-5"
          onClick={handleClick}
        >
          <GoBell />
          Click Here!
        </Button>
      </div>
      <div>
        <Button danger outline className="mb-5 ml-5" onMouseEnter={handleClick}>
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning className="mb-5 ml-5">
          <GoDatabase />
          Seal Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline className="mb-5 ml-5">
          <GoAlert />
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded className="mb-5 ml-5">
          <GoBug />
          Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
