import { EmailTemplate } from "@/app/components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const requestData = await req.json();

  const requestSchema = z.object({
    email: z.string().min(1),
    subject: z.string().min(1),
    message: z.string().min(1),
  });

  const validate = requestSchema.safeParse(requestData);

  if (!validate.success) {
    return NextResponse.json({
      error: validate.error,
    });
  }

  const data = await resend.emails.send({
    from: `Resend Email <onboarding@resend.dev>`,
    to: process.env.RESEND_EMAIL || "",
    subject: validate.data.subject,
    react: EmailTemplate({
      message: validate.data.message,
      email: validate.data.email,
    }),
  });

  return NextResponse.json(data);
}
