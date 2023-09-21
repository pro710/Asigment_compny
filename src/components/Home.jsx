import PremiumFlavorsSectionContainer from "../components/PremiumFlavorsSectionContainer";
import BrewerySectionContainer from "../components/BrewerySectionContainer";
import DiscoverOurNewFlavorsContainer from "../components/DiscoverOurNewFlavorsContainer";
import PremiumLightContainer from "../components/PremiumLightContainer";
import FeatureSection from "../components/FeatureSection";
import PartyHostingContainer from "../components/PartyHostingContainer";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <PremiumFlavorsSectionContainer />
      <BrewerySectionContainer />
      <DiscoverOurNewFlavorsContainer
        sectionTitle="Discover Our"
        productFeatures="New Flavors"
        sectionSubtitle="Curabitur arcu erat, accumsan id imperdiet et, port titor at sem. Donec"
        sectionDescription="sollici tudin molestie malesuada."
      />
      <div className="section">
        <img
          className="beer-light-1png-icon"
          alt=""
          src="/beerlight1png@2x.png"
        />
        <PremiumLightContainer />
      </div>
      <div className="section1">
        <PremiumLightContainer propTextTransform="unset" propColor="#3a3a3a" />
        <img
          className="beer-light-1png-icon"
          alt=""
          src="/beerdark1png@2x.png"
        />
      </div>
      <FeatureSection />
      <div className="section2">
        <div className="divelementor-widget-wrap">
          <div className="heading-2">
            <div className="discover-the-brewing-container">
              <span className="discover-the-brewing-container1">
                <p className="discover-the">Discover The</p>
                <p className="discover-the">Brewing Process</p>
              </span>
            </div>
          </div>
          <div className="divelementor-widget-container">
            <div className="lorem-ipsum-dolor-container">
              <span className="discover-the-brewing-container1">
                <p className="discover-the">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec
                </p>
                <p className="discover-the">
                  ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </span>
            </div>
          </div>
          <div className="link">
            <div className="div"></div>
          </div>
        </div>
      </div>
      <PartyHostingContainer />
    </div>
  );
};

export default Home;
