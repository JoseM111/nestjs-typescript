import { Injectable, NotFoundException } from '@nestjs/common'
import { EnumTaskStatus } from "tasks/models/task-status.enum"
import { CreateTaskDto } from "tasks/dto/create-task.dto"
import { GetTaskFilterDto } from "tasks/dto/get-task-filter.dto"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

@Injectable()
export class TasksService {
	//: - ©PROPERTIES
	// private tasks: Array<ITask> = []
	
	/// ======== <> CRUD FUNCTIONS <> ========
	
	/** @Create | */
	// createTaskService(createTaskDto: CreateTaskDto): ITask {
	// 	//..........
	// 	const { title, desc } = createTaskDto
	//
	// 	const task: ITask = {
	// 		id: uuid(),
	// 		title,
	// 		description: desc,
	// 		status: EnumTaskStatus.OPEN
	// 	}
	//
	// 	this.tasks.push(task)
	// 	return task
	// }
	//
	// /** @Read | */
	// getAllTasksService(): Array<ITask> {
	// 	return this.tasks
	// }
	//
	// getTaskByIdService(id: string): ITask {
	// 	//..........
	// 	const found = this.tasks.find((task) =>
	// 		task.id === id
	// 	)
	//
	// 	// The HTTP response status code will be 404
	// 	if (!found) throw new NotFoundException(
	// 		`Task with ID: ${id} not found`
	// 	)
	//
	// 	return found
	// }
	//
	// getTaskFiltersService(filterDto: GetTaskFilterDto): Array<ITask> {
	// 	//..........
	// 	const { status, search } = filterDto
	//
	// 	// Copy of our tasks
	// 	let tasks: Array<ITask> = this.getAllTasksService()
	// 	if ( status ) tasks = tasks.filter((task) => task.status === status)
	//
	// 	tasks = this.filterSearchHelper(search, tasks)
	// 	return tasks
	// }
	//
	// /** @Update | */
	// patchUpdateTaskStatusService(id: string, status: EnumTaskStatus): ITask {
	// 	//..........
	// 	const taskStatusToUpdate = this.getTaskByIdService(id)
	// 	taskStatusToUpdate.status = status
	//
	// 	return taskStatusToUpdate
	// }
	//
	// /** @Delete | */
	// deleteTaskService(id: string): void {
	// 	//..........
	// 	// The HTTP response status code will be 404
	// 	const found = this.getTaskByIdService(id)
	//
	// 	this.tasks = this.tasks
	// 		.filter((task) => {
	// 			console.log('\n*. [DELETED TASK]:', task)
	// 			return task.id !== found.id
	// 		})
	// }
	//
	// /// Helper function
	// private filterSearchHelper(search: string, tasks: Array<ITask>) {
	// 	//..........
	// 	if ( search ) {
	// 		tasks = tasks.filter((task) => {
	// 			const { includes: includesTitleSearch } = task.title.toLowerCase()
	// 			const { includes: includesDescSearch } = task.description.toLowerCase()
	//
	// 			return includesTitleSearch(search) || includesDescSearch(search)
	// 		})
	// 	}
	//
	// 	return tasks
	// }
}
/// - END OF: TasksController
