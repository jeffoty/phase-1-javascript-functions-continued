function saturdayFun(skate = "roller-skate") {
    return `This Saturday, I want to ${skate}!`;
}


function  mondayWork(office = "go to the office") {
    return `This Monday, I will ${office}.` 
}

function wrapAdjective(par1="*"){
    return function(par="special"){
        return `You are ${par1}${par}${par1}!`;
    };
}
