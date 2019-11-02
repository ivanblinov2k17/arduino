const text = document.getElementById('text');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const button = document.getElementById('button');

const socket = new WebSocket('ws://localhost:8080');

// Соединение открыто
socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
});

// Наблюдает за сообщениями
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data, typeof (event.data));
    if (typeof (event.data) === "number") {
        alert(event.data);
    }
});

function reloadData() {
    fetch('/info').then(response => {
        if (response.ok) {
            response.json().then(json => {
                text.innerText = json["value1"] + json["value2"];
            });

        }
    });
}

function postData(data) {
    fetch('/info', {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": 'application/json'
        }
    });
}

function buttonClick() {
    let c_data = {
        "value1": input1.value,
        "value2": input2.value
    }
    postData(JSON.stringify(c_data));
    console.log("works")
    reloadData();
}

reloadData();