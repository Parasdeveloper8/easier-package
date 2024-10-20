# easier-jsever

## Details

This is lightweight,easy to use package which helps you in javascript development.
Sometimes you probably think ,Can't I write some methods in short but this package is for you .
*Lets start with an example*

**This supports ES modules**

**Best for react and backend development**

**Examples**

Here is a javascript code :-
 ```javascript
     console.log("hello");
```

with this package:-
```javascript
   clog("hello");
```
**Here is way to use this package .Follow these instructions**


step1:-**npm i easier-jsever**

```javascript
step2:-import {clog} from "easier-jsever";

       Or

 you can also do -const {clog,cerr} = require("easier-jsever");

step3:-Use like this
       const a = "name";
       clog(a);//name
 ```
____________________________________________________________
### Methods available :----------------------------------------------------------------

```javascript
1.clog("This is a log message.");

2.cerr("This is an error message.");

3.cwarn("This is a warning message.");

4.cinfo("This is an info message.");

5.cbug("This is a debug message.");

6.ctrace("This is a trace message.");

const sampleArray = [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }];

7.ctbl(sampleArray);

8.cclr():-console.clear();

9.hlf():-retruns half
 
10.binarytochar() :-binary to character
   
11.raise(base,exponent):- Math.pow(base,exponent);

12.mult(a,b) :- a x b

13.tpm(a,b,c) :- perimeter of triangle

14.rpm(a,b,c,d) :- perimeter of rectangle

15.cpm(radius) :- circumference of circle

16.scpm(radius) :- circumference of semi-circle

17.table(num) :- writes table of given argument

18.docid :- document.getElementById();

19.doclass :- document.getElementsByClassName();

20.stringToBinary() :- string to binary

21.jsonfy(obj) :- used to stringify JSON

22.listenevnt(event,dom,cb):-
  event("click","change","submit",etc.),
  dom :- Element's variable on which you wanna put event listener,
  cb :- function of what will it do 

23. statement (condition,ifoutput,elseoutput):-
  condition:- 10 > 5,
  ifoutput:- if condition is true,console.log(ifoutput);
  elseoutput :- else it will console.log(elseoutput);

  ex:-
  let condtn  = 10 >5 ;
  let a = true;
  let b = false;
  statement(condtn, a,b);
  //true
  //you can use any variable name
24.sqr(num) :- Returns square root of given number

25.cuboidTsa(length, breadth, height) :- Returns total surface area of cuboid

26.cuboidLsa(length, breadth, height) :- Returns lateral surface area of cuboid

27.cuboidVolume(length, breadth, height) :- Returns volume of cuboid

28.cuboidDiagonal(length, breadth, height) :- Returns diagonal of cuboid
```
*author:-paras prajapat*
**github:-parasdeveloper8**