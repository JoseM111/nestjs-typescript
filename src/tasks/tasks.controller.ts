import { Body, Controller, Get, Post } from '@nestjs/common'
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
	
	/** @PostRequest | */
	@Post()
	createTask(
		@Body('title') title: string,
		@Body('desc') desc: string
	): ITask {
		//☰☰☰☰☰☰☰☰☰☰
		console.log('Title:', JSON.stringify(title))
		console.log('Description:', JSON.stringify(desc))
		
		return this.tasksService.createTask(title, desc)
	}
}
