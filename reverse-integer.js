/**
 * @param {number} x
 * @return {number}
 */
const now = require("performance-now")
const start = now()
const end = now()

var reverse = function(x) {
  console.log("runtime Start: ",start.toFixed(3))
    const regx = /[-]/g;
    let finalArr = 0;
    let xArr = x.toString().split("").reverse();
    if(regx.test(x)){
        let markIndex = x.toString().split("").indexOf("-");
        if(markIndex === 0){
            xArr.pop();
            xArr.unshift("-");
            finalArr = xArr.join("");
            if(Math.abs(finalArr) > Math.pow(2, 31)){
                // finalArr = 0;
                console.log(0);
                console.log("runtime End: ",(start-end).toFixed(3))
                return finalArr
            }
            console.log(Number(finalArr));
            console.log("runtime End: ",(start-end).toFixed(3))
            return Number(finalArr);
        }
    } else {
        let y = xArr.join("");
        let yNum = Number(y);
        if(Math.abs(yNum) > Math.pow(2, 31)){
            yNum = 0;
            console.log(yNum)
            console.log("runtime End: ",(start-end).toFixed(3))
            return yNum
        }
        console.log(xArr.join(""))
        console.log("runtime End: ",(start-end).toFixed(3))
        return xArr.join("");
    }
};

reverse(-1235);
reverse(1534236469);
reverse(123);
reverse(120);