import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Resend } from 'resend';

@Injectable()
export class AppService {
  private resend: Resend;

  constructor(private configService: ConfigService) {
    this.resend = new Resend(this.configService.get<string>('resend_key'));
  }

  getHello(): string {
    return 'Hello World!';
  }

  async sendReminderEmail(): Promise<any> {
    try {
      const result = await this.resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'mcahya830@gmail.com',
        subject: 'Pengingat Absen',
        html: '<p>Jangan lupa absen yahsd</p>',
      });
      return result;
    } catch (error) {
      throw new Error(`Failed to send email: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
}