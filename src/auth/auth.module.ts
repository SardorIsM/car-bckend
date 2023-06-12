import { Module } from '@nestjs/common';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';
import { AuthRepository } from './repository/auth.repository';
import { KnexConfigModule } from 'src/knex-config/knex-config.module';
import { JwtModule } from '@nestjs/jwt';
// import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    // ConfigModule.forRoot(),
    KnexConfigModule,
    JwtModule.register({
      global: true,
      secret: 'secret_key',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository],
})
export class AuthModule {}
