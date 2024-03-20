//Q1
document.write("Q1 .  Result: <br>");
var a = 10;
document.write("The value of a is : " + a + "<br><br>");

var b = ++a ;
document.write("The value of ++a is :" + b + "<br>");
document.write("Now the value of a is :" + b + "<br><br>");

var c = a++ ;
document.write("The value of a++ is : " + c + "<br>");
document.write("Now the value of a is : " + a + "<br><br>");

var d = --a;
document.write("The value of --a is : " + d + "<br>");
document.write("Now the value of a is :" + a + "<br><br>");

var e = a--;
document.write("The value of a-- is :" + e + "<br>");
document.write("Now the value of a is :" + a + "<br><br>");

//Q2.
document.write("Q2. <br>");
var a = 2;
var b = 1;
    --a; 
 //  1
    --a - --b;
     0  -   0 
    --a - --b + ++b;
//   -1 -  -1 +   0 
var result = --a - --b + ++b + b--;
        //    -2 - -1  +  0  + 0
        //    -1
document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>");
document.write("result is " + result + "<br><br>");

//Q3.
var a = prompt("Q3. Enter Your Name");
document.write("Q3 <br>" + "Hello Mr " + a + "<br><br>");

//Q5.
document.write("Q5.Table <br><br>");
var a = +prompt("enter your number",5);
document.write( a  + " * " + " 1 " + " = " + a + "<br>");
document.write( a  + " * " + " 2 " + " = " + a*2 + "<br>");
document.write( a  + " * " + " 3 " + " = " + a*3 + "<br>");
document.write( a  + " * " + " 4 " + " = " + a*4 + "<br>");
document.write( a  + " * " + " 5 " + " = " + a*5 + "<br>");
document.write( a  + " * " + " 6 " + " = " + a*6 + "<br>");
document.write( a  + " * " + " 7 " + " = " + a*7 + "<br>");
document.write( a  + " * " + " 8 " + " = " + a*8 + "<br>");
document.write( a  + " * " + " 9 " + " = " + a*9 + "<br>");
document.write( a  + " * " + " 10 " + " = " + a*10 + "<br><br>");

//Q6.
var sub1 = prompt("Enter your First Subject","English");
var sub2 = prompt("Enter your Second Subject","Math");
var sub3 = prompt("Enter your Third Subject","Computer");
var tMarks = 1100;
var Obtain_first = +prompt("Enter Your Obtain marks First subject",620);
var Obtain2 = +prompt("Enter Your Obtain Marks Other subjects",670);
var marks = tMarks*3;
var obtain =Obtain_first + Obtain2 + Obtain2;

document.write("Q6. <br>");
document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtain Marks</th><th>Percentage</th></tr>");
document.write(" <tr><td> " + sub1 + " </td><td> " + tMarks + " </td><td> " + Obtain_first + " </td><td> " + Obtain_first/tMarks*100 + " % " + " </td></tr> ");
document.write(" <tr><td> " + sub2 + " </td><td> " + tMarks + " </td><td> " + Obtain2 + " </td><td> " + Obtain2/tMarks*100 + " % " + " </td></tr> ");
document.write(" <tr><td> " + sub3 + " </td><td> " + tMarks + " </td><td> " + Obtain2 + " </td><td> " + Obtain2/tMarks*100 + " % " + " </td></tr> ");
document.write(" <tr><td> " + "Total" + " </td><td> " + marks + " </td><td> " + obtain + " </td><td> " + obtain/marks*100 + " % " + " </td></tr> ");
document.write("</table>");












