import { Component, EventEmitter, Output, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';
import type { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  //@Output() calculate = new EventEmitter<InvestmentInput>()
  //calculate = output<InvestmentInput>()

  //On le set à un string 0 car l'input que l'on va recevoir sera toujours un string même si on rentre un nombre
  //pas besoin de <> vc ce signal car la valeur est initialisée ==> '0' et pas undifiend dans app-component
  //pas besoin de changer les methode dans html avec '()' car il y a [(ngModel)] MS bien en rajouter dans 'onSubmit()'
  enteredInitialInvestment = signal('0')
  enteredAnnualInvestment = signal('0')
  enteredExpectedReturn = signal('5')
  enteredDuration = signal('10')

  constructor(private investmentService: InvestmentService) {}

  onSubmit(){
    this.investmentService.calculateInvestmentResults({
      initialInvestment: + this.enteredInitialInvestment(),
      annualInvestment: + this.enteredAnnualInvestment(),
      expectedReturn: + this.enteredExpectedReturn(),
      duration: + this.enteredDuration()  
    })
    // this.calculate.emit({
    //   initialInvestment: + this.enteredInitialInvestment(),
    //   annualInvestment: + this.enteredAnnualInvestment(),
    //   expectedReturn: + this.enteredExpectedReturn(),
    //   duration: + this.enteredDuration()  
    // })
    this.enteredInitialInvestment.set('0')
    this.enteredAnnualInvestment.set('0')
    this.enteredExpectedReturn.set('5')
    this.enteredDuration.set('10')
  }
}
//   onSubmit(){
//     console.log('SUBMITTED')
//     console.log(this.enteredInitialInvestment)
//     console.log(this.enteredAnnualInvestment)
//     console.log(this.enteredExpectedReturn)
//     console.log(this.enteredDuration)
    
//     this.investmentResultService.calculateInvestmentResults({
//       initialInvestment: this.enteredInitialInvestment,
//       annualInvestment: this.enteredAnnualInvestment,
//       expectedReturn: this.enteredExpectedReturn,
//       duration: this.enteredDuration
//     })
//   }
// }


  //////////////////////////////////////////////