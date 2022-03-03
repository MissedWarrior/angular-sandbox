import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RandomService {

  value = Math.random().toPrecision(4);

}
