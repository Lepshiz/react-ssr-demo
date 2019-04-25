import React from 'react'

import classes from './styles.module.scss'

import Links from './Links'

const SchedulePage = (props) => {
  const { schedule } = props
  return (
    <div className={classes.schedule}>
      <small className={classes.note}>Most popular websites at NASA</small>
      <h1 className={classes.head}>Astronomy Picture of the Day</h1>
      <Links schedule={schedule} />
    </div>
  )
}

export default SchedulePage
