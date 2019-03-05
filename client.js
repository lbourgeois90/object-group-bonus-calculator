const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];


// * The `name` property should contain the employee's name.
// * The `bonusPercentage` property should contain the bonus percentage the employee is to receive. See section below for calculation instructions.
// * The `totalCompensation` property should be the adjusted annual compensation (base annual + bonus)
// * The `totalBonus` should be the employee's total bonus rounded to the nearest dollar.
function employeeBonusInfo( employee ) {

  for ( let i = 0; i < employees.length; i++ ) {
  
    employees[i].totalCompensation = totalCompensation( employee );

    console.log( employees[i] )
  }
  return employee;
}



function totalCompensation( employee ) {
  if ( employee.reviewRating <= 2) {
    employee.bonusPercentage = 0;
  }//end if
  else if (employee.reviewRating === 3) {
    employee.bonusPercentage = .04;
  }// end else if 3 rating
  else if (employee.reviewRating === 4) {
    employee.bonusPercentage = .06;
  }// end else if 4 rating
  else if (employee.reviewRating === 5) {
    employee.bonusPercentage = 0.1;
  }// end else if 5 rating
if ((employee.employeeNumber).length === 4) {
  employee.bonusPercentage += 0.05;
  employee.totalBonus = (Number(employee.annualSalary) * employee.bonusPercentage );

}// end if statement
return ( (Number(employee.annualSalary) + employee.totalBonus));
}//end percentage func



console.log( employeeBonusInfo( employees[0]) );




// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.


