import { Component, OnInit } from '@angular/core';
import {
  faFacebookF,
  faInstagram,
  faSnapchat,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  show = false;
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faSnapchat = faSnapchat;
  faTwitter = faTwitter;

  constructor() { }

  ngOnInit() {
  }
}
