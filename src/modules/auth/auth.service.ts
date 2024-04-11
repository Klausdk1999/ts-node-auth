import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AdminService } from '../admin/admin.service';

@Injectable()
export class AuthService {
  constructor(
    private adminsService: AdminService,
    private jwtService: JwtService,
  ) {}
  async validateAdmin(login: string, pass: string): Promise<any> {
    const admin = await this.adminsService.findOne(login);

    if (admin && (await bcrypt.compare(pass, admin.password))) {
      return {
        id: admin.id,
        login: admin.login,
      };
    }

    return null;
  }

  async login(admin: any) {
    const payload = { login: admin.login, sub: admin.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
