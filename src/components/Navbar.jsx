import {useNavigate, useLocation} from 'react-router-dom'
import {ReactComponent as OfferIcon} from '../assets/svg/localOfferIcon.svg'
import {ReactComponent as ExploreIcon} from '../assets/svg/exploreIcon.svg'
import {ReactComponent as PersonOutlineIcon} from '../assets/svg/personOutlineIcon.svg'

export default function Navbar() {
    const navigate = useNavigate()
    const location = useLocation()

    const pathMatchROute = (route) => {
        if(route === location.pathname) {
            return true
        }
    }

  return (
    <>
      <header className='navbar'>
        <nav className='navbarNav'>
            <ul className='navbarListItems'>
                <li className='navbarListItem' onClick={()=> navigate('/')}>
                    <ExploreIcon fill={pathMatchROute('/') ? '2c2c2c' : '#8f8f8f'} width='36px' height='36px' />
                    <p className={pathMatchROute('/') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Explore</p>
                </li>
                <li className='navbarListItem' onClick={()=> navigate('/offers')}>
                    <OfferIcon fill={pathMatchROute('/offers') ? '2c2c2c' : '#8f8f8f'} width='36px' height='36px' />
                    <p className={pathMatchROute('/offers') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Offers</p>
                </li>
                <li className='navbarListItem' onClick={()=> navigate('/profile')}>
                    <PersonOutlineIcon fill={pathMatchROute('/profile') ? '2c2c2c' : '#8f8f8f'} width='36px' height='36px' />
                    <p className={pathMatchROute('/profile') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Profile</p>
                </li>
            </ul>
        </nav>
      </header>
    </>
  )
}
