import { Controller, Get } from '@nestjs/common'
import { TasksService } from "tasks/tasks.service"
import { ITask } from "tasks/models/tasks.model"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

@Controller('tasks')
export class TasksController {
	/// ======== <> Constructor <> ========
	constructor(private tasksService: TasksService) {
	}
	
	/** @RouteHandler | */
	@Get() getAllTasks(): Array<ITask> {
		return this.tasksService.getAllTasks()
	}
}
