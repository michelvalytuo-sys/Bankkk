function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email === "Jeanjacques.B2026@gmail.com" && password === "Nabil2026B") {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("app").style.display = "flex";

    generateTransactions();
    createChart();
  } else {
    document.getElementById("error").innerText = "Identifiants incorrects";
  }
}

/* NAVIGATION */
function showSection(id) {
  let sections = document.querySelectorAll(".section");
  sections.forEach(s => { s.style.display = "none"; });
  document.getElementById(id).style.display = "block";
}

/* VIREMENT BLOQUÉ */
function blocked() {
  alert("Transaction refusée : COMPTE BLOQUÉ");
}

/* 50 TRANSACTIONS */
function generateTransactions() {
  let names = [
    "Salaire", "Restaurant", "Amazon", "Supermarché",
    "Netflix", "Transport", "Essence", "Apple",
    "Pharmacie", "Cinéma", "Internet", "Électricité"
  ];

  let container = document.getElementById("transactions");
  container.innerHTML = "";

  for (let i = 0; i < 50; i++) {
    let amount = (Math.random() * 200).toFixed(2);
    let type = Math.random() > 0.5 ? "+" : "-";

    let div = document.createElement("div");
    div.className = "transaction";
    div.innerHTML = `
      <span>${names[Math.floor(Math.random() * names.length)]}</span>
      <span class="${type === "+" ? "plus" : "minus"}">${type}${amount} €</span>
    `;
    container.appendChild(div);
  }
}

/* GRAPHIQUE */
function createChart() {
  let ctx = document.getElementById("chart");
  new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Logement", "Transport", "Alimentation", "Loisirs", "Épargne"],
      datasets: [{
        data: [800, 150, 300, 120, 500]
      }]
    }
  });
}

/* SOLDE CACHER / VOIR AVEC ANIMATION */
function toggleBalance() {
  let balanceElements = [
    document.getElementById("balance"),
    document.querySelector(".card .card-balance")
  ];

  balanceElements.forEach(el => {
    el.style.opacity = 0;
    setTimeout(() => {
      if (el.innerText !== "••••••") {
        el.innerText = "••••••";
      } else {
        el.innerText = "12 890,00 €";
      }
      el.style.opacity = 1;
    }, 200);
  });
}
