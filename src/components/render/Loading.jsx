import React from 'react'

export const Loading = (count=5) =>
    <div className="spinner">{[...Array(5).keys()].map((i) => <div key={i} className={'rect' + i}></div>)}</div>