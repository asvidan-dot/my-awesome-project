const numbers = [1, 5, 12, 3, 25, 8, 4];

// Фільтруємо масив, щоб залишити лише числа, більші за 7
const filteredNumbers = numbers.filter(function(number) {
  return number > 7; // Умова фільтрації
});

// Або за допомогою стрілкової функції:
// const filteredNumbers = numbers.filter(number => number > 7);

console.log(`Оригінальний масив: ${numbers}`);
console.log(`Відфільтрований масив ( > 7): ${filteredNumbers}`); 
// Виведе: Відфільтрований масив ( > 7): 12, 25, 8