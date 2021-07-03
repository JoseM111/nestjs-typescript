/** @tasks.module.ts | */
import { Module } from '@nestjs/common'
import { TasksController } from "tasks/controllers/tasks.controller"
import { TasksService } from "tasks/services/tasks.service"
import { TypeOrmModule } from "@nestjs/typeorm"
import { TasksRepository } from "tasks/repositories/tasks.repository"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

@Module({
	imports: [
		TypeOrmModule.forFeature([ TasksRepository ])
	],
	controllers: [ TasksController ],
	providers: [ TasksService ]
})
/// - END OF: @Module

export class TasksModule {
}
