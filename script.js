const people = {
    John: 25,
    Jane: 30,
    Bob: 22,
    Alice: 28
  };
  
  // loop through an array of obj to get the key 
  console.log(Object.keys(people));
  
  // for(name in people){
  //   console.log(people[name]);
  // }
  
  const cars = [
    {
      name : 'maruti',
      year : 2015,
      price : 25000
    },
     {
      name : 'ford',
      year : 2025,
      price : 29000
    },
     {
      name : 'toyota',
      year : 2000,
      price : 25900
    }
  ]
  
  // looping through an array of obj to get the name of car whose year is > 2000.
  for (i=0; i<cars.length; i++){
    if(cars[i].year > 2000){
    console.log(cars[i].name);
    }
  }