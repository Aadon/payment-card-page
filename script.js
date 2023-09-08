// const cardNumber = document.querySelectorAll(".card-digits");

// cardNumber.forEach((fourDigits, index) => {
//   fourDigits.addEventListener("input", (e) => {
//     let value = e.target.value.replace(/\D/g, "");

//     if (value > 16) {
//       value = value.slice(0, 16)
//     }
//     const inputValues = Array.from(cardNumber).map(input => 
//       input.value
//     );
//     document.querySelector(".cc-number").textContent = inputValues.join("");
//     if (value.length > 4) {
//       value = value.slice(0, 4);
//     }
//     e.target.value = value;
//     if (value.length === 4 && index < cardNumber.length - 1) {
//       cardNumber[index + 1].focus();
//     }
//   });
// });
// const updateCardNumber = () => {
  const cardNumber = document.querySelectorAll(".card-digits");
  cardNumber.forEach((fourDigits, index) => {
    fourDigits.addEventListener("input", (e) => {
      let value = e.target.value.replace(/\D/g, "");

      if (value.length > 16) {
        value = value.slice(0, 16);
      }
      const inputValues = Array.from(cardNumber).map((input) => input.value);
      document.querySelector(".cc-number").textContent = inputValues
        .join("")
        .replace(/[^0-9]+/gi, "")
        .replace(/(.{4})/g, "$1 ");

      if (value.length > 4) {
        value = value.slice(0, 4);
      }

      e.target.value = value;

      if (value.length === 4 && index < cardNumber.length - 1) {
        cardNumber[index + 1].focus();
      }
    });
  });
// };
// const cardHolderName = () => {
const cardHolder = document.querySelector('.card-holder');
cardHolder.addEventListener('input', () => {
  const inputName = document.querySelector(".card-holder").value;
  if (inputName.split(' ').length >=2) {
    document.querySelector(".card-holder-name").textContent =
      document.querySelector(".card-holder").value;
      cardHolder.textContent = inputName
  }
  
});
// };
// const expiryDetails = () => {
  const cardExpiryMonth = document.getElementById("expiry-month");
  cardExpiryMonth.addEventListener("input", () => {
    document.querySelector(".exp-month").textContent =
      document.getElementById("expiry-month").value;
  });

  const cardExpiryYear = document.getElementById("expiry-year");
  cardExpiryYear.addEventListener("input", () => {
    document.querySelector(".exp-year").textContent =
      document.getElementById("expiry-year").value;
  });
// }

// const cvvValidation = () => {
const cvvMouseEnter = document.querySelector(".cvv");
cvvMouseEnter.addEventListener("mouseenter", () => {
  document.querySelector(".front").style.transform =
    "perspective(1000px) rotateY(-180deg)";
  document.querySelector(".back").style.transform =
    "perspective(1000px) rotateY(0deg)";
});
const cvvMouseLeave = document.querySelector(".cvv");
cvvMouseLeave.addEventListener("mouseleave", () => {
  document.querySelector(".front").style.transform =
    "perspective(1000px) rotateY(0deg)";
  document.querySelector(".back").style.transform =
    "perspective(1000px) rotateY(180deg)";
});
const cvvInput = document.querySelector(".cvv");
cvvInput.addEventListener("input", (e) => {
  let value = e.target.value;
  value = value.replace(/\D/g, "");
  document.querySelector(".back-cvv").textContent = document.querySelector(".cvv").value
});
// }

const form = document.querySelector('form');
form.addEventListener("submit", (e) => {
  // e.preventDefault();
  
});

