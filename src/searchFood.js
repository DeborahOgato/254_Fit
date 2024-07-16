document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value;
    searchFood(query).then(data => {
        displayResults(data);
    });
});

async function searchFood(query) {
    const response = await fetch(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&search_simple=1&json=1`);
    const data = await response.json();
    return data.products;
}

function displayResults(products) {
    const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = '';

    products.forEach(product => {
        const listItem = document.createElement('li');
        listItem.classList.add('result-item');
        
        const calories = product.nutriments['energy-kcal'] || 0;
        const protein = product.nutriments['proteins'] || 0;
        const fat = product.nutriments['fat'] || 0;
        const carbs = product.nutriments['carbohydrates'] || 0;

        listItem.innerHTML = `
            <div class="result-details">
                <span class="result-name">${product.product_name}</span>
                <div class="nutritional-info">
                    <span class="result-calories">${calories} kcal</span>
                    <span class="result-nutrients">${protein}g protein, ${fat}g fat, ${carbs}g carbs</span>
                </div>
                <div class="portion-adjust">
                    <label for="portion">Portion (g): </label>
                    <input type="number" id="portion" class="portion-input" value="100">
                </div>
                <button class="add-button">Add</button>
            </div>
        `;
        
        resultsList.appendChild(listItem);

        const portionInput = listItem.querySelector('.portion-input');
        const addButton = listItem.querySelector('.add-button');
        
        portionInput.addEventListener('input', function() {
            const portion = parseFloat(portionInput.value) || 100;
            const adjustedCalories = (calories * portion) / 100;
            const adjustedProtein = (protein * portion) / 100;
            const adjustedFat = (fat * portion) / 100;
            const adjustedCarbs = (carbs * portion) / 100;

            listItem.querySelector('.result-calories').textContent = `${adjustedCalories.toFixed(2)} kcal`;
            listItem.querySelector('.result-nutrients').textContent = `${adjustedProtein.toFixed(2)}g protein, ${adjustedFat.toFixed(2)}g fat, ${adjustedCarbs.toFixed(2)}g carbs`;
        });

        addButton.addEventListener('click', function() {
            const portion = parseFloat(portionInput.value) || 100;
            const adjustedCalories = (calories * portion) / 100;
            const adjustedProtein = (protein * portion) / 100;
            const adjustedFat = (fat * portion) / 100;
            const adjustedCarbs = (carbs * portion) / 100;

            console.log(`Added: ${product.product_name} - ${adjustedCalories.toFixed(2)} kcal, ${adjustedProtein.toFixed(2)}g protein, ${adjustedFat.toFixed(2)}g fat, ${adjustedCarbs.toFixed(2)}g carbs`);
        });
    });
}

