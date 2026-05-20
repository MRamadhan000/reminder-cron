import { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

export default async (req: VercelRequest, res: VercelResponse) => {
  try {
    const resend = new Resend(process.env.resend_key);
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'oke23@gmail.com',
      subject: 'Pengingat Absen',
      html: '<p>Jangan lupa absen yah</p>',
    });
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : String(error),
    });
  }
};
