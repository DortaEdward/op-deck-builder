import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";
import cards from '../../../data/cards.json';

export const cardRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  seedCards: publicProcedure
    .mutation(({ ctx }) => {
      return ctx.prisma.card.createMany({ data: cards });
    }),

  getAllCards: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.card.findMany({
      take:22
    });
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
}); 