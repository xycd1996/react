// YYYY-MM-DD HH-MM-SS 转化为 YYYY-MM-DD
export function YTD(date) {
  return /\d{4}-\d{1,2}-\d{1,2}/g.exec(date)
}

// 标准时间转化为YYYY-MM-DD 00:00:00
export function parseTime(str) {
  if ((str + '').indexOf('-') !== -1) {
    str = str.replace(new RegExp(/-/gm), '/')
  }
  let d = new Date(str)
  let newDateYear = d.getFullYear()
  let newDateMonth = (d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1)
  let newDateDay = d.getDate() + '' < 10 ? '0' + d.getDate() + '' : d.getDate() + ''
  // let newDateHour = d.getHours(0)
  // let newDateMinute = d.getMinutes(0)
  // let newDateSecond = d.getSeconds(0)
  return `${newDateYear}-${newDateMonth}-${newDateDay} 00:00:00`
}