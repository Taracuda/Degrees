
window.onload = function() {
    var httpRequest;
    document.getElementById("button").onclick = function() {

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
        response = httpRequest.responseText;
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                const parsedResponse = JSON.parse(response);

                document.getElementById("gradSchool").innerHTML = parsedResponse[1]['school'];
                document.getElementById("gradMajor").innerHTML = parsedResponse[1]['program'];
                document.getElementById("gradType").innerHTML = parsedResponse[1]['type'];
                document.getElementById("gradYear").innerHTML = parsedResponse[1]['yearConferred'];

                document.getElementById("undergradSchool").innerHTML = parsedResponse[0]['school'];
                document.getElementById("undergradMajor").innerHTML = parsedResponse[0]['program'];
                document.getElementById("undergradType").innerHTML = parsedResponse[0]['type'];
                document.getElementById("undergradYear").innerHTML = parsedResponse[0]['yearConferred'];

            } else {
                alert('There was a problem');
            }
        }
    }
};