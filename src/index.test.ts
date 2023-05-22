import abbrev from "./index";

describe("abbrevStringArray will abbreviate", () => {
  let strArr: string[];
  beforeAll(() => {
    strArr = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
  });

  test("list of strings", () => {
    expect(abbrev(strArr)).toEqual([
      "M",
      "T",
      "W",
      "Th",
      "F",
      "S",
      "Su",
    ]);
  });

  test("list of strings with suffix ", () => {
    let myStr = [
      "M",
      "Tuesday",
      "Thursday",
    ];
    expect(abbrev(myStr, { suffix: "." })).toEqual([
      "M",
      "T.",
      "Th.",
    ]);
});

  test("list of strings", () => {
    expect(abbrev([
      "weekend", "weekday"
    ],{matchLen: true})).toEqual([
      "weeke", "weekd"
    ]);
  });

  test("list of strings without the ignoreCase option set to anything should be set true", () => {
    let strArr = ["tuesday", "Thursday"];
    expect(abbrev(strArr, { ignoreCase: true })).toEqual([
      "t",
      "Th",
    ]);
  });

  test("list of strings without the ignoreCase option set to anything should be set true", () => {
    let strArr = ["tuesday", "Thursday"];
    expect(abbrev(strArr, { ignoreCase: false })).toEqual([
      "t",
      "T",
    ]);
  });

  test("list of strings with the adjustToMatch option set to alike 1", () => {
    expect(abbrev(strArr, { matchAlikeLen: true })).toEqual([
      "M",
      "Tu",
      "W",
      "Th",
      "F",
      "Sa",
      "Su",
    ]);
  });

  test("list of strings with the adjustToMatch option set to alike 2", () => {
    let myStr = ["tuesday", "Thursday"];
    expect(
      abbrev(myStr, { matchAlikeLen: true, ignoreCase: true })
    ).toEqual(["t", "T"]);
  });

  test("list of strings with the adjustToMatch option set to alike 3", () => {
    let myStr = ["tuesday", "Thursday"];
    expect(
      abbrev(myStr, { matchAlikeLen: true, ignoreCase: false })
    ).toEqual(["tu", "Th"]);
  });
  ///////////////////////////////////

  test("list of strings with the adjustToMatch option set to all", () => {
    expect(abbrev(strArr, { matchLen: true })).toEqual([
      "Mo",
      "Tu",
      "We",
      "Th",
      "Fr",
      "Sa",
      "Su",
    ]);
  });

  test("throws an error when both parameters matchLen and matchAlikeLen are sent", () => {
    expect(() => {
      abbrev(strArr, {
        ignoreCase: true,
        matchLen: true,
        matchAlikeLen: true,
      });
    }).toThrowError(
      "Exactly one parameter should be passed from matchAlikeLen and matchLen"
    );
  });
});
