
const getCountries = () => {
    axios.get("https://restcountries.com/v2/all")
    .then(response => {
     const Countries = response.data.data;
     console.log(`GET Countries`, Countries);
   })
    .catch(error => console.error(error));
   };
   getCountries();

   async function Getapi() {
       const response = await fetch("https://restcountries.com/v2/all");
       const data = await response.json();
       console.log(data.name)
       document.getElementById('give').textContent = data;
   }
//    window.onload = function() {
//     function getAll() {
//         container.innerHTML = ""
//         fetch('https://restcountries.com/v2/all')
//         .then(response => response.json())
//         .then(data => {
//             data.forEach(element => {
//                 var allholder = document.createElement("div");
//                 allholder.className ="ally"
//                 allholder.innerHTML = `
//                     <div class="country-div">
//                         <div class="img-div">
//                             <img src=${element.flag} width="100%" height="100%" >
//                         </div>
//                         <div class="country-example">
//                             <h4>${element.name}</h4>
//                             <p><strong>Population:</strong> ${element.population}</p>
//                             <p><strong>Region:</strong> ${element.region}</p>
//                             <p><strong>Capital:</strong> ${element.capital}</p>
//                         </div>
//                     </div>
//             `
   Getapi()
//    mobiles.forEach(mobile => {
//     for (let key in mobile) {
//         console.log(`${key}: ${mobile[key]}`);
//     }
// });
//    document.getElementById('head').innerHTML = getCountries();


//    const createUser = (user) => {
//     axios.post('https://reqres.in/api/users', user)
//     .then(response => {
//     const addedUser = response.data;
//     console.log(`POST: user is added`, addedUser);
//     appendToDOM([addedUser]);
//     })
//     .catch(error => console.error(error));
//    };
//    console.log(createUser())

   function add() {
     let pass = 10;
     for (let i = 0; i < arguments.length; i++) {
         pass = pass + arguments[i];
     }
     return pass
   } 
   add()
   console.log(add(1,2,3))

   function getFunction(a,b) {
      if (a > b) {
          return 'greater than'
      } else {
          return'not greater than'
      }
   }
   getFunction()
   console.log(getFunction(1,2))

   function addAge(a,b,c) {
       if (a == b + c) {
           return true
       } else if (a + b == c) {
           return false
       }
       return 'question not correct'
   }
   addAge()
   console.log(addAge(5,5,10))

//    function grabName(n1,n2) {
//        let fname = '';
//        let lname = '';
//        for (let i = 0; i < n1.length; i++) {
//            fname += n1[i]
//            for (let j = 0; j < n2.length; j++) {
//                lname += n2[j]
//            }
//            return fname + lname;
//        }
//    }
//    grabName()
//    console.log(grabName('paul','miles'))



let plant = 'grow';
let look = 'Grow';
let looks = 'groW';
   function endFunction(arr,arr1,arr2) {
       if (arr == plant) {
           return true
       } else if (arr1 == look) {
           return true
       } else if (arr2 == looks) {
           return true
       } else {
           return false
       }
   }
   endFunction()
   console.log(endFunction('groW','Grow','Grow'))

let greet = new Date()
greeting = () => {
    if (greet == 4) {
        return 'Good evening PAUL'
    } else if (greet == 12) {
        return 'Good afternoon PAUL'
    }
    return 'Good morning PAUL'
}
greeting()
console.log(greeting())

graph = () => {
    let Graph = 'well';
    if (Graph === 'well') {
        return true
    }
    return false
}
graph()
console.log(graph())

function winDow() {
    if (window.localStorage) {
        console.log('this storage should be trusted')
    }
}
winDow()
console.log(winDow())

function leading() {
    let lead ='';
    for (let i = 1; i > 10; i++) {
        lead = lead + 10[i];
        if (i < 10) {
            return 'Delete this number';
        }
    }
    return 'Not a number'
}
leading()
console.log(leading())

let year = prompt('are you sure') 
    if (year == 4) {
        alert('you are so smart')
    } else if (year > 4) {
        alert('may you should try again')
    } else {
        alert('go back to school')
    }

    let userName = prompt('what your name?', '')
    if (userName == 'Paul') {
        let pass = prompt('Enter password') 
                if (pass == 'Youngprince') {
                    alert('welcome') 
        }else if (userName == '' || null) {
            alert('please do well to try again')
        } else {
            alert('i dont know your account')
        }
    }
