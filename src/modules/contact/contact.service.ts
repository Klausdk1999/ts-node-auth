import { Injectable } from '@nestjs/common';
import { ContactRepository } from './contact.repository';
import { Contact } from '@prisma/client';
import { CreateContactDto, UpdateContactDto } from './dtos/contact.dto';

@Injectable()
export class ContactService {
  constructor(private contactRepository: ContactRepository) {}

  create(data: CreateContactDto): Promise<Contact> {
    return this.contactRepository.create(data);
  }

  findAll(): Promise<Contact[]> {
    return this.contactRepository.findAll();
  }

  findOne(id: string): Promise<Contact | null> {
    return this.contactRepository.findOne(id);
  }

  update(id: string, data: UpdateContactDto): Promise<Contact> {
    return this.contactRepository.update(id, data);
  }

  remove(id: string): Promise<Contact> {
    return this.contactRepository.remove(id);
  }
}
