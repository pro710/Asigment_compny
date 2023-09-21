import { useMemo } from "react";
import "./DiscoverOurNewFlavorsContainer.css";

const DiscoverOurNewFlavorsContainer = ({
  sectionTitle,
  productFeatures,
  sectionSubtitle,
  sectionDescription,
  propWidth,
  propZIndex,
  propPosition,
  propTop,
  propRight,
  propLeft,
  propWidth1,
  propWidth2,
}) => {
  const sectionStyle = useMemo(() => {
    return {
      width: propWidth,
      zIndex: propZIndex,
      position: propPosition,
      top: propTop,
      right: propRight,
      left: propLeft,
    };
  }, [propWidth, propZIndex, propPosition, propTop, propRight, propLeft]);

  const discoverOurNewContainerStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const curabiturArcuEratContainerStyle = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  return (
    <div className="section7" style={sectionStyle}>
      <div className="heading-22">
        <div
          className="discover-our-new-container"
          style={discoverOurNewContainerStyle}
        >
          <span className="discover-our-new-container1">
            <p className="discover-our">{sectionTitle}</p>
            <p className="discover-our">{productFeatures}</p>
          </span>
        </div>
      </div>
      <div className="divelementor-widget-container5">
        <div
          className="curabitur-arcu-erat-container"
          style={curabiturArcuEratContainerStyle}
        >
          <span className="discover-our-new-container1">
            <p className="discover-our">{sectionSubtitle}</p>
            <p className="discover-our">{sectionDescription}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DiscoverOurNewFlavorsContainer;
