"use strict";

/*task 1*/
/*let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;*/

/*task 2*/
/*содержимое объекта мы менять можем, но саму ссылку уже не можем
то есть работать такой код будет*/

/*task 3*/

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
} alert(sum);