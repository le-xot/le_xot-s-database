import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import env from '../../utils/enviroments';

const RegisteredJwtModule = JwtModule.register({
  secret: env.jwtSecret,
  signOptions: { expiresIn: '6h' },
});

@Module({
  imports: [RegisteredJwtModule],
  providers: [JwtService],
  exports: [RegisteredJwtModule],
})
export class CustomJwtModule {}
