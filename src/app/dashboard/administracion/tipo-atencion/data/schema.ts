import { z } from "zod";

export const tipoAtencionSchema = z.object({
  id: z.number(), 
  type: z.string(),
  priority: z.number(),
  displayName: z.string(),
  active: z.boolean().default(false),
  color:z.string(),
  colorBg: z.string(),
});

export type TipoAtencion = z.infer<typeof tipoAtencionSchema>;
