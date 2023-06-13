import Logo from './Logo';
import Wrapper from '../assets/wrappers/BigSidebar'
import NavLinks from './NavLinks';
import { useSelector } from 'react-redux';

const BigSidebar = () => {
  const {isSidebarOpen} = useSelector((store) =>store.user);
  return (
    <Wrapper>
        <div
          className={
            isSidebarOpen 
            ? 'sidebar-container'
            : 'sidebar-container show-sidebar'
          }
        >
          <div className="content">
            <header>
              <h3>Edificando</h3>
            </header>
            <NavLinks />
          </div>
        </div>
    </Wrapper>
  )
}

export default BigSidebar