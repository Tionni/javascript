import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'
const today = dayjs()
const fiveDaysLater = today.add("5", "days")
const amonthLater = today.add("1", "months")
const aMonthBefore = today.subtract("1", "months")

const datestring = fiveDaysLater.format('MMMM D')
const datestring2 = amonthLater.format('MMMM D')
const datestring3 = aMonthBefore.format('MMMM D')
console.log(datestring)
console.log(datestring2)
console.log(datestring3)