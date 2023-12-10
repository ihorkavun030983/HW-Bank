
const userData = {
  USD: 1000,
  EUR: 900,
  UAH: 15000,
  BIF: 20000,
  AOA: 100
};

const bankData = {
    USD: {
        max: 3000,
        min: 100,
        img: '💵'
    },
    EUR: {
        max: 1000,
        min: 50,
        img: '💶'
    },
    UAH: {
        max: 0,
        min: 0,
        img: '💴'
    },
    GBP: {
        max: 10000,
        min: 100,
        img: '💷'
    }
}


function getMoney(){
  myPromise = new Promise((resolve, reject) => {
    const question = 'Подивитися баланс карті?';
    
    if (confirm(question)) {
      resolve();
    } else {
      reject();
    }
  }
  );

myPromise
        .then(
          function() {
            
          let currency;
            do {
              currency = prompt('Введіть валюту (USD, EUR, UAH, BIF, AOA)');
            } while (!userData.hasOwnProperty(currency));

            alert(`Баланс становить: ${userData[currency]} ${currency}`);
          },

          function() {
          let currency;
       
            do {
              currency = prompt('Введіть валюту (USD, EUR, UAH, GBP)');
              } while (!bankData.hasOwnProperty(currency));
  
             if (bankData[currency].max > 0) {
              let amount;
             do {
              amount = parseInt(prompt(`Введіть суму для зняття (${bankData[currency].min} - ${bankData[currency].max}):`));
             if (amount > bankData[currency].max) {
              alert(`Введена сума більша за доступну. Максимальна сума зняття: ${bankData[currency].max}.`);
              return;
              } else if (amount < bankData[currency].min) {
              alert(`Введена сума менша за доступну. Мінімальна сума зняття: ${bankData[currency].min}.`);
              return;
              }
              } while (isNaN(amount));
    
             if (amount > userData[currency]) {
             alert(`Введена сума більша за доступну. Максимальна сума зняття: ${userData[currency]}.`);
             return;
             }
             alert(`От Ваші гроші ${amount} ${currency} 💵`);
             }
             }
             )
             .finally(
              function() {
                alert( 'Дякую, гарного дня 😊' )
              }
            )

}


getMoney()
