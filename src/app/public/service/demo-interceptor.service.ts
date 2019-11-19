import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DemoInterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // 增加Basic认证
    const basicParam = btoa('demoBasic');
    const request = req.clone({headers: req.headers.append('Authorization', 'Basic ' + basicParam)});
    // 清空请求体
    const requestNoBody = req.clone({body: null});
    return next.handle(request).pipe(catchError((error: HttpErrorResponse) => this.handleErrorResponse(error)));
  }

  private handleErrorResponse(event: HttpResponse<any> | HttpErrorResponse): Observable<any> {
    // 处理 event
    // ...
    // ...
    return throwError(event);
  }
}
