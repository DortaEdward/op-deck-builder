import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const deckRouter = createTRPCRouter({
  createDeck: publicProcedure
    .input(z.object({
      name: z.string(),
      deck: z.array(
        z.object({
          name: z.string(),
          cardIndex: z.string(),
          setId: z.string(),
          setNumber: z.string(),
          color: z.string(),
          cost: z.string(),
          traits: z.string(),
          power: z.string().nullable(),
          counterPower: z.string().nullable(),
          life: z.string().nullable(),
          artist: z.string().nullable(),
          effect: z.string().nullable(),
          image: z.string(),
          cardTypeId: z.string(),
          rarityId: z.string(),
        })),
      userId:z.string(),
      leaderImage:z.string(),
      description:z.string()
    }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.deck.create({ data: input });
    }),

  getAllDecks: publicProcedure
    .query(({ ctx }) => {
      // const decks = ctx.prisma.deck.findMany();
      return ctx.prisma.deck.findMany({
        include:{
          author: true
        }
      });
    }),

    getDeck: publicProcedure.input(
      z.string()
    ).query(({ctx, input}) => {
      return ctx.prisma.deck.findUnique({
        where:{
          id: input
        }
      })
    }),

    getUsersDecks: publicProcedure.input(
      z.string()
    ).query(({ctx, input}) => {
      return ctx.prisma.deck.findMany({
        where:{
          userId: input
        }
      })
    })
}); 