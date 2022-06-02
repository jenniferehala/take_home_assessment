import React from 'react'
import '../components/components.css'

const Header = (props) => {


    return (
        <div >
            <div className={props.header ? 'header2' : 'header1'}>
                <p>Header</p>
            </div>

        </div>
    )
}

export default Header