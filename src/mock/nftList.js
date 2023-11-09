const today = new Date();
const yesterday = new Date(today);
const about30daysBeforeYesterday = new Date(today);
const about60daysBeforeYesterday = new Date(today);

yesterday.setDate(yesterday.getDate() - 1);
about30daysBeforeYesterday.setDate(yesterday.getDate() - 30);
about60daysBeforeYesterday.setDate(yesterday.getDate() - 60);

const nftList = [
  {
    title: "Need vs. Want Challenge",
    date: "3 days",
    reason: "Differentiate between needs and wants",
    // accessorName: "Alicer Ng",
    redirect: true,
  },
  {
    title: "Expense Evaluator",
    date: "5 days",
    reason: "Would you buy it again?",
    // accessorName: "Summer Lim",
    redirect: true,
  },
  {
    title: "Cost Cutter",
    date: "3 days",
    reason: "This purchase is not necessary",
    // accessorName: "Vincent Lim",
    redirect: true,
  },
];
export default nftList;
