import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { MyServersComponent } from './my-servers/my-servers.component';
import { MyServerComponent } from './my-servers/my-server/my-server.component';
import { EditMyServerComponent } from './my-servers/edit-my-server/edit-my-server.component';
import { PageNotFindComponent } from './page-not-find/page-not-find.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './my-servers/edit-my-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MyServerResolver } from './my-servers/my-server/my-server-resolver.service';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
  // { path: '', component: HomeComponent },
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent },
  ]},
  {
    path: 'servers',
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: MyServersComponent,
    children: [
    { path: ':id', component: MyServerComponent, resolve: {server: MyServerResolver} },
    { path: ':id/edit', component: EditMyServerComponent, canDeactivate: [CanDeactivateGuard] },
  ]},
  // { path: 'not-found', component: PageNotFindComponent },
  // { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  // { path: '**', redirectTo: '/not-found' },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent },
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
