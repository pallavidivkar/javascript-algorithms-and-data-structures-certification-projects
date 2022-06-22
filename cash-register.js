/*Solution*/
function checkCashRegister(price, cash, cid) {
  let change = parseFloat((cash-price).toFixed(2));
  const curreny2amount = {
    'PENNY' : 0.01,
    'NICKEL' : 0.05,
    'DIME' : 0.1,
    'QUARTER' : 0.25,
    'ONE' : 1,
    'FIVE' : 5,
    'TEN' : 10,
    'TWENTY' : 20,
    'ONE HUNDERD' : 100
  }
  let returnchange = [];
  let totalcid = 0;
  cid.forEach(item => {
    totalcid +=item[1];
  })
  totalcid = parseFloat(totalcid.toFixed(2));
  if (totalcid < change) {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }
  if (totalcid === change) {
    return {status: "CLOSED", change: cid}
  }
  cid = cid.reverse();
  let changeleft = change;
  cid.forEach(item => {
    if (change === item[1]){
      changeleft = 0;
      returnchange.push(item);
      return returnchange;
    }
    if (((change > item[1]) || (change >= curreny2amount[item[0]])) && (item[1]!==0)) {
      if (changeleft >= item[1]) {
        changeleft -= item[1];
        changeleft = parseFloat(changeleft.toFixed(2));
        returnchange.push(item);
      }
      else {
        if (item[1] !== 0) {
          let i = 1;
          let a = Math.trunc(changeleft/curreny2amount[item[0]]);
          if (a > 0) {
            changeleft -= (curreny2amount[item[0]]*a);
            changeleft = parseFloat(changeleft.toFixed(2));
            returnchange.push([item[0],curreny2amount[item[0]]*a]);
          }
        }
      }
    }
  })
  if (changeleft === 0) {
    return {status: "OPEN", change: returnchange};
  }
  if (changeleft > 0) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }  
}

console.log(checkCashRegister(95.58, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))

/** Tests
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
**/
