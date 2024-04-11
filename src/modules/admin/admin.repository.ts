import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Admin } from '@prisma/client';

@Injectable()
export class AdminRepository {
  constructor(private prisma: PrismaService) {}

  async findOneByLogin(login: string): Promise<Admin | null> {
    return this.prisma.admin.findUnique({
      where: { login },
    });
  }
}
