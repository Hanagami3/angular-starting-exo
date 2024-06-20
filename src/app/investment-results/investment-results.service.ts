import { Injectable } from '@angular/core';
import { InvestmentResultsData } from './investment-results.model';


@Injectable({
  providedIn: 'root'
})
export class InvestmentResultsService {

  constructor() { }

  calculateInvestmentResults( investmentResultsData: InvestmentResultsData,
  ){
    const annualData = [];
    let investmentValue = investmentResultsData.initialInvestment;

    for (let i = 0; i < investmentResultsData.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (investmentResultsData.expectedReturn / 100);
      investmentValue += interestEarnedInYear + investmentResultsData.annualInvestment;
      const totalInterest =
        investmentValue - investmentResultsData.annualInvestment * year - investmentResultsData.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: investmentResultsData.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: investmentResultsData.initialInvestment + investmentResultsData.annualInvestment * year,
      });
    }
  }
}