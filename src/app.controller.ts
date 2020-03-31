import { LocalizationsService } from './localizations/localizations.service';
import { UsersService } from './users/users.service';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth-guard';
import { Controller, Request, Post, UseGuards, Get, Put } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth-guard';

@Controller()
export class AppController {
  constructor(
    private readonly authService: AuthService, 
    private readonly usersService: UsersService,
    private readonly localizationsService: LocalizationsService
    ) {}

  @Post('register')
  async register(@Request() req) {
    return this.usersService.create(req.body);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
   return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Put('localization')
  updateLocalization(@Request() req) {
    console.log(req.user);
    return this.localizationsService.update(req.user._id, req.body.localization);
  }

  @UseGuards(JwtAuthGuard)
  @Get('localization')
  getLocalization(@Request() req) {
    return this.localizationsService.findOne(req.user._id)
  }

  @UseGuards(JwtAuthGuard)
  @Get('danger')
  searchForDanger(@Request() req) {
    return this.localizationsService.searchForDanger(req.user._id);
  }
}
