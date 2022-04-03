import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { TaskDefn } from '../interfaces/Task'
import { Observable } from 'rxjs'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'
  constructor (private http: HttpClient) {}

  getTasks (): Observable<TaskDefn[]> {
    console.log(this.http.get<TaskDefn[]>(this.apiUrl))
    return this.http.get<TaskDefn[]>(this.apiUrl)
  }
  deleteTasksSrv (task: TaskDefn) {
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<TaskDefn>(url)
  }
  updateTaskSrv (task: TaskDefn): Observable<TaskDefn> {
    const url = `${this.apiUrl}/${task.id}`
    return this.http.put<TaskDefn>(url, task, httpOptions)
  }
  addTaskSrv (task: TaskDefn) {
    console.log('Adding task...', task)
    const url = `${this.apiUrl}/${task}`
    return this.http.post<TaskDefn>(this.apiUrl, task, httpOptions)
  }
}
