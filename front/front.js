const text = document.getElementById('text');

function modifyData(){
    fetch('/info').then(response=> {
        if (response.ok){
            response.json().then(json=>{
                text.innerText = json.value;
            });

        }
    });
}
modifyData()