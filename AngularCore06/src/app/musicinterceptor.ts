import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
export class MusicInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // tslint:disable-next-line:max-line-length
        const token = 'BQCQCrVoy_myZZ7BpCH4CLzJZArxhiK3GkahCfwnWcO2L2Cykxqr-sFULOFB2pgHzrp3u7HtMpcVSB25K8peq4ONFeIlPZDsXPfPF9ou2ZbsWG_iblh7Px--LEnr7bLZmdIugMCiENepZPoqBWImP7-eE4Q2ia8u7Q';
        req = req.clone({
            setHeaders: {
                Authorization: `Authorization: Bearer ${token}`
            }
        });
        return next.handle(req);
    }
}
