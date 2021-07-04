import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common'
import { TasksService } from "tasks/services/tasks.service"
import { CreateTaskDto } from "tasks/dto/create-task.dto"
import { GetTaskFilterDto } from "tasks/dto/get-task-filter.dto"
import { UpdateTaskStatusDto } from "tasks/dto/update-task-status.dto"
import { TaskEntity } from "tasks/task-entities/task.entity"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

@Controller('tasks')
export class TasksController {
	/// ======== <> Constructor <> ========
	constructor(private tasksService: TasksService) {}
	
	// /// ======== <> RouteHandlers <> ========

	/** @PostRequest | */
	@Post()
	createTask(@Body() createTaskDto: CreateTaskDto): Promise<TaskEntity> {
		//..........
		console.log('[POST REQUEST] create task:\n', createTaskDto)

		return this.tasksService.createTaskService(createTaskDto)
	}

	/** @GetRequest | */
	@Get()
	getTasks(@Query() filterDto: GetTaskFilterDto): Promise<Array<TaskEntity>> {
		//..........
		console.log(
			'[GET REQUEST] get all task:',
			this.tasksService.getTaskService(filterDto)
		)

		return this.tasksService.getTaskService(filterDto)
	}

	@Get('/:id')
	getTaskById(@Param('id') id: string): Promise<TaskEntity> {
		//..........
		console.log(
			'[GET REQUEST] get task by id:',
			this.tasksService.getTaskByIdService(id)
		)
		
		return this.tasksService.getTaskByIdService(id)
	}

	/** @PatchRequest | */
	/// PATCH method supplies a set of instructions to modify the resource
	@Patch('/:id/status')
	patchUpdateTaskStatus(
		@Param('id') id: string,
		@Body() updateTaskStatusDto: UpdateTaskStatusDto): Promise<TaskEntity> {
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
	deleteTask(@Param('id') id: string): Promise<void> {
		//..........
		console.log(`\n*. [DELETED TASK] with ID: ${ id }`)
		return this.tasksService.deleteTaskService(id)
	}
}
/// - END OF: TasksController















