export function normalizationTime(time) {
  let newTime = `${time.slice(0, 10)} ${time.slice(11, 19)}`
  return newTime
}
