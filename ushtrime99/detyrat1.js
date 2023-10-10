// const {sum} = require ('./detyrat');
// sum ('num1,num2');

// let arr1=[2,4,6,7,2];
// let arr2=[2,5,6,4,7];

// let arr3=[]

// for(let i in arr1){
//   arr3.push(arr1[i] +arr2[i] )
// }
// console.log(arr3);

// const sum = (a,b)=>{
//   return new Promise((resolve)=>{
//     resolve(a+b)
//   });
// }
// sum(10,5).then((res)=>{
// console.log(res);
// });




  

// function funksioniresolve() {
//   return new Promise((resolve, reject) => {
//     resolve("Im resolved");
//   });
// }

// funksioniresolve()
//   .then((rezultati) => {
//     console.log(rezultati); 
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//   Add an parameter to your function


//   function birthdaycake(bday) {
//     return new Promise((resolve, reject) => {
//       if (bday) {
//         resolve("Kayo is healthy");
//       } else {
//         reject('Kayo is sick');
//       }
//     });
//   }

//   birthdaycake(false)
//   .then((rezultati) => {
//     console.log(rezultati); 
//   })
//   .catch((err) => {
//     console.error(err);
//   });
//   birthdaycake(true)
//   .then((rezultati) => {
//     console.log(rezultati); 
//   })
//   .catch((err) => {
//     console.error(err);
//   });
//   birthdaycake(true)
//   .finally((rezultati) => {
//     console.log(rezultati); 
  
//   });
//   function birthdaycake(bday) {
//     return new Promise((resolve, reject) => {
//       if (bday) {
//         resolve("Kayo is healthy");
//       } else {
//         reject('Kayo is sick');
//       }
//     });
//   }

  // birthdaycake(true)
  // .then((rezultati) => {
  //   console.log(rezultati); 
  // })
  // .catch((err) => {
  //   console.error(err);
  // });
  
  // birthdaycake(true)
  // .then((rezultati) => {
  //   console.log(rezultati); 
  // })
  // .catch((err) => {
  //   console.error(err);
  // });
  // birthdaycake(true)
  // .finally((rezultati) => {
  //   console.log(rezultati); 
  // if(rezultati=true){
  // console.log("I have (n) cakes,And Im happy")
  // }else {
  //   console.log("There is no cake and I am sad")
  // }
  // });

//   const cake = (health) => {
//     return new Promise((resolve, reject) => {
//         health
//             ? resolve("I have cakes and I'm happy!")
//             : reject("There is no cake and I'm sad!");
//     });
// };

    //On reject() handle it to order a cake then re-start the function
    //again to celebrate party

    const cake = (health) => {
      return new Promise((resolve, reject) => {
          health
              ? resolve("I have cakes and I'm happy!")
              : reject("There is no cake and I'm sad!");
      });
  };

const orderCake = () => {
    console.log('Ordering a cake...');
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            const cakeReceived = true; 
            if (cakeReceived) {
                resolve('Cake ordered successfully!');
            } else {
                reject('Failed to order the cake.');
            }
        }, 1500); 
    });
};

const celebrateParty = () => {
    console.log('Party time!');
};

cake(false)
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
        return orderCake(); 
    })
    .then((result) => {
        console.log(result); 
        celebrateParty(); 
    })
    .catch((err) => {
        console.log(err); 
    });