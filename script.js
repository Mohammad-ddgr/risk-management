// لیست جفت ارزها + طلا و شاخص‌ها
const pairs = [
  "EURUSD","GBPUSD","USDJPY","USDCHF","USDCAD","AUDUSD","NZDUSD",
  "EURGBP","EURJPY","EURCHF","EURCAD","EURAUD","EURNZD",
  "GBPJPY","GBPCHF","GBPCAD","GBPAUD","GBPNZD",
  "AUDJPY","AUDCHF","AUDCAD","AUDNZD",
  "NZDJPY","NZDCHF","NZDCAD",
  "CADJPY","CADCHF",
  "CHFJPY",
  "XAUUSD","US30","NAS100"
];


// اضافه کردن به منو انتخاب
const pairSelect = document.getElementById("pair");
pairs.forEach(p => {
  let option = document.createElement("option");
  option.value = p;
  option.textContent = p;
  pairSelect.appendChild(option);
});

// محاسبه لات
function calculateLot() {
  let balance = parseFloat(document.getElementById("balance").value);
  let risk = parseFloat(document.getElementById("risk").value);
  let sl = parseFloat(document.getElementById("sl").value);
  let pair = document.getElementById("pair").value;

  if (isNaN(balance) || isNaN(risk) || isNaN(sl) || sl <= 0) {
    document.getElementById("result").innerHTML = "⚠️ لطفاً مقادیر معتبر وارد کنید.";
    return;
  }

  let riskAmount = (balance * (risk / 100));
  let lotSize = riskAmount / (sl * 10); // فرمول ساده برای محاسبه

  document.getElementById("result").innerHTML =
    `✅ Pair: ${pair}<br>Lot Size: <strong>${lotSize.toFixed(2)}</strong>`;
}
