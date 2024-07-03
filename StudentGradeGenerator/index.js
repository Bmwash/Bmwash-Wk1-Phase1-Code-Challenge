   ///Students Grade Generator

   
   const readline = require('readline');

   const rl = readline.createInterface({
       input: process.stdin,
       output: process.stdout
   });
   
   rl.question("Enter the student's name: ", function(studentName) {
       console.log("Student Name: " + studentName);
   
       rl.question("Enter the student's marks: ", function(studentMarks) {
           console.log("Student Marks: " + studentMarks);
   
           let marks = Number(studentMarks);
   
           if (isNaN(marks) || marks < 0 || marks > 100) {
               console.log("Invalid input, please enter a number between 0 and 100.");
           } else {
               let grade;
               if (marks > 79) {
                   console.log("you have grade A");
               } else if (marks >= 60 && marks <= 79) {
                   gconsole.log("you have grade B");
               } else if (marks >= 50 && marks < 60) {
                   console.log("you have grade C");
               } else if (marks >= 40 && marks < 50) {
                   console.log("you have grade D");
               } else {
                   console.log("you have grade E");
               }
               console.log("You have grade " + grade);
           }
   
           rl.close();
       });
   });
   