const url = document.getElementById("url").value;
console.log(url)
fetch("http://localhost:8080/shorten", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        url: url
    })
});