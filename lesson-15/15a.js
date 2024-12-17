import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'
const today = dayjs()
const fiveDaysLater = today.add("5", "days")
console.log(fiveDaysLater)
const datestring = fiveDaysLater.format('MMMM D')
console.log(datestring)