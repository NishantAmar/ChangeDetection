import { Injectable, signal } from "@angular/core";
import { BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn:'root'
})
export class MessageService{
  // message$ = new BehaviorSubject<string[]>([]);
  // private messgae :string[]=[];
  // get allMessages(){
  //   return [...this.messgae];
  // }
  private messages = signal<string[]>([]);
  allMessages = this.messages.asReadonly();

  addMessage(message: string){
    this.messages.update(oldMessage => [...oldMessage, message]);
    // this.messgae=[...this.messgae, message];
    // this.message$.next([...this.messgae]);
  }
}
