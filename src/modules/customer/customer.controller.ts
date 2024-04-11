import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer, Prisma } from '@prisma/client';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  create(
    @Body() createCustomerDto: Prisma.CustomerCreateInput,
  ): Promise<Customer> {
    return this.customerService.create(createCustomerDto);
  }

  @Get()
  findAll(): Promise<Customer[]> {
    return this.customerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Customer> {
    return this.customerService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomerDto: Prisma.CustomerUpdateInput,
  ): Promise<Customer> {
    return this.customerService.update(id, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Customer> {
    return this.customerService.remove(id);
  }
}
