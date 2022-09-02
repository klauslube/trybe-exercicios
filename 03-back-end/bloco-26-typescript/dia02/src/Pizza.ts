type Slices = 4 |6| 8;
type Common = 'Calabresa' | 'Frango' | 'Pepperoni'
type Vegetarian = '' 

interface Pizza {
  flavor: string;
  slices: Slices;
}

const calabresa: Pizza = {
  flavor: 'calabresa',
  slices: 8,
}

const marguerita: Pizza = {
  flavor: 'marguerita',
  slices: 6,
}

const nutela: Pizza = {
  flavor: 'nutela',
  slices: 4,
}

