// CODE

import { TypeOf, z } from 'zod'

const StarWarsPerson = z.object({
  name: z.string(),
})

const StarWarsPeopleResults = z.object({
  results: z.array(StarWarsPerson),
})

const logStarWarsPeopleResults = (
  data: TypeOf<typeof StarWarsPeopleResults>
) => {
  data.results.map(person => {
    console.log(person.name)
  })
}
