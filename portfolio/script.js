
var req= new XMLHttpRequest()
url="https://restcountries.com/v3.1/all"

req.open("GET",url,true)

req.send()

req.onload=function(){
    //alert(this.response);
    countries_data=Object.values(JSON.parse(this.response));
    //alert(countries_data[0].name.common);
    countries=[]
    for(var i=0;i<countries_data.length;i++)
    {
        countries.push("\n"+countries_data[i].name.common)
    }
    alert(countries)
    for(var i=0;i<countries.length;i++)
    {
    header=document.createElement("h1")
    header.innerHTML=countries[i]
    document.body.appendChild(header)
    }
    
}