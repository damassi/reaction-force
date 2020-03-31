import { Box } from "@artsy/palette"
import React from "react"
import { createFragmentContainer, graphql } from "react-relay"

import { Consign_artist } from "__generated__/Consign_artist.graphql"

import { ArtistConsignFAQ } from "./Components/ArtistConsignFAQ"
import { ArtistConsignHeaderFragmentContainer as ArtistConsignHeader } from "./Components/ArtistConsignHeader"
import { ArtistConsignHowtoSell } from "./Components/ArtistConsignHowToSell"
import { ArtistConsignMarketTrendsFragmentContainer as ArtistConsignMarketTrends } from "./Components/ArtistConsignMarketTrends"
import { ArtistConsignMetaFragmentContainer as ArtistConsignMeta } from "./Components/ArtistConsignMeta"
import { ArtistConsignPageViewsFragmentContainer as ArtistConsignPageViews } from "./Components/ArtistConsignPageViews"
import { ArtistConsignRecentlySoldFragmentContainer as ArtistConsignRecentlySold } from "./Components/ArtistConsignRecentlySold"
import { ArtistConsignSellArt } from "./Components/ArtistConsignSellArt"

import { track } from "Artsy"

export interface ConsignRouteProps {
  artist: Consign_artist
}

export const ConsignRoute: React.FC<ConsignRouteProps> = ({ artist }) => {
  return (
    <Box>
      <ArtistConsignMeta artist={artist} />
      <ArtistConsignHeader artist={artist} />
      <ArtistConsignRecentlySold artist={artist} />
      <ArtistConsignPageViews artist={artist} />
      <ArtistConsignMarketTrends artist={artist} />
      <ArtistConsignHowtoSell />
      <ArtistConsignFAQ />
      <ArtistConsignSellArt />
    </Box>
  )
}

const TrackedConsignRoute = track()((props: ConsignRouteProps) => {
  return <ConsignRoute {...props} />
})

export const ConsignRouteFragmentContainer = createFragmentContainer(
  TrackedConsignRoute,
  {
    artist: graphql`
      fragment Consign_artist on Artist {
        ...ArtistConsignMeta_artist
        ...ArtistConsignHeader_artist
        ...ArtistConsignRecentlySold_artist
        ...ArtistConsignPageViews_artist
        ...ArtistConsignMarketTrends_artist
      }
    `,
  }
)

// Export default for bundle splitting at route
export default ConsignRouteFragmentContainer
