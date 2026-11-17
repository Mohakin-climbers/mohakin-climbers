import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const inquirySchema = z.object({
  full_name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(40).optional().default(""),
  country: z.string().trim().max(80).optional().default(""),
  interest: z.string().trim().min(1).max(80),
  group_size: z.string().trim().max(40).optional().default(""),
  preferred_dates: z.string().trim().max(80).optional().default(""),
  message: z.string().trim().min(1).max(4000),
});

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => inquirySchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("inquiries").insert({
      ...data,
      phone: data.phone || null,
      country: data.country || null,
      group_size: data.group_size || null,
      preferred_dates: data.preferred_dates || null,
    });
    if (error) {
      console.error(error);
      throw new Error("Could not save inquiry");
    }
    return { ok: true };
  });
