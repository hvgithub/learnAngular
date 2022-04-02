import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { TaskDefn } from '../interfaces/Task'
import { TASKS } from '../mocks/mock-taks'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'
  constructor (private http: HttpClient) {}

  getTasks (): Observable<TaskDefn[]> {
    const tasks = of(TASKS)
    return tasks
  }
}
