// Add your code here
fetch("")
.then(resp => resp.json())
.then(function(data) {
    console.log(data)
});