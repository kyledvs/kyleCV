import {
  animate,
  animation,
  group,
  query,
  stagger,
  style,
  useAnimation,
} from '@angular/animations';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';
import { HostBinding } from '@angular/core';
import {
  trigger,
  state,
  transition,
  // ...
} from '@angular/animations';
import { logEvent } from '@angular/fire/analytics';
import { HttpClntService } from '../services/http-clnt.service';
import { Planets } from '../services/planets';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-desktop-view',
  templateUrl: './desktop-view.component.html',
  styleUrls: ['./desktop-view.component.css'],
  animations: [
    trigger('flyInOut', [
      state(
        'in',
        style({
          width: '*',
          transform: 'translateX(0)',
          opacity: 1,
        })
      ),
      transition(':enter', [
        style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
        group([
          animate(
            '0.3s 0.1s ease',
            style({
              transform: 'translateX(0)',
              width: '*',
            })
          ),
          animate(
            '0.3s ease',
            style({
              opacity: 1,
            })
          ),
        ]),
      ]),
      transition(':leave', [
        group([
          animate(
            '0.3s ease',
            style({
              transform: 'translateX(50px)',
              width: 10,
            })
          ),
          animate(
            '0.3s 0.2s ease',
            style({
              opacity: 0,
            })
          ),
        ]),
      ]),
    ]),

    trigger('pageAnimations', [
      transition(':enter', [
        query('.hero', [
          style({ opacity: 0, transform: 'translateY(-100px)' }),
          stagger(30, [
            animate(
              '500ms cubic-bezier(0.35, 0, 0.25, 1)',
              style({ opacity: 1, transform: 'none' })
            ),
          ]),
        ]),
      ]),
    ]),

    trigger('kyleHeaderCollapse', [
      state(
        'big',
        style({
          height: '7cm',
          width: '7cm',

          border: '2cm solid #1e262c',
        })
      ),
      state(
        'small',
        style({
          height: '2cm',
          width: '2cm',

          border: '.5cm solid #1e262c',
        })
      ),
      transition('big => small', [animate('0.5s')]),
      transition('small => big', [animate('0.5s')]),
    ]),

    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          height: '200px',
          opacity: 1,
          backgroundColor: '#1e262c',
        })
      ),
      state(
        'closed',
        style({
          height: '2cm',
          opacity: 1,
          backgroundColor: '#1e262c',
        })
      ),
      transition('open => closed', [animate('0.5s')]),
      transition('closed => open', [animate('0.5s')]),
      transition('* => closed', [animate('0.5s')]),
      transition('* => open', [animate('0.5s')]),
      transition('open <=> closed', [animate('0.5s')]),
      transition('* => open', [animate('0.5s', style({ opacity: '*' }))]),
      transition('* => *', [animate('1s')]),
    ]),
  ],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesktopViewComponent implements OnInit {


  pl!: Array<Planets>;

  isOpen = true;
  isBig = true;
  ssystem!: any;

  toggle() {
    this.isOpen = !this.isOpen;
    this.isBig = !this.isBig;
  }

  bigProfilePic: boolean = true;
  refa: any;

  @HostListener('window:scroll') onScroll(e: Event): void {
    console.log(scrollY);
    if (scrollY < 6) {
      console.log('tooop');
      this.isOpen = true;
      this.isBig = true;
    } else {
      this.isOpen = false;
      this.isBig = false;
    }
  }

  constructor(

    private plannet: HttpClntService,
    
    private renderer: Renderer2) {
    //this.refa = document.getElementById("smallProfilePic");

    this.plannet.getConfig().subscribe(
      (data: Planets) =>
        (data = {
          id: data.id,
          name: data.name,
          englishName: data.englishName,
        })
    );
  }

  ngOnInit(): void {}



  showConfig() {
    

    
  }

  change() {}
  /* getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }*/
}
