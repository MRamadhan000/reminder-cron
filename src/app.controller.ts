import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('send-reminder')
  @Post('send-reminder')
  async sendReminder(): Promise<any> {
    return await this.appService.sendReminderEmail();
  }
}
