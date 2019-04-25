import React, { Component } from 'react'

import NotFoundPage from '../NotFound'
import Loader from '../../components/Loader'

import fetchData from './fetchData'
import connect from './connect'
import View from './view'

class SchedulePage extends Component {
  componentDidMount() {
    const { schedule } = this.props
    if (!schedule) {
      this.props.loadSchedule()
    }
  }

  render() {
    const { schedule, isScheduleLoading } = this.props
    if (isScheduleLoading) {
      return <Loader />
    }
    if (schedule) {
      return <View schedule={schedule} />
    }
    return <NotFoundPage />
  }
}

SchedulePage.fetchData = fetchData

export default connect(SchedulePage)
