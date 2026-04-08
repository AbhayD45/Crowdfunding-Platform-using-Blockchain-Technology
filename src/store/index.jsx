import moment from 'moment'
import { createGlobalState } from 'react-hooks-global-state'

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
  createModal: 'scale-0',
  updateModal: 'scale-0',
  deleteModal: 'scale-0',
  backModal: 'scale-0',
  connectedAccount: '',
  projects: [],
  project: null,
  stats: null,
  backers: [],
})

const fallbackProjectImage =
  'https://media.wired.com/photos/5926e64caf95806129f50fde/master/pass/AnkiHP.jpg'

const knownProjectImageSources = {
  'https://medium.com/coinmonks/ai-and-nfts-08f6177b1275':
    'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*FncOcHBOCCCuKafFkiduZQ.png',
  'https://www.amkette.com/blogs/home-page/how-cloud-gaming-is-changing-the-game-for-gamers':
    'https://www.amkette.com/cdn/shop/articles/an-illustration-of-a-cloud-with-gaming-controllers-y10RGfaRQoCl8ecsbQ0JdA-sciVRaveT0yJz6ueKU1Ptg.jpg?v=1728557178&width=1100',
}

const truncate = (text, startChars, endChars, maxLength) => {
  if (text.length > maxLength) {
    let start = text.substring(0, startChars)
    let end = text.substring(text.length - endChars, text.length)
    while (start.length + end.length < maxLength) {
      start = start + '.'
    }
    return start + end
  }
  return text
}

const daysRemaining = (days) => {
  const todaysdate = moment()
  days = Number((days + '000').slice(0))
  days = moment(days).format('YYYY-MM-DD')
  days = moment(days)
  days = days.diff(todaysdate, 'days')
  return days == 1 ? '1 day' : days + ' days'
}

const isProjectExpired = (expiresAt) => {
  if (!expiresAt) return false
  return new Date().getTime() > Number(`${expiresAt}000`)
}

const normalizeProjectImageURL = (imageURL) => {
  const trimmedURL = imageURL?.trim() || ''

  if (!trimmedURL) return fallbackProjectImage

  const normalizedKnownSource = trimmedURL.replace(/\/$/, '')

  if (knownProjectImageSources[normalizedKnownSource]) {
    return knownProjectImageSources[normalizedKnownSource]
  }

  if (trimmedURL.startsWith('ipfs://')) {
    const assetPath = trimmedURL
      .replace('ipfs://', '')
      .replace(/^ipfs\//, '')

    return `https://ipfs.io/ipfs/${assetPath}`
  }

  return trimmedURL
}

export {
  useGlobalState,
  setGlobalState,
  getGlobalState,
  truncate,
  daysRemaining,
  isProjectExpired,
  normalizeProjectImageURL,
  fallbackProjectImage,
}
