import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import Helmet from 'react-helmet'

import * as metadata from './metadata'

import Loader from '../components/Loader'

const LoadableSchedule = Loadable({
  loader: () => import(/* webpackChunkName: 'schedule' */ '../pages/Schedule'),
  loading: Loader,
})

const LoadableEvent = Loadable({
  loader: () => import(/* webpackChunkName: 'event' */ '../pages/Event'),
  loading: Loader,
})

const App = () => (
  <Fragment>
    <Helmet
      title={metadata.title}
      meta={metadata.meta}
      link={metadata.link}
      script={metadata.script}
      noscript={metadata.noscript}
    />
    <Switch>
      <Route exact path="/" component={LoadableSchedule} />
      <Route path="/:date" component={LoadableEvent} />
    </Switch>
  </Fragment>
)

export default App
