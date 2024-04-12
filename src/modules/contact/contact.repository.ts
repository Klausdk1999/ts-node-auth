import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Contact } from '@prisma/client';
import { CreateContactDto, UpdateContactDto } from './dtos/contact.dto';

@Injectable()
export class ContactRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateContactDto): Promise<Contact> {
    return this.prisma.contact.create({ data });
  }

  async findAll(): Promise<Contact[]> {
    return this.prisma.contact.findMany();
  }

  async findOne(id: string): Promise<Contact | null> {
    return this.prisma.contact.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateContactDto): Promise<Contact> {
    return this.prisma.contact.update({
      where: { id },
      data,
    });
  }

  async remove(id: string): Promise<Contact> {
    return this.prisma.contact.delete({ where: { id } });
  }
}
