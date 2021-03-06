import { z } from 'zod';

const RecordStoreSchema = z.object({
  artist: z.string(),
  title: z.string(),
  format: z.string().max(3),
  yearPublished: z.number(),
  new: z.boolean(),
});

type RecordStore = z.infer<typeof RecordStoreSchema>;

export default RecordStore;
export { RecordStoreSchema };