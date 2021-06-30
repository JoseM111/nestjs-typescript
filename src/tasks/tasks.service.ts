import { Injectable } from '@nestjs/common'
import { ETaskStatus, ITask } from "tasks/models/tasks.model"
import { v4 as uuid } from 'uuid'
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

@Injectable()
export class TasksService {
	//: - ©PROPERTIES
	// |™⚫️⚫️========================
	private tasks: Array<ITask> = []
	
	/** @getters | */
	getAllTasks = (): Array<ITask> => this.tasks
	
	/** @member-methods | */
	createTask = (title: string, desc: string): ITask => {
		//☰☰☰☰☰☰☰☰☰☰
		const task: ITask = {
			id: uuid(),
			title,
			description: desc,
			status: ETaskStatus.OPEN
		}
		
		this.tasks.push(task)
		return task
	}
	
	
}
/// - END OF: TasksController
