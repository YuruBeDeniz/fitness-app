import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";


type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
     {/* IMAGE and MAIN HEADER */}
     <div>
      {/* MAIN HEADER */}
      <div>
        {/* HEADINGS */}
        <div>
          <div>
            <div>
                <img alt="home-page-text" src={HomePageText} />
            </div>
          </div>
          <p>Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
          </p>
        </div>
      </div>

      {/* IMAGE */}
      <div></div>
     </div>
    </section>
  )
}

export default Home;

//in section tag we use id instead of class to be able to use it with anchorLink:
//we want to set the id to home so we can navigate to that section of the website
//based on this id

//md:h-full -->this is media query: we are only applying the full height when it's
//above medium screens