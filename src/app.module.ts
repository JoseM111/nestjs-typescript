import { Module } from '@nestjs/common'
import { TasksModule } from "tasks/tasks.module"
import { TypeOrmModule } from "@nestjs/typeorm"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

@Module({
  imports: [
      TasksModule,
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
