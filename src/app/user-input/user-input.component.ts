import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentResultsService } from '../investment-results/investment-results.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  enteredInitialInvestment = 0
  enteredAnnualInvestment = 0
  enteredExpectedReturn = 0
  enteredDuration = 0

  private investmentResultService = inject(InvestmentResultsService)

  onSubmit(){
    this.investmentResultService.calculateInvestmentResults({
      initialInvestment: this.enteredInitialInvestment,
      annualInvestment: this.enteredAnnualInvestment,
      expectedReturn: this.enteredExpectedReturn,
      duration: this.enteredDuration
    })
  }
}
