import { Injectable } from '@nestjs/common'
import { ETaskStatus, ITask } from "tasks/models/tasks.model"
import { v4 as uuid } from 'uuid'
import { CreateTaskDto } from "tasks/dto/create-task.dto"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

@Injectable()
export class TasksService {
	//: - ©PROPERTIES
	private tasks: Array<ITask> = []
	
	/** @Getters | */
	getAllTasks(): Array<ITask> {
		return this.tasks
	}
	
	getTaskById(id: string): ITask {
		return this.tasks
			.find((task) => task.id === id)
	}
	
	/// ======== <> CRUD FUNCTIONS <> ========
	
	/** @Create | */
	createTask(createTaskDto: CreateTaskDto): ITask {
		//..........
		const { title, desc } = createTaskDto
		
		const task: ITask = {
			id: uuid(),
			title,
			description: desc,
			status: ETaskStatus.OPEN
		}
		
		this.tasks.push(task)
		return task
	}
	
	/** @Delete | */
	deleteTask(id: string): void {
		//..........
		this.tasks = this.tasks
			.filter((task) => {
				console.log(
					'\n*. DELETE TASK:',
					JSON.stringify(task, null, '\t')
				)
				return task.id !== id
			})
	}
}
/// - END OF: TasksController
