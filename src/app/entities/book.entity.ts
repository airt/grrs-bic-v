export interface Book {
  // id?: number
  bookName: string
  authors: string[]
  isbns: string[]
  coverUrl: string
  summary: string
  topics: string[]
  series: string[]
  isFiction: boolean
  arBl: number
  arIl: string
  arPoints: number
  arRating: number
  lexilePrefix: string
  lexile: number
  wordcount: number
  pagecount: number
  amazonRating: number
}
