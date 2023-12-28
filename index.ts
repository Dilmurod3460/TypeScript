type Person = {
    name: string;
    gender: boolean;
  };
  
  const person: Person[] = [

    { name: "Ali", gender: true },
    { name: "Vali", gender: true },
    { name: "Nargiz", gender: false },
    { name: "Yulduz", gender: false },
    { name: "Doston", gender: true },
    { name: "John", gender: true}
    
  ];
  


function Write()
{
    var write = document.getElementById("write");

    var input = document.getElementById("input");

    var text = input.value;

    if(text == "male")
    {
      console.log("ishladi");
      write.innerHTML = GetAllMales();
    }
    else if(text == "female")
    {
        write?.innerHTML = GetAllFemale();
    }
    else if(text=="male female"){
      write?.innerHTML = 
    }
}

function GetAllMales()
{
  var males = person.filter(x => x.gender === true)
  
  var data = "";

  males.forEach(element => {
    data += `${element.name}` + '<br>'
  });

  return data;
}

function GetAllFemale()
{
  var males = person.filter(x => x.gender === false)
  
  var data = "";

  males.forEach(element => {
    data += `${element.name}` + '<br>'
  });

  return data;
}
function getElementById(){


}
