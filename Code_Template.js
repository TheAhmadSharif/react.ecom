let t = [1, 2, 3].reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}
  );

console.log(t);

 

const objects = [
    {
        title: "Test",
        price: 12.99
    },
    {
        title: "Test1",
        price: 14.99
    }
];

const totalPrice = objects.reduce((accumulator, currentObject) => {

    console.log(accumulator, '________ 22 ______')
    return accumulator + currentObject;
}, 0);

console.log("Total Price:", totalPrice);
