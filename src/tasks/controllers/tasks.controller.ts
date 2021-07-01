import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common'
import { TasksService } from "tasks/services/tasks.service"
import { ITask } from "tasks/models/tasks.model"
import { CreateTaskDto } from "tasks/dto/create-task.dto"
import { GetTaskFilterDto } from "tasks/dto/get-task-filter.dto"
import { UpdateTaskStatusDto } from "tasks/dto/update-task-status.dto"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

@Controller('tasks')
export class TasksController {
	/// ======== <> Constructor <> ========
	constructor(private tasksService: TasksService) {
	}
	
	/// ======== <> RouteHandlers <> ========
	
	/** @PostRequest | */
	@Post()
	createTask(@Body() createTaskDto: CreateTaskDto): ITask {
		//..........
		console.log('[POST REQUEST] create task:\n', createTaskDto)
		
		return this.tasksService.createTaskService(createTaskDto)
	}
	
	/** @GetRequest | */
	@Get()
	getTasks(@Query() filterDto: GetTaskFilterDto): Array<ITask> {
		//..........
		if ( Object.keys(filterDto).length ) {
			//..........
			console.log(
				'[GET REQUEST] filtered task:',
				this.tasksService.getTaskFiltersService(filterDto)
			)
			
			return this.tasksService.getTaskFiltersService(filterDto)
		}
		
		console.log(
			'[GET REQUEST] get all task:',
			this.tasksService.getAllTasksService()
		)
		
		return this.tasksService.getAllTasksService()
	}
	
	@Get('/:id')
	getTaskById(@Param('id') id: string): ITask {
		//..........
		console.log('[GET REQUEST] get task by id:', this.tasksService.getAllTasksService())
		return this.tasksService.getTaskByIdService(id)
	}
	
	/** @PatchRequest | */
	/// PATCH method supplies a set of instructions to modify the resource
	@Patch('/:id/status')
	patchUpdateTaskStatus(
		@Param('id') id: string,
		@Body() updateTaskStatusDto: UpdateTaskStatusDto): ITask {
		//..........
		const { status } = updateTaskStatusDto
		
		console.log(
			'\n[PATCH REQUEST] patch status:',
			this.tasksService.patchUpdateTaskStatusService(id, status)
		)
		
		return this.tasksService.patchUpdateTaskStatusService(id, status)
	}
	
	/** @DeleteRequest | */
	@Delete('/:id')
	deleteTask(@Param('id') id: string): void {
		//..........
		console.log(`\n*. [DELETED TASK] with ID: ${ id }`)
		this.tasksService.deleteTaskService(id)
	}
	
}
/// - END OF: TasksController















