import { router } from "../trpc";
import { exampleRouter } from "./example";
import { nasaApi } from "./nasaApi";

export const appRouter = router({
  example: exampleRouter,
  nasaApi: nasaApi,
});

// export type definition of API
export type AppRouter = typeof appRouter;
