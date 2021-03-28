import React from 'react'
import {Button} from 'antd'

function Header_Text(prop){

    return(
        <div className = "header__text">
    <h4 style={{color:"white"}}>{prop.headerText}</h4>
    <p>{prop.p}</p>
    <Button style={{backgroundColor:"#ff4500", borderColor:"#ff4500", color:"white"}}>Explore</Button>

        </div>
    )
}
export default Header_Text