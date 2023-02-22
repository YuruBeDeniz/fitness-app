import { SelectedPage } from "@/shared/types"
import AnchorLink from "react-anchor-link-smooth-scroll"


type LinkProps = {
    page: string
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void
}

const Link = ({ page, selectedPage, setSelectedPage}: LinkProps) => {
  const lowerCasePage = page.toLocaleLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
        className={`#${selectedPage === lowerCasePage ? "text-primary-500" : ""}
        transition duration-500 hover:text-primary-300`}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
    >
        {page}
    </AnchorLink>
  )
};

export default Link;


//in AnchorLink we need to identify the id otherwise onClick wont work
//page.toLocaleLowerCase().replace(/ /g, "") as SelectedPage --> here TS forces 
//this code and treat it as SelectedPage enum value instead