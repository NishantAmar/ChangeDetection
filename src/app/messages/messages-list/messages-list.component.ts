import { ChangeDetectionStrategy,  Component,  inject, OnInit } from '@angular/core';
import { MessageService } from '../new-message/message.service';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesListComponent implements OnInit {
  private messageService = inject(MessageService);
  // private cdRef = inject(ChangeDetectorRef);
  // private destroyRef = inject(DestroyRef)
  // message: string[]= [];
  messages = this.messageService.allMessages;
  // get messages(){
  //   return this.messageService.allMessages
  // }
  ngOnInit() {
      //  this.messageService.message$.subscribe((message)=>{
      //   this.message = message;
      //   this.cdRef.markForCheck();
      // });

      // this.destroyRef.onDestroy(()=>{
      //   subscription.unsubscribe();
      // });
  }
  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
