document.addEventListener("DOMContentLoaded", () => {
  const clearBtn = document.querySelector("#clear");
  clearBtn.addEventListener("click", () => { 
    const inputs = document.querySelectorAll(".main input");
    inputs.forEach(input => {
      input.value = "";
    });
  });

  const reverse = document.querySelector(".reverse img");
  reverse.addEventListener("click", () => {
    const amount1 = document.querySelector("#amount1");
    const amount2 = document.querySelector("#amount2");
    let temp = amount1.value;
    amount1.value = amount2.value;
    amount2.value = temp;
  });
});
