import { ArtworkFilters } from "Components/v2/ArtworkFilter/ArtworkFilterContext"
import { isDefaultFilter } from "Components/v2/ArtworkFilter/Utils/isDefaultFilter"
import qs from "qs"

export const buildUrl = (state: ArtworkFilters): string => {
  const params = removeDefaultValues(state)
  const queryString = qs.stringify(params)
  const url = queryString
    ? `${window.location.pathname}?${queryString}`
    : window.location.pathname

  return url
}

export const updateUrl = (state: ArtworkFilters) => {
  const url = buildUrl(state)

  if (typeof window !== "undefined") {
    // FIXME: Is this the best way to guard against history updates
    // in Storybooks?
    if (!process.env.IS_STORYBOOK) {
      window.history.replaceState({}, "", url)
    }
  }
}

export const removeDefaultValues = (state: ArtworkFilters) => {
  return Object.entries(state).reduce((acc, [key, value]) => {
    if (isDefaultFilter(key, value)) {
      return acc
    } else {
      return { ...acc, [key]: value }
    }
  }, {})
}
