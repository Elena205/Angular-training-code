import { Component, OnInit } from '@angular/core';
import { MyServersService } from './my-servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-servers',
  templateUrl: './my-servers.component.html',
  styleUrls: ['./my-servers.component.css']
})
export class MyServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(
    private myServersService: MyServersService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.servers = this.myServersService.getServers();
  }

  onReload() {
    // this.router.navigate(['servers'], {relativeTo: this.route});
  }
}
