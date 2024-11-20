// Promise
let promise = new Promise((resolved, rejected) => {
    let a = 33;
    if (a > 5) {
      resolved(10);
    } else {
      rejected(0);
    }
  });
  
  // promise
  //   .then((res) => {
  //     let task = res;
  //     console.log(res);
  //     return task * 12;
  //   })
  //   .catch((err) => {
  //     // console.log(err);
  //     alert(err);
  //   })
  //   .finally(() => {
  //     console.log("done");
  //   });
  
  // http://127.0.0.1:5501/promise.html
  
  // console.log(promise);
  // let pro1 = new Promise((a,b)=>{});
  
  //////////////////////////
  
  promise
    .then((res) => {
      let task = res;
      console.log(res);
      return task * 12;
    })
    .then((res) => {
      console.log(res);
    });
  
  // promisedan qaytgan javob then ichida kelgan callback function da kelgan paramettrda keladi
  
  // promise Methods
  // resolved() => avtamatski resolve boladi
  // rejected() => avtamatski reject boladi
  // all() 
  // any()
  // race()
  // allsettled()