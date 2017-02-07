var names = ['leo','yue','allen','aron'];

// forEach take a function
names.forEach(function(name){
  console.log('for Each', name);
});

// ES6, arrow functions, it works the same as the last function, {} to run multiple lines,
names.forEach((name)  => {
  console.log('arrowFunc', name);
});

// we can even make it shorter like, if you just want to run one line
names.forEach((name)=> console.log(name));

//Example, when run this function, it will add ! to parameter
var returnMe = (name) => name + '!';
console.log(returnMe('Leo'));
