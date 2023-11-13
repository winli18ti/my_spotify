import { dateDetail, dateTimeFormat, msToTime, msToTimeDetail, songs } from './Format'

//msToTime
it('converts 30,000ms to 0:30', () => {
  const expected = '0:30'
  const actual = msToTime(30000)
  expect(actual).toBe(expected)
})

it('converts 181,000ms to 3:01', () => {
  const expected = '3:01'
  const actual = msToTime(181000)
  expect(actual).toBe(expected)
})

//msToTimeDetail
it('converts 30,000ms to 0 min 30 sec', () => {
  const expected = '0 min 30 sec'
  const actual = msToTimeDetail(30000)
  expect(actual).toBe(expected)
})

it('converts 181,000ms to 3 min 1 sec', () => {
  const expected = '3 min 1 sec'
  const actual = msToTimeDetail(181000)
  expect(actual).toBe(expected)
})

it('converts 3,606,000ms to 1 hr', () => {
  const expected = '1 hr'
  const actual = msToTimeDetail(3606000)
  expect(actual).toBe(expected)
})

it('converts 3,666,000ms to 1 hr 1 min', () => {
  const expected = '1 hr 1 min'
  const actual = msToTimeDetail(3666000)
  expect(actual).toBe(expected)
})

//songs
it('converts 1 to 1 song', () => {
  const expected = '1 song'
  const actual = songs(1)
  expect(actual).toBe(expected)
})

it('converts 5 to 5 songs', () => {
  const expected = '5 songs'
  const actual = songs(5)
  expect(actual).toBe(expected)
})

it('converts 2021-11-6 to November 6, 2021', () => {
  const expected = 'November 6, 2021'
  const actual = dateDetail('2021-11-6')
  expect(actual).toBe(expected)
})

//2023-08-25T06:30:33Z
it('converts 2023-08-25T06:30:33Z to 13:30, 25 Aug 2023', () => {
  const expected = '13:30, 25 Aug 2023'
  const input = new Date(Date.parse('2023-08-25T06:30:33Z'))
  const actual = dateTimeFormat(input)
  expect(actual).toBe(expected)
})