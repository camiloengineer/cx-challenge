import React from "react";

import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionHero from "components/SectionHero/SectionHero";
import DiscoverMoreSlider from "components/DiscoverMoreSlider";
import SectionGridMoreExplore from "components/SectionGridMoreExplore/SectionGridMoreExplore";
import SectionPromo from "components/SectionPromo";
import SectionSliderCategories from "components/SectionSliderCategories/SectionSliderCategories";

function PageHome() {
  return (
    <div className="nc-PageHome relative overflow-hidden">
      {/* SECTION HERO */}
      <SectionHero />

      <div className="mt-24 lg:mt-32">
        <DiscoverMoreSlider />
      </div>

      <div className="container relative space-y-24 my-24 lg:space-y-32 lg:my-32">
        {/* SECTION */}
        <div className="relative py-24 lg:py-32">
          <BackgroundSection />
          <SectionGridMoreExplore />
        </div>

        {/*  */}
        <SectionPromo />

        {/* SECTION */}

        {/*  */}
        <SectionSliderCategories />
      </div>
    </div>
  );
}

export default PageHome;
