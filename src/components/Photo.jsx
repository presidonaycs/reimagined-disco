import React from 'react'

const Photo =(props)=>{

    return (
        <section>
            <img src={props.path} alt="Memo Docs" width='100%' height='100%'/>
        </section>
    )
}

export default Photo