import React from 'react'

import Logo from './Logo'
import NamePicture from './NamePicture'
import Nav__LinksUnrestricted from './Nav__LinksUnrestricted'

function Nav_tab(prop){
    return(
      <div className = "nav__container">
        <Logo/>
        <Nav__LinksUnrestricted color = {prop.color}/>
        {/* <NamePicture image = "./images/lekki.png" name = "NIcodemus" arrow = "./images/arrow-point-to-right-4.svg"/> */}
      </div>

     
    )
  }
  export default Nav_tab