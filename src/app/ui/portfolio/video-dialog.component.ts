import {
  Component,
  ViewChild,
  HostListener,
  OnInit,
  Inject,
  InjectionToken
} from '@angular/core';
import { MdlDialogReference } from '@angular-mdl/core';

export const TEST_VALUE = new InjectionToken<string>('test value');


@Component({
  selector: 'video-dialog',
  templateUrl: './video-dialog.component.html',
  styleUrls: ['./video-dialog.component.scss']
})
export class VideoDialogComponent implements OnInit {

  public processingLogin = false;
  public statusMessage = '';
  public _mVideoSource: string;
  public _mIsPlaying:boolean = false;
  @ViewChild('videoPlayer') videoplayer: any;

  constructor(
    private dialog: MdlDialogReference,
    @Inject(TEST_VALUE) testValue: string) {

    console.log(`injected test value: ${testValue}`);

    // just if you want to be informed if the dialog is hidden
    this._mVideoSource = testValue;
    this.dialog.onHide().subscribe((user) => {
      console.log('login dialog hidden');
      if (user) {
        console.log('authenticated user', user);
      }
    });

    this.dialog.onVisible().subscribe(() => {
      console.log('set focus');

        
    });

  }


  public ngOnInit() {
setTimeout(() =>{
      this.toggleVideo();
    }, 500);  
  }


  public onCloseClick() {
    
      console.log('on close click');
     this.dialog.hide();
  }

  public toggleVideo(): boolean{
    if (this._mIsPlaying) {
      this.videoplayer.nativeElement.pause();
      this._mIsPlaying =false;
    } else {
      this.videoplayer.nativeElement.play();
      this._mIsPlaying = true;
    }
    return false;

  }


  @HostListener('window:keydown.esc')
  public onEsc($event): void {
    
      console.log('on esc');
    this.dialog.hide();
  }

  @HostListener('window:keydown.space')
  public onSpace($event): boolean {
    
      console.log('on space');
    this.toggleVideo();
    event.stopPropagation();
    return false;
  }



   @HostListener('window:popstate', ['$event'])
  onPopState(event):boolean {
    console.log('onpop pressed');
     this.dialog.hide();
     return false;
  }
}