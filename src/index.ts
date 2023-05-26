/**
 * Abbreviate strings by assigning a distinct minimum value to each element in the array.
 *
 * @param {string[]} strings - List of strings
 * @param {{matchAlikeLen: boolean, matchLen: boolean, suffix: string, caseSensitive: boolean}} [config = { matchAlikeLen: undefined, matchLen: undefined, suffix: undefined, caseSensitive: true }] - Configuration
 * @returns {string[]} - List of abbreviated strings
 *
 */

interface IOptions {
  matchAlikeLen?: boolean;
  matchLen?: boolean;
  suffix?: string;
  minLen?: number;
  caseSensitive?: boolean;
}

function trimSuffix(oldArr: string[], result: string[]) {
  for (let i in oldArr)
    if (result[i] === oldArr[i] + ".") result[i] = oldArr[i] || "";
  return result;
}

function abbrevStringArray(
  arr: Array<string>,
  { matchAlikeLen, matchLen, suffix, minLen, caseSensitive = false }: IOptions = {}
) {
  let originalArr = [...arr]
  if (matchAlikeLen === true && matchLen === true)
    throw new Error(
      "Exactly one true value should be passed from matchAlikeLen and matchLen."
    );
  if ((matchAlikeLen == null && matchLen == null) || (matchAlikeLen == false && matchLen == null) || (matchAlikeLen == null && matchLen == false)) {
    let result = arr.map(
      (str: string, idx: number) => {
          let char = str.length> 0 ? [...str].reduce((acc: string, val) => {
          return (minLen && minLen > acc.length) || arr.slice(0, idx).some((subStr: string) => {
            if (!caseSensitive)
              return (
                subStr.toLowerCase() != str.toLowerCase() &&
                !subStr.toLowerCase().indexOf(acc.toLowerCase())
              );
            else 
              return subStr != str && !subStr.indexOf(acc);
          })
            ? acc + val
            : acc;
        }) + (suffix || "") : ""
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
          if (caseSensitive)
            return (minLen && minLen > acc.length) || arr.some(
              (subStr: string) => subStr != str && !subStr.indexOf(acc)
            )
              ? acc + val
              : acc;
          
          else 
            return (minLen && minLen > acc.length) || arr.some(
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
        return [...str].reduce((acc, val) => {
          return (minLen && minLen > acc.length) || arr
            .slice(0, idx)
            .some((subStr: string) => subStr != str && !subStr.indexOf(acc))
            ? acc + val
            : acc;
        }) + (suffix || "")
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
