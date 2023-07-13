import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPlan } from '../weekly-meal-plan/plans';

@Component({
  selector: 'app-weekly-card',
  templateUrl: './weekly-card.component.html',
  styleUrls: ['./weekly-card.component.scss'],
})
export class WeeklyCardComponent implements OnInit {
  page: string = '';
  singlePlan: IPlan | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = parseInt(params['id'], 10);
      if (!isNaN(id)) {
        this.singlePlan = {
          planId: id,
          imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
          planName: 'keto',
          description: 'Keto is a very healthy diet',
        };
        this.page = `id num: ${id}`;
      } else {

        this.page = 'Invalid id';
      }
    });
  }
  
  

  onClickBack() {
    this.router.navigate(['/meal-plan']);
  }
}
