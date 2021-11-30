let table = [];

for(let j = 0; j < 3; j++){

    let newTr = document.createElement("tr");

    for(let i = 0; i < 3; i++){
    
        let newTd = document.createElement("td");
    
        newTd.setAttribute();
    
        newTr.appendChild(newTd);
        
        let newA = document.createElement("a");
    
        newA.textContent = item.text;
    
        newA.href = item.url + item.text + "/" + item.text + ".html";
    
        newLi.appendChild(newA);
    }




}

