import React from 'react'

export default ({name}) => 
    ( <img className='rank-icon' src={require('../img/ranks/' + name + '.png')} alt={name} /> )