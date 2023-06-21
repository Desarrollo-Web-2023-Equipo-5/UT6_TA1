import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../home/home.page';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor( private http: HttpClient ) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('http://localhost:3000/users/1/tasks');
  }
}
