import React from 'react'

import { Leaderboard } from '../Leaderboard'

import { ChapterIcon } from '../ChapterIcon';
import { getChapterName } from '../../../utility/ron-hub';

export const Level = ({ level, lb_size, start_rank, lines, changePage, loading }) => 
        <div>
            { level && 
            <div>
                <h1 className={getChapterName(level.chapter)}>{ level.name }</h1>
                <ChapterIcon chapter_id={level.chapter} />
                <h4>{ level.is_secret ? '(Secret)' : undefined }</h4>
                <h2>Players: { lb_size }</h2>
            </div> }

            <Leaderboard    start_rank={start_rank} 
                            lines={lines} 
                            loading={loading} 
                            changePage={changePage} />
        </div>
