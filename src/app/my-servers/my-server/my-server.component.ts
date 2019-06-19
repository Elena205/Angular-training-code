import { Component, OnInit } from '@angular/core';
import { MyServersService } from '../my-servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-my-server',
  templateUrl: './my-server.component.html',
  styleUrls: ['./my-server.component.css']
})
export class MyServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(
    private myServersService: MyServersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    );
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.myServersService.getServer(id);
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.server = this.myServersService.getServer(+params['id']);
    //   }
    // )
  }

  onEdit() {
    //相对路径
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'merge'});
    // 绝对路径
    // this.router.navigate(['/servers', this.server.id, 'edit']);
  }
}
