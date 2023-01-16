import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";
import cards from '../../../data/cards.json';

const filter = {
  color: 'green'
}

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

  getAllCards: publicProcedure
    // .input(z.object({
    //   take:z.number()
    // }))
    .query(({ ctx }) => {
      return ctx.prisma.card.findMany({
        include:{
          cardType: true
        }
      });
    }),

  // getFilteredCards: publicProcedure
  //   .input(z.object({
  //     color: z.string().default(''),
  //     cost: z.string().default(''),
  //     power: z.string().default(''),
  //     counterPwer: z.string().default(''),
  //     name: z.string().default(''),
  //     // cardType: z.string().nullable(),
  //   }))
  //   .query(({ ctx, input }) => {
  //     return ctx.prisma.card.findMany({
  //       where: input
  //     });
  //   }),
  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
}); 