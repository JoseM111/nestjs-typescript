import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { TasksService } from "tasks/services/tasks.service"
import { ITask } from "tasks/models/tasks.model"
import { CreateTaskDto } from "tasks/dto/create-task.dto"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

@Controller('tasks')
export class TasksController {
	/// ======== <> Constructor <> ========
	constructor(private tasksService: TasksService) {
	}
	
	/// ======== <> RouteHandlers <> ========
	
	/** @GetRequest | */
	@Get() getAllTasks(): Array<ITask> {
		return this.tasksService.getAllTasks()
	}
	
	@Get('/:id')
	getTaskById(@Param('id') id: string): ITask {
		return this.tasksService.getTaskById(id)
	}
	
	/** @PostRequest | */
	@Post()
	createTask(@Body() createTaskDto: CreateTaskDto): ITask {
		//..........
		
		console.log('Title:', JSON.stringify(createTaskDto.title))
		console.log('Description:', JSON.stringify(createTaskDto.desc))
		
		return this.tasksService.createTask(createTaskDto)
	}
	
	/** @DeleteRequest | */
	@Delete('/:id')
	deleteTask(@Param('id') id: string): void {
		//..........
		console.log(`\n*. DELETED TASK:\nWith ID: ${id}`)
		
		return this.tasksService.deleteTask(id)
	}
	
}
/// - END OF: TasksController















