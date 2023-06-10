import React, {FC, useEffect} from "react";

import BackgroundSection from "presentation/sections/BackgroundSection/BackgroundSection";
import SectionHero from "presentation/sections/SectionHero/SectionHero";
import DiscoverMoreSlider from "presentation/sections/DiscoverMoreSlider";
import SectionGridMoreExplore from "presentation/sections/SectionGridMoreExplore/SectionGridMoreExplore";
import SectionPromo from "presentation/sections/SectionPromo";
import SectionSliderCategories from "presentation/sections/SectionSliderCategories/SectionSliderCategories";
import { authManager } from "infrastructure/utils/auth.utils";

export interface PageHomeProps {
  onAuthToggle: () => Promise<boolean>;
}

const PageHome: FC<PageHomeProps> = ({ onAuthToggle }) => {

  useEffect(() => {

    const automaticLogin = async () => {
      const { getAuthToken } = authManager();
      const authToken = await getAuthToken()
      if (!authToken){
        await onAuthToggle();
      }
    }

    const timer = setTimeout( async () => {
        await automaticLogin();
    });

    return () => {
      clearTimeout(timer);
    };
  // eslint-disable-next-line
  }, [])

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
