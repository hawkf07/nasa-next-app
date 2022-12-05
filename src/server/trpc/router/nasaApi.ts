import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import axios from "axios";
import type { Collection, NasaApi } from "../../../types";
export const nasaApi = router({
  getAll: publicProcedure
    .input(z.object({ q: z.string() }))
    .query(async ({ input: { q } }) => {
      if (q.length == 0) return;
      try {
        const data = await axios.get(
          "https://images-api.nasa.gov/search?q=" + q
        );
        return data.data as NasaApi.RootObject;
      } catch (error) {
        console.log(error);
      }
    }),
  getById: publicProcedure
    .input(
      z.object({ id: z.string().optional(), q: z.string(), index: z.number() })
    )
    .query(async ({ input }) => {
      try {
        if (input.index === null) {
          return;
        }
        const response = await axios.get<NasaApi.RootObject>(
          "https://images-api.nasa.gov/search?q=" + input.q
        );
        const data = response.data.collection.items.map((data) => data.data);
        const links = response.data.collection.items.map((data) => data.links);
        const dataByIndex = data.at(input.index);
        const image = links.at(input.index).at(0)?.href;
        return { data: dataByIndex?.at(0), image };
      } catch (error) {
        console.log(error);
        return null;
      }
    }),
});
