import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';
import {Task} from '../objects/task';
import {Response} from '@angular/http';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  taskRequest: TaskRequest;

  constructor(private http: HttpService) {
    this.taskRequest = new TaskRequest('');
  }

  ngOnInit() {
    this.http.getTasks().then((res: Response) => {
      this.tasks = res.json()['_embedded']['tasks'].reverse();
    });
  }

  toWaiting(task: Task) {
    task.status = 'WAITING';
    this.http.patch(task._links['self']['href'], task).then();
  }

  newTask() {
    this.http.post(this.http.MAIN_URL + 'tasks', this.taskRequest).then(
      () => {
        this.taskRequest.url = '';
        this.ngOnInit();
      }
    )
    ;
  }
}

export class TaskRequest {
  url: string;

  constructor(url: string) {
    this.url = url;
  }
}
