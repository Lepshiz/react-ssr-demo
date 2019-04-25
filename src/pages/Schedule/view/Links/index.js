import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import dateUtils from '../../../../utils/dateUtils'

import classes from './styles.module.scss'

const Links = (props) => {
  const { schedule } = props
  return (
    <nav className={classes.nav}>
      {schedule.map((date) => {
        return (
          <div key={date} className={classes.event}>
            <Link className={classes.link} to={date}>
              {dateUtils.formatDate(date)}
            </Link>
          </div>
        )
      })}
    </nav>
  )
}

export default memo(Links)
