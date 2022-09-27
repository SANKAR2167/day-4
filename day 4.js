//JSON
var a={
    "name":"sankar",
    "age": 25
}
var b={
    "age":24,
    "name":"saravanan"
}

console.log(JSON.stringify(a)===JSON.stringify(b));

// XML HTTP REQUEST
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all")
request.send();
request.onload=function(){
  var res =JSON.parse(request.response);
  console.log(res);
  for (let i = 0; i < res.length; i++) {
    const ans1 = res [i];
    // Answer for Question 2
    console.log("Country Flag:" + ans1.flags);

    // Answer for Question 3
    console.log("Country Name:" + ans1.name, "Region:" + ans1.region, "Sub-Region:" + ans1.subregion, "Population:" + ans1.population);
  }
}
