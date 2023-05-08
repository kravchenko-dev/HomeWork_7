// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома
// методами:
// read() запитує два значення за допомогою prompt і запам’ятовує їх у
// властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей

let Calculator = function() {
        this.read = function() {
            this.value1 = +prompt("Enter the number");
            this.value2 = +prompt("Enter the second number");
        }
    
        this.sum = function() {
            return this.value1 + this.value2;
        }
    
        this.mul = function() {
            return this.value1 * this.value2;
        }
};