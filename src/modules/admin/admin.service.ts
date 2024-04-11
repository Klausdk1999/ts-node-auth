import { Injectable, NotFoundException } from '@nestjs/common';
import { AdminRepository } from './admin.repository';
import { Admin } from '@prisma/client';

@Injectable()
export class AdminService {
  constructor(private adminRepository: AdminRepository) {}

  async findOne(login: string): Promise<Admin | null> {
    const admin = await this.adminRepository.findOneByLogin(login);

    if (!admin) {
      throw new NotFoundException(`Admin with login '${login}' not found.`);
    }

    return admin;
  }
}
