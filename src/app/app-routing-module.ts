import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth-guard-service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CanDeactivteGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerRepolver } from "./servers/server/server-resplver.service";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";
const appRoute:Routes=[
    {path:'', component:HomeComponent},
    {path:'users', component:UsersComponent,children:[
      {path:':id/:name', component:UserComponent}
    ]},//localhost:4200/users
    {path:'servers', 
    //canActivate:[AuthGuard],
    canActivateChild:[AuthGuard],
    component:ServersComponent,children:[
      {path:':id', component:ServerComponent,resolve:{server:ServerRepolver}},
      {path:':id/edit', component:EditServerComponent,canDeactivate:[CanDeactivteGuard]}
    ]},
   /*  {
      path:'not-found',component:PageNotFoundComponent
    }, */
    {
      path:'not-found',component:ErrorPageComponent,data:{message:'Page not found!'}
    },
    {path:'**',redirectTo:'/not-found',pathMatch:'full'}//wildcard route
   
  
  ]
@NgModule({
    imports:[
      RouterModule.forRoot(appRoute)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{

}