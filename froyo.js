const froyoOrder = () => {
  let customerOrderArr = customerOrderInput.split(',');
  const customerOrder = {};

  for (itemOrdered of customerOrderArr) {
    if (customerOrder[itemOrdered]) {
      customerOrder[itemOrdered] += 1;
    } else {
      customerOrder[itemOrdered] = 1;
    }
  }
  console.table(customerOrder);
};

let customerOrderInput = prompt(
  'Please enter your order below! Use a comma to separate each item',
  'vanilla,vanilla,vanilla,strawberry,coffee,coffee'
);

froyoOrder();
