# Calculadora CLT


Live Demo: http://calculadoraclt.rf.gd/


This labor calculator returns the net salary of a company emploee.

In Brazil, to calcule companies employees net salary, first you need to calculate INSS contribution and IRRF fee, in a complex calculation.


### INSS Contribution

There are some ranges and rates

Range 1 From 0       to 1212    => 7.5%
Range 2 From 1212.01 to 2427.35 =>   9%
Range 3 From 2427.36 to 3641.03 =>  12%
Range 4 From 3641.04 to 7087.22 =>  14%

If gross salary pass more than a range, you must apply rates for each range, like this:

Lets say a emploee makes 3000 BRL per month:

INSS:
90.90  for Range 1 (1212 * 7.5%) +
109.38 for Rnage 2 (2427.35 - 1212.01) * 9% +
68.71  for Range 3 (3000 - 2427.36) * 12%
Total 269


### IRRF fee

More ranges and rates... and deductions

Range 1 From 0       to 1903.98  =>    0% => 0
Range 2 From 1903.99 to 2826.65  =>  7.5% => 142.80
Range 3 From 2826.66 to 3751.05  => 15.0% => 354.80
Range 4 From 3751.06 to 4664.68  => 22.5% => 636.13
Range 5 From 4664.68 to infinity => 27.5% => 869.36

Same exemple of 3000 BRL per month:
IRRF Base = 3000 - 269 (INSS) = 2731, so Range 2
IRRF = (2731 * 7.5%) - 142.80 = 62.02


### Net Salary

Net Salary: 3000 - 269 (INSS) - 62.02 (IRRF) = 2668.97

If emploee has other legal deductions on its payroll, like child support, it is deducted directly from gross salary.

If emploee has child or legal dependents, 189.59 is deducted from IRRF base, per dependent.