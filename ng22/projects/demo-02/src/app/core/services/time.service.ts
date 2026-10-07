import { Service } from '@angular/core';


// @Injectable({
//   providedIn: 'root'
// })

@Service()
export class TimeService {

  #time = new Date();

  getTime() {
    return this.#time.getTime()
  }

}
