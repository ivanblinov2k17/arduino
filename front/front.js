const text = document.getElementById('text');

function reloadData(){
    fetch('/info').then(response=> {
        if (response.ok){
            response.json().then(json=>{
                text.innerText = json.value;
            });

        }
    });
}

function postData(data){
    fetch('/info',{
        method: "POST",
        body: "MYDATA",
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
    })
}

let c_data = {
    "value":56
}

postData(c_data);
reloadData();