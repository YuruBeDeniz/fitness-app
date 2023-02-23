import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from './types';

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className='rounded-md bg-secondary-500 px-10 hover:bg-primary-500 hover:text-white'
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
        {children}
    </AnchorLink>
  )
}
export default ActionButton;

//in Navbar, for ex, we're passing "become a member" inside ActionButton.
//So we're passing it into the children of this component. To do that, we'll pass
//it in the prop section as "children". <AnchorLink>{children}</AnchorLink>:
//this will represent what should be inside our ActionButton