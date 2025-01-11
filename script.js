    let form = document.querySelector("form");
    form.addEventListener("submit", (e)=>{
        e.preventDefault()
        
        let height = parseInt(document.querySelector("#height").value)
        let weight = parseInt(document.querySelector("#weight").value)
        let result = document.querySelector("#results")

        if(height === "" || isNaN(height) ||height<0){
            result.innerHTML =`Please enter a valid height ${height}`
        }
        else if(weight === "" || isNaN(weight) ||weight<0){
            result.innerHTML = `Please enter a valid weight ${weight}`
        }
        else{
            // let bmi = ((weight/(height*height) )/ 10000).toFixed(2)
            const bmi = (weight / ((height * height) / 10000)).toFixed(2);
            if(bmi< 18.6){
                result.innerHTML = `<span> Result : ${bmi} Underweight</span>`
            }
            if(bmi >= 18.6 && bmi<= 24.9){
                result.innerHTML = `<span> Result : ${bmi} Normal range</span>`
            }
            if(bmi> 24.9){
                result.innerHTML = `<span> Result : ${bmi} Overweight</span>`
            }
            console.log(height)
            console.log(weight)
            console.log(bmi)
            
        }
        
    })
