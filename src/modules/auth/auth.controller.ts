import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const admin = await this.authService.validateAdmin(
      loginDto.login,
      loginDto.password,
    );
    if (!admin) {
      return 'Credentials are not valid';
    }
    return this.authService.login(admin);
  }
}
