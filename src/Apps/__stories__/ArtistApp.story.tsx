import { Box } from "@artsy/palette"
import { ArtistRecommendations_artist } from "__generated__/ArtistRecommendations_artist.graphql"
import { ArtistRecommendations } from "Apps/Artist/Routes/Overview/Components/ArtistRecommendations"
import { MockRouter } from "DevTools/MockRouter"
import React from "react"
import { storiesOf } from "storybook/storiesOf"
import { routes as artistRoutes } from "../Artist/routes"

storiesOf("Apps/Artist Page", module)
  .add("Artist Page", () => {
    return (
      <MockRouter
        routes={artistRoutes}
        initialRoute="/artist/pablo-picasso"
        context={{
          mediator: {
            trigger: x => x,
          },
        }}
      />
    )
  })
  .add("Artist Recommendations", () => {
    return (
      <Box m={3}>
        <ArtistRecommendations artist={artistWithRecommendations} />
      </Box>
    )
  })

const artistWithRecommendations: ArtistRecommendations_artist = {
  " $refType": null,
  name: "Pablo Picasso",
}
