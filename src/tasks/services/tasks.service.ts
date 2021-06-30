import { Injectable } from '@nestjs/common'
import { EnumTaskStatus, ITask } from "tasks/models/tasks.model"
import { v4 as uuid } from 'uuid'
import { CreateTaskDto } from "tasks/dto/create-task.dto"
import { GetTaskFilterDto } from "tasks/dto/get-task-filter.dto"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

@Injectable()
export class TasksService {
	//: - ©PROPERTIES
	private tasks: Array<ITask> = []
	
	/// ======== <> CRUD FUNCTIONS <> ========
	
	/** @Create | */
	createTaskService(createTaskDto: CreateTaskDto): ITask {
		//..........
		const { title, desc } = createTaskDto
		
		const task: ITask = {
			id: uuid(),
			title,
			description: desc,
			status: EnumTaskStatus.OPEN
		}
		
		this.tasks.push(task)
		return task
	}
	
	/** @Read | */
	getAllTasksService(): Array<ITask> {
		return this.tasks
	}
	
	getTaskByIdService(id: string): ITask {
		return this.tasks
			.find((task) => task.id === id)
	}
	
	getTaskFiltersService(filterDto: GetTaskFilterDto): Array<ITask> {
		//..........
		const { status, search } = filterDto
		
		// Copy of our tasks
		let tasks: Array<ITask> = this.getAllTasksService()
		if ( status ) tasks = tasks.filter((task) => task.status === status)
		
		tasks = this.filterSearchHelper(search, tasks)
		return tasks
	}
	
	/// Helper function
	private filterSearchHelper(search: string, tasks: Array<ITask>) {
		if ( search ) {
			//..........
			tasks = tasks.filter((task) => {
				const { includes: includesTitleSearch } = task.title.toLowerCase()
				const { includes: includesDescSearch } = task.description.toLowerCase()
				
				return includesTitleSearch(search) || includesDescSearch(search)
			})
		}
		return tasks
	}
	
	/** @Update | */
	updateTaskStatusService(id: string, status: EnumTaskStatus): ITask {
		//..........
		const taskStatusToUpdate = this.getTaskByIdService(id)
		taskStatusToUpdate.status = status
		
		console.log('\n*. Updated status:', taskStatusToUpdate)
		return taskStatusToUpdate
	}
	
	/** @Delete | */
	deleteTaskService(id: string): void {
		//..........
		this.tasks = this.tasks
			.filter((task) => {
				console.log('\n*. [DELETED TASK]:', task)
				return task.id !== id
			})
	}
}
/// - END OF: TasksController
