import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateTaskDto } from "tasks/dto/create-task.dto"
import { TasksRepository } from "tasks/repositories/tasks.repository"
import { InjectRepository } from "@nestjs/typeorm"
import { TaskEntity } from "tasks/task-entities/task.entity"
import { EnumTaskStatus } from "tasks/models/task-status.enum"
import { GetTaskFilterDto } from "tasks/dto/get-task-filter.dto"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

@Injectable()
export class TasksService {
	/// ======== <> Constructor <> ========
	constructor(
		@InjectRepository(TasksRepository)
		private tasksRepository: TasksRepository
	) {}
	
	/// ======== <> CRUD FUNCTIONS <> ========
	
	/** @Create | */
	createTaskService(createTaskDto: CreateTaskDto): Promise<TaskEntity> {
		//..........
		return this.tasksRepository.taskRepoCreateTask(createTaskDto)
			.then((createTaskDto) => {
				console.log('\n*. [POST REQUEST] create task:\n', createTaskDto)
				return createTaskDto
			})
	}
	
	/** @Read | */
	async getTaskByIdService(id: string): Promise<TaskEntity> {
		//..........
		// If nothing is found by id-->return: null
		const taskFound = await this.tasksRepository.findOne(id)
			.then((task) => {
				console.log('[GET REQUEST] get task by id:', task)
				return task
			})
		
		if (!taskFound)
			throw new NotFoundException(
				`[TASK WITH ID]: ${id} does not exist`
			)

		return taskFound
	}
	
	getTaskService(filterDto: GetTaskFilterDto): Promise<Array<TaskEntity>> {
		//..........
		return this.tasksRepository.taskRepoGetTask(filterDto)
			.then((filterDto) => {
				console.log('\n*. [GET REQUEST] get all task:', filterDto)
				return filterDto
			})
	}

	/** @Update | */
	async patchUpdateTaskStatusService(id: string, status: EnumTaskStatus): Promise<TaskEntity> {
		//..........
		// The HTTP response status code will be 404 if the id is not found
		const taskStatusToUpdate = await this.getTaskByIdService(id)
		taskStatusToUpdate.status = status
		
		// Now save the task to the repository
		await this.tasksRepository.save(taskStatusToUpdate)
		console.log(
			'\n*. [PATCH REQUEST] patch status:', status,
			'\nID#:', id
		)
		
		return taskStatusToUpdate
	}

	/** @Delete | */
	async deleteTaskService(id: string): Promise<void> {
		//..........
		// The HTTP response status code will be 404
		const result = await this.tasksRepository.delete(id)
		
		if (result.affected === 0)
			throw new NotFoundException(
				`[COULD NOT DELETE] Task with ID: ${id} not found`
			)
		
		console.log('\n*. [DELETED TASK]:', result, '\nID#:', id)
	}
}
/// - END OF: TasksController
