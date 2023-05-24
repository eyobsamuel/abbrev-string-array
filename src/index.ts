/**
 * Abbreviate strings by assigning a unique value to each element within the array.
 *
 * @param {string[]} strings - List of strings
 * @param {{matchAlikeLen: boolean, matchLen: boolean, suffix: string, ignoreCase: boolean}} [config = { matchAlikeLen: undefined, matchLen: undefined, suffix: undefined, ignoreCase: true }] - Configuration
 * @returns {string[]} - List of abbreviated strings
 *
 */

interface IOptions {
  matchAlikeLen?: boolean;
  matchLen?: boolean;
  suffix?: string;
  minLen?: number;
  ignoreCase?: boolean;
}

function trimSuffix(oldArr: string[], result: string[]) {
  for (let i in oldArr)
    if (result[i] === oldArr[i] + ".") result[i] = oldArr[i] || "";
  return result;
}

function abbrevStringArray(
  arr: Array<string>,
  { matchAlikeLen, matchLen, suffix, minLen, ignoreCase = true }: IOptions = {}
) {
  let originalArr = [...arr]
  if (matchAlikeLen === true && matchLen === true)
    throw new Error(
      "Exactly one true value should be passed from matchAlikeLen and matchLen."
    );
  if (matchAlikeLen == null && matchLen == null) {
    let result = arr.map(
      (str: string, idx: number) => {
          let char =  [...str].reduce((acc: string, val) => {
          return (minLen && minLen > acc.length) || arr.slice(0, idx).some((subStr: string) => {
            if (ignoreCase)
              return (
                subStr.toLowerCase() != str.toLowerCase() &&
                !subStr.toLowerCase().indexOf(acc.toLowerCase())
              );
            else return subStr != str && !subStr.indexOf(acc);
          })
            ? acc + val
            : acc;
        }) + (suffix || "")
        arr[idx] = char;
        return char
      }
    );
    
    return suffix ? trimSuffix(originalArr, result) : result;
  }
  if (matchAlikeLen) {
    let result = arr.map(
      (str: string, idx) => {
        let char = [...str].reduce((acc, val) => {
          if (ignoreCase)
            return arr.some(
              (subStr: string) => subStr != str && !subStr.indexOf(acc)
            )
              ? acc + val
              : acc;
          else
            return arr.some(
              (subStr: string) =>
                subStr.toLowerCase() != str.toLowerCase() &&
                !subStr.toLowerCase().indexOf(acc.toLowerCase())
            )
              ? acc + val
              : acc;
        }) + (suffix || "")
        arr[idx] = char;
        return char
      }
    );
    return suffix ? trimSuffix(originalArr, result) : result;
  }
  if (matchLen) {
    let tempStrings: string[] = arr.map(
      (str: string, idx: number) => {
        let char =  [...str].reduce((acc, val) => {
          return arr
            .slice(0, idx)
            .some((subStr: string) => subStr != str && !subStr.indexOf(acc))
            ? acc + val
            : acc;
        }) + (suffix || "")
        arr[idx] = char;
        return char
      });
    var longestLength = tempStrings?.sort(
      (a: string, b: string) => b.length - a.length
    )[0]?.length;
    let result = arr.map((subStr: string) => subStr.slice(0, longestLength));
    return suffix ? trimSuffix(originalArr, result) : result;
  }
  return [];
}

export default abbrevStringArray;
