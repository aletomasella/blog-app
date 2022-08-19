import * as trpcNext from "@trpc/server/adapters/next/";
import { createContext } from "../../../server/createContext";
import { appRouter } from "../../../server/route/app.router";
const serverError = "INTERNAL_SERVER_ERROR";
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
  onError({ error }) {
    if (error.code === serverError) {
      console.error("SOMETHING WENT WRONG", error);
    } else {
      console.error(error);
    }
  },
});
