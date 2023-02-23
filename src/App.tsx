import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if(window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
    <div className="app bg-gray-20">
      <Navbar 
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage} 
      />
      <Home setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default App


//window.scrollY === 0 means we're at the top of the page
//const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true); we're configuring
//this to be true when we're at the top of the page and this is true by default as
//we load onto page this will be true by default
//setSelectedPage(SelectedPage.Home) : whenever we're at the top of the page, we want
//to select the page to be home 