
window.onload = function() {
    var httpRequest;
    document.getElementById("button").onclick = function() {

        alert('clicked');
        makeRequest('./tara_degrees.json');
    };

    function makeRequest(url) {
        httpRequest = new XMLHttpRequest();
        if (!httpRequest) {
            alert('Exiting...cannot create XMLHTTP instance');
            return false;
        }

        httpRequest.onreadystatechange = alertContents;

        httpRequest.open('GET', url);
        httpRequest.send();
    }

    function alertContents() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status ===200) {
                alert(httpRequest.responseText);
            } else {
                alert('There was a problem');
            }
        }
    }
};