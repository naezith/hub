import React from 'react'

import { Leaderboard } from '../Leaderboard'

import { getChapterName } from '../../../utility/ron-hub'

export const Level = ({ level, lb_size, start_rank, lines, changePage, loading }) => {
    var chapter_name = level ? getChapterName(level.chapter) : undefined
    return (
        <div>
            {level ? 
            <div>
                <h3 className={chapter_name}>{chapter_name}</h3>
                <h4>{level.is_secret ? '(Secret)': undefined}</h4>
                <h2>Players: {lb_size}</h2>
            </div> : undefined}

            <Leaderboard    start_rank={start_rank} 
                            lines={lines} 
                            loading={loading} 
                            changePage={changePage} />
        </div>
    )}