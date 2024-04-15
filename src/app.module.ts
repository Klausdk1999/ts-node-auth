import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { CustomerModule } from './modules/customer/customer.module';
import { ContactModule } from './modules/contact/contact.module';
// import { AdminModule } from './modules/admin/admin.module';

@Module({
  imports: [AuthModule, CustomerModule, ContactModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
