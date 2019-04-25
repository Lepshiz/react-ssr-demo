import React, { memo } from 'react'

import classes from './styles.module.scss'

const Loader = () => {
  return (
    <div className={classes.loader}>
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        className={classes.svg}
      >
        <g transform="translate(50,50)">
          <g transform="scale(0.7)">
            <circle cx="0" cy="0" r="50" fill="darkorange" />
            <circle cx="0" cy="-28" r="15" fill="#000000" />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default memo(Loader)
