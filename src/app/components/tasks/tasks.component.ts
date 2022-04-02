import { Component, OnInit } from '@angular/core'
import { Task } from '../../interfaces/Task'
import { TASKS } from '../../mocks/mock-taks'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  comptasks: Task[] = TASKS
  constructor () {}

  ngOnInit (): void {}
}
