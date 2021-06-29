import { Controller, Get } from '@nestjs/common'
import { TasksService } from "tasks/tasks.service"

@Controller('tasks')
export class TasksController {
	/// ======== <> Constructor <> ========
	constructor(private tasksService: TasksService) {}
	
	/** @RouteHandler | */
	@Get()
	getAllTasks() {
		this.tasksService.getAllTasks()
	}
}
