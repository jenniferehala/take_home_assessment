import React from 'react'

const Footer = (props) => {
    return (
        <div className={props.footer ? 'footer2' : 'footer1'}>
            <p>Footer</p>
        </div>
    )
}

export default Footer