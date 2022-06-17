import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, ObservedValueOf } from 'rxjs';
import { Task } from '../components/Task';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'
  
  constructor(private http:HttpClient) { }
  getTasks(): Observable<Task[]>{
    return this.http.get<[]>(this.apiUrl)
  } 
  deleteTask(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }
  updateTaskReminder(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOption);
  }
  addTask(task: Task): Observable<Task>{
      return this.http.post<Task>(this.apiUrl, task, httpOption);
  }
}
