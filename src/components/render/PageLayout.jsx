import React from 'react'

export const PageLayout = ({ children, title, error_msg }) => 
    <div>
        { title && <h1>{title}</h1> }
        { children }
        { error_msg && <p>{error_msg}</p> }
    </div>