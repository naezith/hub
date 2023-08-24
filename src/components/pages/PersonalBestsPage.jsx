import React, { Component } from 'react'

import { PersonalBests } from '../render/pages/PersonalBests'
import { PageLayout } from '../render/PageLayout'

import { isRon, mutateState } from '../../utility/common'
import { fetchPersonalBests } from '../../utility/api'

export default class PersonalBestsPage extends Component {
    constructor() {
        super()
        this.state = {
            lines: [],
            customlevels: 0,
            loading: 0,
            error_msg: undefined
        }
    }

    componentWillMount = () => {
      mutateState(this, undefined, fetchPersonalBests(this.state.customlevels))
      //setTimeout( this.componentWillMount, 10000 )
    }

    render = () => {
      const switch_display = customlevels => () => this.setState({
            lines: [],
            customlevels: customlevels,
            loading: 0,
            error_msg: undefined
        }, this.componentWillMount)
      return (
        <PageLayout title='Personal Bests' error_msg={this.state.error_msg}>
            {isRon && <div>
              <button onClick={ switch_display(0) }>Official levels</button>
              <button onClick={ switch_display(1) }>Custom levels</button>
            </div>}
            <PersonalBests {...this.state}/>
        </PageLayout>
      )
    }
}
