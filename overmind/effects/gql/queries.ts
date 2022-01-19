import { gql, Query } from "overmind-graphql";

export const getStarshipsQuery: Query<null> = gql(`
{
  allStarships {
    starships {
      name
      model
      crew
      starshipClass
      manufacturers
      costInCredits
      length
      passengers
      maxAtmospheringSpeed
      hyperdriveRating
      MGLT
      cargoCapacity
      consumables
      pilotConnection {
        pilots {
          name
         	birthYear
          eyeColor
          gender
          hairColor
          height
         	mass
          skinColor
         	homeworld {
            name
          }
          species {
            name
            language
          }
          
        }
      }
      filmConnection {
        films {
          title
          director
        }
      }
    }
  }
}
`);
