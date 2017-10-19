import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';
import {Program} from '../objects/program';
import {Response} from "@angular/http";

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {
  programs: Program[];

  constructor(private http: HttpService) {
  }

  ngOnInit() {
    this.http.getPrograms().then((res: Response) => this.programs = res.json());
  }

  start(code: string) {
    this.http.post(this.http.MAIN_URL + 'programs/' + code, '{"action": "START"}');
    location.reload();
  }

  stop(code: string) {
    this.http.post(this.http.MAIN_URL + 'programs/' + code, '{"action": "STOP"}');
    location.reload();
  }
}
