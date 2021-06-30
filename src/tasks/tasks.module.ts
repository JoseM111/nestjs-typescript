import { Module } from '@nestjs/common'
import { TasksController } from "tasks/controllers/tasks.controller"
import { TasksService } from "tasks/services/tasks.service"

@Module({
  controllers: [TasksController],
  providers: [TasksService]
})

export class TasksModule {}
