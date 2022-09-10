// /* 
// 1. প্রত্যাহার বোতাম ইভেন্ট হ্যান্ডলার যোগ করুন
// 2. getInputFieldValueById ফাংশন ব্যবহার করে টাকা উত্তোলন করুন
// 3. getTextElementValueById ফাংশন ব্যবহার করে আগের টাকা তোলার পরিমাণ পান
// 4. নতুন উইথড্র মোট গণনা করুন এবং মান সেট করুন
// 4-5: setTextElementValueById ফাংশন ব্যবহার করে নতুন উইথড্র মোট সেট করুন
// 5. getTextElementValueById ফাংশন ব্যবহার করে আগের ব্যালেন্স মোট পান
// 6. নতুন ব্যালেন্স মোট হিসাব করুন
// 7. setTextElementValueById ব্যবহার করে মোট ব্যালেন্স সেট করুন
// */

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");
  const previousWithdrawTotal = getTextElementValueById("withdraw-total");
  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  setTextElementValueById('withdraw-total', newWithdrawTotal);
  const previousBalanceTotal = getTextElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal - newWithdrawTotal;
  setTextElementValueById("balance-total", newBalanceTotal);
});
