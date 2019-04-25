module.exports = (dateObj) => {
  const date = dateObj.getUTCDate().toString().padStart(2, '0')
  const month = (dateObj.getUTCMonth() + 1).toString().padStart(2, '0')
  const year = dateObj.getUTCFullYear().toString()
  return `${year}-${month}-${date}`
}
