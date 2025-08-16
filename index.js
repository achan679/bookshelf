document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newbook').value.length == 0){
        alert("Please enter a book");
    }
    else{
        document.querySelector('#push').onclick = function(){
            const divEle = document.getElementById("PLACEHERE");
            divEle.innerHTML += `
                <span id="book">
                    ${document.querySelector("#newbook").value}   
                <span/>
        `;
        }
    }
}
