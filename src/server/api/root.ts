import { createTRPCRouter } from "./trpc";
import { cardRouter } from "./routers/card";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  card: cardRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
