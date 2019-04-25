import React, { Component } from 'react'

import NotFoundPage from '../NotFound'
import Loader from '../../components/Loader'

import fetchData from './fetchData'
import connect from './connect'
import View from './view'

class EventPage extends Component {
  componentDidMount() {
    const { match, event } = this.props
    if (!event || event.date !== match.params.date) {
      this.props.loadEvent(match.params.date)
    }
  }

  render() {
    const { isEventLoading, event } = this.props
    if (isEventLoading) {
      return <Loader />
    }
    if (!event) {
      return <NotFoundPage />
    }
    return <View {...event} />
  }
}

EventPage.fetchData = fetchData

export default connect(EventPage)
