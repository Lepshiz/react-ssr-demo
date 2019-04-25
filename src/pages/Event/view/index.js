import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import dateUtils from '../../../utils/dateUtils'

import classes from './styles.module.scss'

const Media = (props) => {
  const { type, source, hdSource, title } = props
  if (type === 'image') {
    const image = <img className={classes.image} src={source} alt={title} />
    if (hdSource) {
      return (
        <a className={classes.source} href={hdSource} target="_blank" rel="noopener noreferrer">
          {image}
        </a>
      )
    }
    return image
  }
  if (type === 'video') {
    return <iframe className={classes.video} title={title} src={source} />
  }
  return null
}

const Event = (props) => {
  const { copyright, date, explanation, hdurl, media_type, title, url } = props
  return (
    <article className={classes.article}>
      <div className={classes.main}>
        <small className={classes.date}>{dateUtils.formatDate(date)}</small>
        <h1 className={classes.title}>{title}</h1>
        <p className={classes.about}>{explanation}</p>
        {copyright && <div className={classes.author}>Author: {copyright}</div>}
        <Link to="/" className={classes.back}>
          &larr;
        </Link>
      </div>
      <div className={classes.media}>
        <Media type={media_type} source={url} hdSource={hdurl} title={title} />
      </div>
    </article>
  )
}

export default memo(Event)
