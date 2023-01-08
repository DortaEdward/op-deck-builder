import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  seedSets: publicProcedure
    .input(z.object({
      sets: z.object({
        name: z.string(),
        setId: z.string(),
        image: z.string().nullable(),
      }).array()
    })) 
    .mutation(({ctx,input}) => {
      console.log('inputs ====',input.sets);
      return input.sets
      // return ctx.prisma.set.createMany(input.sets)
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.set.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
}); 
