import dateformat from 'dateformat'

const formatDate = (date) => {
  return dateformat(new Date(date), 'fullDate')
}

export default {
  formatDate,
}
