document.querySelector('.getMele').addEventListener('click',async () => {
    
// 0: {idCategory: '1', strCategory: 'Beef', strCategoryThumb: 'https://www.themealdb.com/images/category/beef.png', strCategoryDescription: 'Beef is the culinary name for meat from cattle, pa… high-quality protein and essential nutrients.[2]'}
    let x = prompt('enter a numer');
    if (x<= 14) {    
        let response = await axios('https://www.themealdb.com/api/json/v1/1/categories.php');
        let info = response.data.categories; 
        console.log(response.data);
        let name = info[x].strCategory;
        let imgurl = info[x].strCategoryThumb;
        let Description = info[x].strCategoryDescription

        
        const main = document.querySelector('.main');
        const div = document.createElement('div')

        const meal = document.createElement('h1');
        const image = document.createElement(`img`);
        const mealInfo = document.createElement('p')

        image.setAttribute('src',imgurl);
        meal.innerText = name;
        mealInfo.innerHTML = Description;
        main.appendChild(meal);
        main.appendChild(div);
       
        div.appendChild(image);
        div.appendChild(mealInfo);
     
    }

});
