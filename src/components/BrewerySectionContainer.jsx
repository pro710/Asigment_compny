import ContainerCard from "./ContainerCard";
import "./BrewerySectionContainer.css";

const BrewerySectionContainer = () => {
  return (
    <div className="section4">
      <div className="divelementor-widget-wrap3">
        <div className="section5">
          <img
            className="brand-historypng-icon"
            alt=""
            src="/brandhistorypng@2x.png"
          />
          <div className="divelementor-widget-wrap4">
            <div className="heading-21">
              <div className="leading-beer-brewery-container">
                <span className="leading-beer-brewery-container1">
                  <p className="leading-beer">Leading Beer</p>
                  <p className="leading-beer">Brewery,</p>
                  <p className="leading-beer">Since 1974!</p>
                </span>
              </div>
            </div>
            <div className="divelementor-widget-container3">
              <div className="vestibulum-ac-diam-container">
                <span className="leading-beer-brewery-container1">
                  <p className="leading-beer">
                    Vestibulum ac diam sit amet quam vehicula elementum sed sit
                    amet dui.
                  </p>
                  <p className="leading-beer">
                    Proin eget tortor risus. Nulla quis lorem ut libero
                    malesuada feugiat.
                  </p>
                  <p className="leading-beer">
                    Mauris blandit aliquet elit, eget tincidunt nibh.
                  </p>
                </span>
              </div>
            </div>
            <div className="divelementor-widget-container4">
              <div className="sed-porttitor-lectus-container">
                <span className="leading-beer-brewery-container1">
                  <p className="leading-beer">
                    Sed porttitor lectus nibh. Pellentesque in ipsum id orci
                    porta dapibus.
                  </p>
                  <p className="leading-beer">
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere
                  </p>
                  <p className="leading-beer">
                    cubilia Curae; Donec velit neque, auctor sit amet aliquam
                    vel, ullamcorper
                  </p>
                  <p className="leading-beer">
                    sit amet ligula. Proin eget tortor.
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="section6">
          <ContainerCard carYear="1974" />
          <ContainerCard carYear="1985" propWidth="95.68px" />
          <ContainerCard carYear="2005" propWidth="98.84px" />
          <ContainerCard carYear="2021" propWidth="94.03px" />
        </div>
      </div>
    </div>
  );
};

export default BrewerySectionContainer;
