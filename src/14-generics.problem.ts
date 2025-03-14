// CODE

import { it } from "vitest";
import { z } from "zod";
import { Equal, Expect } from "./helpers/type-utils";

const genericFetch = async <T>(url: string, schema: z.ZodSchema<T>) => {
  //                 ^ 🕵️‍♂️
  const res = await fetch(url);
  const result_1 = await res.json();
  return schema.parse(result_1);
};

// TESTS

it("Should fetch from the Star Wars API", async () => {
  const result = await genericFetch(
    "https://totaltypescript.com/swapi/people/1.json",
    z.object({
      name: z.string(),
    }),
  );

  type cases = [
    // Result should equal { name: string }, not any
    Expect<Equal<typeof result, { name: string }>>,
  ];
});
