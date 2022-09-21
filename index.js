// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);

const countDown = (num) => {
    let start = 0 
  while (num >= start) {
    console.log(num)
    num -= 1
  }
}


function writeCards(name, feel) {
    let arr = []
    for (let i = 0; i < name.length; i++) {
     arr.push(`Thank you, ${name[i]}, for the wonderful ${feel} gift!`);

    }
  
    return arr;
  }
  
  