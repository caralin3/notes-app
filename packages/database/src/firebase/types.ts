import { z } from 'zod';

export const User = z.object({
  email: z.string(),
  uid: z.string(),
});
export type User = z.infer<typeof User>;

export const Note = z.object({
  content: z.string(),
  createdAt: z.string(),
  folderId: z.string().nullable(),
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  updatedAt: z.string().optional(),
  userId: z.string(),
});
export type Note = z.infer<typeof Note>;

export const CreateNoteParams = z.object({
  content: z.string(),
  createdAt: z.string(),
  folderId: z.string().nullable(),
  slug: z.string(),
  title: z.string(),
  updatedAt: z.string().optional(),
  userId: z.string(),
});
export type CreateNoteParams = z.infer<typeof CreateNoteParams>;

export const UpdateNoteParams = z.object({
  content: z.string().optional(),
  folderId: z.string().nullable().optional(),
  id: z.string().optional(),
  slug: z.string().optional(),
  title: z.string().optional(),
  updatedAt: z.string(),
});
export type UpdateNoteParams = z.infer<typeof UpdateNoteParams>;

export const Folder = z.object({
  createdAt: z.string(),
  id: z.string(),
  name: z.string(),
  updatedAt: z.string().optional(),
  userId: z.string(),
});
export type Folder = z.infer<typeof Folder>;

export const CreateFolderParams = z.object({
  createdAt: z.string(),
  name: z.string(),
  userId: z.string(),
});
export type CreateFolderParams = z.infer<typeof CreateFolderParams>;

export const UpdateFolderParams = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  updatedAt: z.string(),
});
export type UpdateFolderParams = z.infer<typeof UpdateFolderParams>;
