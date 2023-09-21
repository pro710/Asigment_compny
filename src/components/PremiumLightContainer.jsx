import { useMemo } from "react";
import "./PremiumLightContainer.css";

const PremiumLightContainer = ({ propTextTransform, propColor }) => {
  const heading3Style = useMemo(() => {
    return {
      textTransform: propTextTransform,
      color: propColor,
    };
  }, [propTextTransform, propColor]);

  return (
    <div className="divelementor-widget-wrap5">
      <div className="heading-6">Biergut</div>
      <div className="heading-3" style={heading3Style}>
        Premium Light
      </div>
      <div className="divelementor-widget-container6">
        <div className="curabitur-arcu-erat-container2">
          <span className="curabitur-arcu-erat-container3">
            <p className="sem-donec-sollicitudin">
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at
            </p>
            <p className="sem-donec-sollicitudin">
              sem. Donec sollicitudin molestie malesuada. Curabitur arcu
            </p>
            <p className="sem-donec-sollicitudin">
              erat, accumsan id imperdiet et, porttitor at sem. Donec
            </p>
            <p className="sem-donec-sollicitudin">
              sollicitudin molestie malesuada.
            </p>
          </span>
        </div>
      </div>
      <div className="divelementor-image-box-conten">
        <div className="heading-61">Extract</div>
        <div className="div2">11%</div>
      </div>
      <div className="divelementor-image-box-conten1">
        <div className="heading-62">Alcohol</div>
        <div className="div3">4%</div>
      </div>
      <div className="divelementor-image-box-conten2">
        <div className="heading-63">Gentain</div>
        <div className="ibu">20IBU</div>
      </div>
      <div className="divelementor-image-box-conten3">
        <div className="heading-64">Serving Temp</div>
        <div className="degree-celsius">6-9 Degree Celsius</div>
      </div>
    </div>
  );
};

export default PremiumLightContainer;
