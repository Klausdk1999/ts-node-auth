// src/contact/contact.module.ts
import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { ContactRepository } from './contact.repository';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [ContactController],
  providers: [ContactService, ContactRepository, PrismaService],
})
export class ContactModule {}
