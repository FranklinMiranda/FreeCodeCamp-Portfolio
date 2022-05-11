// Roman Numeral Converter
console.log(new Date(2022, 4, 4,13,27))

const roNum = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL: 40, X:10,IX:9, V:5,IV:4, I:1};

console.log(roNum)

function convertToRoman (num, result = '', counter = 0) {
    if (num === 0) {return result}   
    else if (num >= Object.entries(roNum)[counter][1]) {



        let remain = parseInt(num / Object.entries(roNum)[counter][1])
        console.log(remain)
        result += Object.entries(roNum)[counter][0].repeat(remain)
        console.log(num)
        num -= remain * Object.entries(roNum)[counter][1]
        counter++
        console.log(counter)
        console.log(num)
        return convertToRoman (num, result, counter)
    }
    else {
        counter++
        return convertToRoman (num, result, counter)
    }
}

console.log(convertToRoman(2695))