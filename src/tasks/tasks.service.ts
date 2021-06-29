import { Injectable } from '@nestjs/common'

@Injectable()
export class TasksService {
	//: - ©PROPERTIES
	// |™⚫️⚫️========================
	private tasks = []
	
	getAllTasks = () => this.tasks
}
