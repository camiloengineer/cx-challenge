import React, {FC, useEffect} from "react";

import BackgroundSection from "presentation/components/BackgroundSection/BackgroundSection";
import SectionHero from "presentation/components/SectionHero/SectionHero";
import DiscoverMoreSlider from "presentation/components/DiscoverMoreSlider";
import SectionGridMoreExplore from "presentation/components/SectionGridMoreExplore/SectionGridMoreExplore";
import SectionPromo from "presentation/components/SectionPromo";
import SectionSliderCategories from "presentation/components/SectionSliderCategories/SectionSliderCategories";
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
