import { Component, OnInit, SkipSelf } from '@angular/core';

import { RandomService } from '../../injectables/random/random.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css'],
  providers: [RandomService],
})
export class RandomComponent implements OnInit {

  constructor(@SkipSelf() private random: RandomService, private random2: RandomService) { }

  ngOnInit(): void {
    console.log('rnd1', this.random.value);
    console.log('rnd2', this.random2.value);
  }


}
