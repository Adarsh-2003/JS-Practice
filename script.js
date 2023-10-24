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

// program to take correct number from user else return try again
while(true){
  let u1 = parseInt(prompt('enter 26'));
  if(u1 === 26){
    break;
  }
  else{
    alert('try again');
  }
}

// find mean user input
const findMean = (n1, n2, n3) => {
  let sum = (n1 + n2 + n3) / 3;
  console.log(sum);
};

const n1 = parseInt(prompt('enter n1'));
const n2 = parseInt(prompt('enter n2'));
const n3 = parseInt(prompt('enter n3'));

findMean(n1, n2, n3);


const niggas = [
  {
    name: 'sameer',
    scale: 7,
  },
  {
    name: 'adarsh',
    scale: 8,
  },
  {
    name: 'ajit',
    scale: 8.6,
  },
  {
    name: 'aashish',
    scale: 8.5,
  },
  {
    name: 'ajay',
    scale: 9,
  },
];

for (let nigga in niggas) {
  if (niggas[nigga].scale > 8) {
    console.log(niggas[nigga].name);
  }
}

const arr2 = Array(8).fill('nigga');
console.log(arr2)

const arr1 = ['anti-niigga1','anti-nigga2','ar12', 'ar13']

console.log(arr1.concat(arr2))

// joining array elements inside itself
console.log(arr1.join(' + '))

// copies all elem in new array except first
console.log(arr1.slice(1))

// first and last index is not included
console.log(arr1.slice(1,3))

// splice method 3 args
.splice(0,1)


