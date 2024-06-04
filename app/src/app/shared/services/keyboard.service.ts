import { Injectable } from '@angular/core';
import { Keyboard } from 'src/app/workflow/auth/pages/login/commons/models/responses/info-response.interfaces';


@Injectable()
export class KeyBoardHelperService {
  keyboard: Keyboard = {} as Keyboard;

  setKeyBoard(keyboard: Keyboard){
    this.keyboard = keyboard;
  } 
  getSeed(){
    return this.keyboard.seed;
  }
  getPasswordHash(password: string): string[] {
    let arrayOfHash = [];
    for (let char of password) {
      let hash = this.keyboard.keys.find(item => item.value === char); 
      arrayOfHash.push(hash?.id);
    }
    return arrayOfHash as [];
  }

}
