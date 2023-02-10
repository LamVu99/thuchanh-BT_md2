let recipe = {
    Foodname: 'Sườn xào chua ngọt',
    Meal: 2,
    Ingredient: ['400 g sườn thăn', '4 tbsp nước mắm', '5 tsp đường', '5 tsp nước cốt chanh', '1/3 bát nước sôi', 'Hành khô, tỏi, ớt, hành lá', '2 quả cà chua', 'Hành tây (ớt chuông)']
}
console.log(`ten mon an: ${recipe.Foodname}`);
console.log(`suat an: ${recipe.Meal}`);
console.log('Thanh phan: ');
for (let i = 0; i < recipe.Ingredient.length; i++) {
    console.log('- ' + recipe.Ingredient[i]);
}