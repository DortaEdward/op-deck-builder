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
      return ctx.prisma.deck.findMany();
    }),
}); 