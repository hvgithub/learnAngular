import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { TaskDefn } from '../../interfaces/Task'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  faTimes = faTimes
  @Input() task: TaskDefn
  constructor () {}

  ngOnInit (): void {}
}
