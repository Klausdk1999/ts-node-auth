import { Injectable } from '@nestjs/common';
import { CustomerRepository } from './customer.repository';
import { Customer, Prisma } from '@prisma/client';

@Injectable()
export class CustomerService {
  constructor(private customerRepository: CustomerRepository) {}

  create(data: Prisma.CustomerCreateInput): Promise<Customer> {
    return this.customerRepository.create(data);
  }

  findAll(): Promise<Customer[]> {
    return this.customerRepository.findAll();
  }

  findOne(id: string): Promise<Customer> {
    return this.customerRepository.findOne(id);
  }

  update(id: string, data: Prisma.CustomerUpdateInput): Promise<Customer> {
    return this.customerRepository.update(id, data);
  }

  remove(id: string): Promise<Customer> {
    return this.customerRepository.remove(id);
  }
}
