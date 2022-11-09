import React from 'react'
import {Link} from 'react-router-dom'
import MainHeader from './MainHeader'
import Navlinks from './Navlinks'

const MainNavigation = props => {
    return (
        <MainHeader>
            {/* <button>

            </button>
          <Link to="/"> <h1> yourplaces</h1></Link>  */}
          <Navlinks/>



        </MainHeader>
    )
}

export default MainNavigation
