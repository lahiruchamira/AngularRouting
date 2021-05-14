import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

export interface canComponentDeactivate{
    canDeactivate:()=> Observable<boolean>|Promise<boolean>|boolean;
}
export class CanDeactivteGuard implements CanDeactivate<canComponentDeactivate>{
    canDeactivate(component:canComponentDeactivate,
        currentRoute:ActivatedRouteSnapshot,
        currentState:RouterStateSnapshot,
        nextState?:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean{
            return component.canDeactivate();
        }
}