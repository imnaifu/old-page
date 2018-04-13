/* pad 'n' to 'width' using 'z'(default 0) */
function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

/* return string of formated time hh:mm:ss */
function seconds2hour(seconds){
    const hour = (seconds / 3600).toFixed(0);
    const min = Math.floor((seconds % 3600) / 60);
    const second = (seconds % 3600 % 60).toFixed(0);
    return `${pad(hour,2)}:${pad(min, 2)}:${pad(second, 2)}`;
}


/*
*   naifu
*   返回一个指定长度的以目标string为中心的左右等长的substring
*   input:
*       fullString: string
*       returnLength: int
*       targetStringStart: int
*       targetStringLength: int
*   return object
*/
function getSubstring(fullString, returnLength, targetStringStart, targetStringLength){
    let result = {
        text: null,
        targetStart: null,
        targetLength: targetStringLength
    };

    let fullStringLength = fullString.length;
    if (fullString.length <= returnLength || targetStringLength >= returnLength){
        //rare situation
        result['text'] = fullString;
        result['targetStart'] = targetStringStart;
    }else{
        //normal situation
        let singleSideLength = Math.ceil((returnLength - targetStringLength)/2);

        //handle border issue
        let leftSide = targetStringStart - singleSideLength;
        leftSide = (leftSide>0)?leftSide:0;
        let rightSide = targetStringStart + targetStringLength + singleSideLength;
        rightSide = (rightSide>(fullStringLength-1))?(fullStringLength-1):rightSide;

        let targetStart = 0
        if (leftSide === 0){
            targetStart = targetStringStart;
        }else{
            targetStart = singleSideLength;
        }

        result['text'] = fullString.substring(leftSide, rightSide);
        result['targetStart'] = targetStart;
    }

    return result;
}

/*
  jquery $.type func
  return string of the type of the input
*/ 
function type(obj){
    if ( obj == null ) {
        return obj + "";
    }

    var class2type = {};
    // 生成class2type映射
    "Boolean Number String Function Array Date RegExp Object Error Null Undefined".split(" ").map(function(item, index) {
        class2type["[object " + item + "]"] = item.toLowerCase();
    })

    // Support: Android <=2.3 only (functionish RegExp)
    return typeof obj === "object" || typeof obj === "function" ?
        class2type[ toString.call( obj ) ] || "object" :
        typeof obj;
}

/* 
  naifu 2017-12-19
  transfer an array to object 
  if input is array of object, then can use 2nd parameter as the key of the returned object.
  e.g: let arr =  [
            {'id': '31', 'name': 'abc'},
            {'id': '42', 'name': 'bcd'}	
          ];
  arr2obj(arr, 'id');
  will return {
    31: {'id': '31', 'name': 'abc'},
    42: {'id': '42', 'name': 'bcd'}	
  }
  if 2nd parameter empty, will use the array index as the key
*/
function arr2obj(arr, key){
    let arg_len = arguments.length;
    let obj = {};
    if (arg_len < 1){
        throw new Error('Missing parameters [function arr2obj]');
    }else if (arg_len > 2){
        throw new Error('More than 2 parameters [function arr2obj]');
    }else {
        if (this.type(arr) !== 'array'){
            throw new Error('First parameter must be an array [function arr2obj]');
        }else{
            if (arr.length !== 0){
                if (arg_len === 1){
                    arr.forEach(function(val, index){
                    obj[index] = val;
                    });												
                }else{	
                    arr.forEach((val, index) => {
                        if (this.type(val) === 'object'){
                            obj[val[key]] = val;
                        }else{
                            obj[index] = val;
                        }
                    });						
                }
            }
        }
    }
    return obj;
}