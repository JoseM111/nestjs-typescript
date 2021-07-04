import { Module } from '@nestjs/common'
import { TasksModule } from "tasks/tasks.module"
import { TypeOrmModule } from "@nestjs/typeorm"
import { AuthModule } from "auth/auth.module"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

@Module({
  imports: [
      TasksModule,
      AuthModule,
      TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'alias111',
          password: 'alias111',
          database: 'task-management',
          autoLoadEntities: true,
          synchronize: true,
      }),
  ],
  controllers: [],
})
/// - END OF: @Module

export class AppModule {}
