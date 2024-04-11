import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CustomerRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.CustomerCreateInput) {
    return this.prisma.customer.create({ data });
  }

  async findAll() {
    return this.prisma.customer.findMany();
  }

  async findOne(id: string) {
    return this.prisma.customer.findUnique({ where: { id } });
  }

  async update(id: string, data: Prisma.CustomerUpdateInput) {
    return this.prisma.customer.update({ where: { id }, data });
  }

  async remove(id: string) {
    return this.prisma.customer.delete({ where: { id } });
  }
}
