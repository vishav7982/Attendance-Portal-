import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http : HttpClient) {

   }
   // API for reading JSON
  GetJsonData (fileName: string) : any{
    console.log('assets/data/json/'+fileName+'.json');
    return this.http.get('assets/data/json/'+fileName+'.json');
  };
}
