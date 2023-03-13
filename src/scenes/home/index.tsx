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
     <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
      {/* MAIN HEADER */}
      <div className="z-10 mt-32 md:basis-3/5">
        {/* HEADINGS */}
        <div className="md:-mt-20">
          <div className="relative">
            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="home-page-text" src={HomePageText} />
            </div>
          </div>
          <p className="mt-8 text-sm ">
            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
            Studios to get the Body Shapes That you Dream of.. Get Your Dream
            Body Now.
          </p>
        </div>
      </div>
      
      {/* ACTIONS */}
      <div className="mt-8 flex items-center gap-8 ">
        <ActionButton setSelectedPage={setSelectedPage}>
          Join Now
        </ActionButton>
        <AnchorLink
          className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
          onClick={() => setSelectedPage(SelectedPage.ContactUs)}
          href={`#${SelectedPage.ContactUs}`}
        >
          <p>Learn More</p>
        </AnchorLink>
      </div>

      {/* IMAGE */}
      <div className="flex basis-3/5 justify-center md:z-10">
        <img src={HomePageGraphic} alt="home-pageGraphic"/>
      </div>
     </div>

     {/* SPONSORS */}
     {isAboveMediumScreens && 
      <div>
        <div>
          <img src={SponsorRedBull} />
          <img src={SponsorForbes} />
          <img src={SponsorFortune} />
        </div>
      </div> 
     }
    </section>
  )
}

export default Home;

//in section tag we use id instead of class to be able to use it with anchorLink:
//we want to set the id to home so we can navigate to that section of the website
//based on this id

//md:h-full -->this is media query: we are only applying the full height when it's
//above medium screens


//relative position shold be the parent element: but the child of that one we are
//puttting the image will be absolutely posiitoned element--> before:absolute 
//that's how we can create an image relative to something else 