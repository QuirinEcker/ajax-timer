window.addEventListener('load', () => {
    let myRequest;

    let interval = setInterval(() => {
        getAJAX();
    }, 2000)

    function checkData() {
        if (myRequest.readyState == 4 && myRequest.status == 200) {
            let element1 = document.getElementById('placeholder');
            let text1 = myRequest.responseText;
            console.log(text1);
            element1.textContent = text1;
        }
    }

    function getAJAX() {
        myRequest = new XMLHttpRequest();
        myRequest.open("GET", "textfile.txt?_=" + new Date().getTime());
        myRequest.onreadystatechange = checkData;
        myRequest.send(null);
    }
});