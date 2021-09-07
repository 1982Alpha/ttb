import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DbservService {

  constructor(private http:HttpClient) { }
  savedata(userdata: any[]):Observable<any>{
    return this.http.post("https://alphahttp-default-rtdb.firebaseio.com/sdata.json",userdata)

  }
}
