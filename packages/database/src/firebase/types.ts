import { z } from 'zod';

export const User = z.object({
  email: z.string(),
  uid: z.string(),
});
export type User = z.infer<typeof User>;

export const Note = z.object({
  content: z.string(),
  createdAt: z.string(),
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  updatedAt: z.string(),
  userId: z.string(),
});

export type Note = z.infer<typeof Note>;

export const CreateNoteParams = z.object({
  content: z.string(),
  createdAt: z.string(),
  slug: z.string(),
  title: z.string(),
  updatedAt: z.string(),
  userId: z.string(),
});

export type CreateNoteParams = z.infer<typeof CreateNoteParams>;

export const UpdateNoteParams = z.object({
  content: z.string().optional(),
  slug: z.string().optional(),
  title: z.string().optional(),
  updatedAt: z.string(),
});
export type UpdateNoteParams = z.infer<typeof UpdateNoteParams>;
