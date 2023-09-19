import { navbarItemsHelper } from '../../utils/helper'
import NavItems from './subcomps/NavItems'

const Navbar = () => {
  return (
    <div className='h-[50px] w-full bg-[#252F3D] flex justify-evenly items-center'>
      {
        navbarItemsHelper && navbarItemsHelper?.map((el, i) => <NavItems data={el} key={i} /> )
      }
    </div>
  )
}

export default Navbar