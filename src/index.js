let pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];
  
  const getAge = (pet) => new Date().getFullYear() - pet.bornOn
  
  
  let petsWithAge = [];
  pets.map( el=> el.age=petsWithAge.push(getAge(el) ))
  console.log(petsWithAge);
  
  let dogs = [];
  dogs = pets.filter (el => el.type === 'dog')

  console.log(dogs);
  
  let jasper;
  
  jasper=pets.filter(el=> el.name==="Jasper" )[0]
  
  console.log(`Jasper is  ${jasper.age} years old`);