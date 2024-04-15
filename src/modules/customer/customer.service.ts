import { Injectable } from '@nestjs/common';
import { CustomerRepository } from './customer.repository';
import { Customer } from '@prisma/client';
import {
  CreateCustomerDto,
  UpdateCustomerDto,
} from './dtos/create-customer.dto';

@Injectable()
export class CustomerService {
  constructor(private customerRepository: CustomerRepository) {}

  create(data: CreateCustomerDto): Promise<Customer> {
    return this.customerRepository.create(data);
  }

  findAll(): Promise<Customer[]> {
    return this.customerRepository.findAll();
  }

  findOne(id: string): Promise<Customer> {
    return this.customerRepository.findOne(id);
  }

  update(id: string, data: UpdateCustomerDto): Promise<Customer> {
    return this.customerRepository.update(id, data);
  }

  remove(id: string): Promise<Customer> {
    return this.customerRepository.remove(id);
  }
}
