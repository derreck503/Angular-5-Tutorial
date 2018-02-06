import { Observable } from "rxjs/Observable";
import { RouterStateSnapshot, CanDeactivate } from "@angular/router";
import { ActivatedRouteSnapshot } from "@angular/router/src/router_state";

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(
        component: CanComponentDeactivate,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
    {
        return component.canDeactivate();
    }
}