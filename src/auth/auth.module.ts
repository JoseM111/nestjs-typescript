import { Module } from '@nestjs/common'
import { AuthService } from "auth/services/auth.service"
import { AuthController } from "auth/controllers/auth.controller"
import { TypeOrmModule } from "@nestjs/typeorm"
import { UsersRepository } from "auth/repositories/users.repository"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

@Module({
  imports: [
      TypeOrmModule.forFeature([UsersRepository]),
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
/// - END OF: @Module

export class AuthModule {}
