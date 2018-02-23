import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { Injectable } from "@angular/core";
import { AuthService } from "../auth/auth.service";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    
    constructor(private authSerivce: AuthService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Intercepted', req);
        const copiedReq = req.clone({
            params: req.params.set('auth', this.authSerivce.getToken())
        });
        return next.handle(copiedReq);
    }
}