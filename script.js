const student = "Ким Вадим Максимович"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;

// Отсюда и ниже идет ваш код решения домашнего задания
// ...
// счет и тд. в консоле
console.log('Тайнфун против МЖК Спартак')
let x = 5 // Введите предполагаемый результат тайнфу
console.log(x)
let y = 3 ;// Введите предполагаемый результат мхк спартак
console.log(y)
let z =6 // Введите реальный результат тайфун
console.log(z)
let f =8 // Введите реальный результат мхк спартак
console.log(f)
let score_real = [z,f];
let score_expected = [x ,y];
if  
(x>y) {score_real=0} // сравнение ответов
else if 
(x==y) {score_real=1}
else
 score_real=2
if  
(z>f) {score_expected=0} // сравнение ответов
else if
 (z==f) {score_expected=1}
else 
score_expected=2 
if (y==f, x==z) 
 {
   console.log('Счёт и результат были угаданы верно');
   }  
else if (score_real==score_expected)
{
  console.log('Счёт не угадали')
    console.log('результат был угадан верно');
}
else
{ 
  console.log('Счёт не угадали, результат не был угадан')
  
}
