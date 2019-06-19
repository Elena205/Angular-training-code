import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MyServersService } from '../my-servers.service';
import { Injectable } from '@angular/core';

interface Server {
  id: number;
  name: string; 
  status: string;
}
@Injectable()
export class MyServerResolver implements Resolve<Server> {
  constructor(private myServersService: MyServersService) {}

  resolve(route:ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
    return this.myServersService.getServer(+route.params['id']);
  }
}