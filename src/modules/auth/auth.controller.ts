import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { login: string; password: string }) {
    const admin = await this.authService.validateAdmin(
      body.login,
      body.password,
    );
    if (!admin) {
      return 'Credentials are not valid';
    }
    return this.authService.login(admin);
  }
}
