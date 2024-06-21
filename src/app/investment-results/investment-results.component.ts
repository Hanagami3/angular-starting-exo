import { CurrencyPipe } from '@angular/common';
import { Component, Input, computed, inject, input } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})

  export class InvestmentResultsComponent{
    private investmentService = inject(InvestmentService)

    // get results(){
    //   return this.investmentService.resultData
    // }

    results = computed(() => this.investmentService.resultData())

    //results = this.investmentService.resultData.asReadonly()
  }



// export class InvestmentResultsComponent {
//   results = input<{
//     year: number,
//     interest: number,
//     valueEndOfYear: number,
//     annualInvestment: number,
//     totalInterest: number,
//     totalAmountInvested: number,
//   }[]>()
  
  //Mieux le '?' car le user peut ne pas encpre avoir encore clické qur calculate
  // @Input() results?: {
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number,
  //}[]==> cela dit à ts que le type de result est un tableau
