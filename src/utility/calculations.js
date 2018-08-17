import { max_scores } from '../data/naezith'

export const calcScore = (rank, player_count, type='level') => 
    max_scores[type]*
    (0.25 + 0.75*(1.0 - Math.pow((Math.log(rank) / Math.log(player_count)), 2)))

export const calcDominance = (score, type='level') => 100*score/max_scores[type]