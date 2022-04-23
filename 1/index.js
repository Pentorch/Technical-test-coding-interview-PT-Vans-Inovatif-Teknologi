const fruits = [
  {
    fruitId: 1,
    fruitName: "Apel",
    fruitType: "IMPORT",
    stock: 10,
  },
  {
    fruitId: 2,
    fruitName: "Kurma",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 3,

    fruitName: "Apel",
    fruitType: "IMPORT",
    stock: 50,
  },
  {
    fruitId: 4,
    fruitName: "Manggis",
    fruitType: "LOCAL",
    stock: 100,
  },
  {
    fruitId: 5,
    fruitName: "Jeruk Bali",
    fruitType: "LOCAL",
    stock: 10,
  },
  {
    fruitId: 5,
    fruitName: "Kurma",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 5,
    fruitName: "Salak",
    fruitType: "LOCAL",
    stock: 150,
  },
];

// NO 1.
const fruitNames = [
  ...new Map(fruits.map((item) => [item.fruitName, item])).values(),
];

const fruitName = fruitNames.map((item) => {
  return item.fruitName;
});

console.log("Andy", fruitName);

// No 2.
// LOCAL
const Wlocal = fruits.filter((item) => {
  return item.fruitType === "LOCAL";
});

console.log("Local", Wlocal);

const stockWadah = Wlocal.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.stock;
}, 0);

console.log("Stock", stockWadah);

// IMPORT
const Wimport = fruits.filter((item) => {
  return item.fruitType === "IMPORT";
});

console.log("Import", Wimport);

const stockWadah2 = Wimport.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.stock;
}, 0);

console.log("Stock", stockWadah2);

// NO 4.
// Ada beberapa PR terutama bagian duplicate data Tapi sudah solved

// const comments = [
//         {
//           commentId: 1,
//           commentContent: "Hai",
//           replies: [
//             {
//               commentId: 11,
//               commentContent: "Hai juga",
//               replies: [
//                 {
//                   commentId: 111,
//                   commentContent: "Haai juga hai jugaa",
//                 },
//                 {
//                   commentId: 112,
//                   commentContent: "Haai juga hai jugaa",
//                 },
//               ],
//             },
//             {
//               commentId: 12,
//               commentContent: "Hai juga",
//               replies: [
//                 {
//                   commentId: 121,
//                   commentContent: "Haai juga hai jugaa",
//                 },
//               ],
//             },
//           ],
//         },
//         {
//           commentId: 2,
//           commentContent: "Halooo",
//         },
//       ];

// let data = comments.find((item) => item.commentId)

//   data = comments.map((item) =>  {
//     return item
//   })

//   console.log("data", data);

// const comments = [
// {
// commentId: 1,
// commentContent: 'Hai',
// replies: [
// {
// commentId: 11,
// commentContent: 'Hai juga',
// replies: [
// {
// commentId: 111,
// commentContent: 'Haai juga hai jugaa'
// },
// {
// commentId: 112,
// commentContent: 'Haai juga hai jugaa'
// }
// ]
// },
// {
// commentId: 12,
// commentContent: 'Hai juga',
// replies: [
// {
// commentId: 121,
// commentContent: 'Haai juga hai jugaa'
// }
// ]
// }
// ]
// },
// {
// commentId: 2,
// commentContent: 'Halooo'
// }
// ]

// const replies = comments.map((item) => {
//   return item.replies;
// });

// console.log( replies );
//                                                         let text = 'Hello world! And all the people';
// let length = text.split( '' ).filter( c => c != ' ' ).length;
// console.log( length );
