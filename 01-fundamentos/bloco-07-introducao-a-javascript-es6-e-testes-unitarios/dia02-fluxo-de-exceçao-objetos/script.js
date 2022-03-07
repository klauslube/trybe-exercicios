/* const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const address = 'address';
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const customer = order.name;
  const phone = order.phoneNumber;
  const street = order.address.street;
  const number = order.address.number;
  const apt = order.address.apartment;

  console.log(`Olá, ${deliveryPerson}, entrega para ${customer}, Telefone:${phone}, ${street},nº${number} ap${apt}`);
}

customerInfo(order);

const orderModifier = (order) => {
  const newCustomer = order.name = "Luiz Silva";
  const newPrice = order.payment.total = "50";
  const pizzas = Object.keys(order.order.pizza);
  const drinks = order.order.drinks.coke.type;

  console.log(`Olá ${newCustomer}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$ ${newPrice},00.`);

}

orderModifier(order); */



const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/* const turnoNoite = (obj,chave,value) => {
  obj[chave] = value;
};
turnoNoite(lesson2,'turno','noite');
console.log(lesson2); */

/* const listKeys = (obj) => Object.keys(obj);
console.log(listKeys(lesson1)); 

const length = (obj) => Object.keys(obj).length;
console.log(length(lesson1));

const values = (obj) => Object.values(obj);
console.log(lesson2); */

const allLessons = Object.assign({}, {lesson1,lesson2,lesson3});
console.log(allLessons);

/* const totalStudent = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for(let index in array) {
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
}
console.log(totalStudent(allLessons)); */
/* 
const keyValue = (obj,key) => Object.values(obj)[key];
console.log(keyValue(lesson1, 0)); */

/* const verify = (obj,key,value) => {
  let isEqual = false;
  const array = Object.entries(obj);
  for(let index in array) {
    if(array[index][0] === key && array[index][1] === value) isEqual = true;
  }
  return isEqual;
}
console.log(verify(lesson2, 'professor','Carlos')); */


const contaStudent = (obj) => {
  let total = 0;
  const arr = Object.keys(obj);
  for(let i in arr) {
    if(obj[arr[i]].materia === 'Matemática') {
      total += obj[arr[i]].numeroEstudantes;
    }
  }
  return total;
}
console.log(contaStudent(allLessons));