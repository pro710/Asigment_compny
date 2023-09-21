import { useMemo } from "react";
import "./ContainerCard.css";

const ContainerCard = ({ carYear, propWidth }) => {
  const heading4Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="divelementor-widget-wrap2">
      <div className="heading-4" style={heading4Style}>
        {carYear}
      </div>
      <div className="spanelementor-divider-separat">
        <div className="pseudo" />
        <div className="div1"></div>
        <div className="pseudo" />
      </div>
      <div className="divelementor-widget-container2">
        <div className="quisque-velit-nisi-container">
          <span className="quisque-velit-nisi-container1">
            <p className="quisque-velit-nisi">Quisque velit nisi, pretium ut</p>
            <p className="quisque-velit-nisi">lacinia in, elementum id enim.</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContainerCard;
