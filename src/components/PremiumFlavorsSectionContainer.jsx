import "./PremiumFlavorsSectionContainer.css";

const PremiumFlavorsSectionContainer = () => {
  return (
    <div className="section3">
      <div className="divelementor-container">
        <div className="divelementor-widget-wrap1">
          <button className="frame">
            <div className="heading-5">Biergut Premium Beer</div>
            <div className="heading-1">
              <div className="introducing-new-premium-container">
                <span className="introducing-new-premium-container1">
                  <p className="introducing">Introducing</p>
                  <p className="introducing">New Premium</p>
                  <p className="introducing">Flavors</p>
                </span>
              </div>
            </div>
          </button>
          <div className="frame1">
            <div className="divelementor-widget-container1">
              <div className="lorem-ipsum-dolor-container2">
                <span className="introducing-new-premium-container1">
                  <p className="introducing">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                  <p className="introducing">
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud
                  </p>
                  <p className="introducing">exercitation ullamco.</p>
                </span>
              </div>
            </div>
            <div className="frame2">
              <div className="link1">
                <div className="host-a-party">Host a Party</div>
              </div>
              <div className="link2">
                <div className="restock-your-pub">Restock Your Pub</div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="hero-beer-bottles-3png-icon"
          alt=""
          src="/herobeerbottles3png@2x.png"
        />
      </div>
    </div>
  );
};

export default PremiumFlavorsSectionContainer;
