document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newbook').value.length == 0){
        alert("Please enter a book");
    }
    else{
        document.querySelector('#push').innerHTML += `
            <div id="book">
                <span id="bookname">
                    ${document.querySelector("#newbook").value}   
                <span/>
            </div>
        `;
    }
}