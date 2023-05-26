import abbrev from "./index";


describe("abbrevStringArray will abbreviate list of strings", () => {
  // positive case
  describe("with configuration parameter", () => {
    test("set to default (default: matchAlikeLen = false, matchAll = false, suffix = null, minLen = null, caseSensitive = false", () => {
      let strings = [
        "Cat",
        "Catalyst",
        "catabolism",
        "dog"
      ];
      expect(abbrev(strings)).toEqual([
        "C",
        "Ca",
        "cat",
        "d"
      ]);
    });
  })
  describe("with matchAlikeLen parameter", () => {
    let strings: string[];
    beforeEach(() => {
      strings = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ];
    })
    test("set to nothing (default is null and it is assumed as a false)", () => {
      expect(abbrev(strings)).toEqual([
        "M",
        "T",
        "W",
        "Th",
        "F",
      ]);
    });
    test("set to true", () => {
      expect(abbrev(strings, { matchAlikeLen: true })).toEqual([
        "M",
        "Tu",
        "W",
        "Th",
        "F",
      ]);
    });
    test("set to false", () => {
      expect(abbrev(strings, { matchAlikeLen: false })).toEqual([
        "M",
        "T",
        "W",
        "Th",
        "F",
      ]);
    });
  })
  describe("with matchLen parameter", () => {
    let strings: string[];
    beforeEach(() => {
      strings = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ];
    })
    test("set to nothing (default is null and it is assumed as a false)", () => {
      expect(abbrev(strings)).toEqual([
        "M",
        "T",
        "W",
        "Th",
        "F",
      ]);
    });
    test("set to true", () => {
      expect(abbrev(strings, { matchLen: true })).toEqual([
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
      ]);
    });
    test("set to false", () => {
      expect(abbrev(strings, { matchAlikeLen: false })).toEqual([
        "M",
        "T",
        "W",
        "Th",
        "F",
      ]);
    });
  })
  describe("with suffix parameter", () => {
    let strings: string[];
    beforeEach(() => {
      strings = [
        "Cata",
        "Catalyst",
        "catabolism",
      ];
    })
    test("set to nothing (default is '')", () => {
      expect(abbrev(strings)).toEqual([
        "C",
        "Ca",
        "cat",
      ]);
    });
    test("set to dot(.) character", () => {
      expect(abbrev(strings, { suffix: '.' })).toEqual([
        "C.",
        "Ca.",
        "cat.",
      ]);
    });
    test("set to dot(.) character and matchAlikeLen is set to  true", () => {
      expect(abbrev(strings, { suffix: '.', matchAlikeLen: true })).toEqual([
        "Cata",
        "Catal.",
        "catab.",
      ]);
    });
    test("set to dot(.) character and minLength is set to some number value", () => {
      expect(abbrev(strings, { suffix: '.', minLen: 3 })).toEqual([
        "Cat.",
        "Cata.",
        "catab.",
      ]);
    });
    test("set to dot(.) character, matchAlikeLen is set to  true, and minLength is set to specific number value", () => {
      expect(abbrev(strings, { suffix: '.', minLen: 3, matchAlikeLen: true })).toEqual([
        "Cata",
        "Catal.",
        "catab.",
      ]);
    });
  })
  describe("with minLen parameter", () => {
    let strings: string[];
    beforeEach(() => {
      strings = [
        "January",
        "February",
        "June",
        "July",
      ];
    })
    test("set to nothing (default is null)", () => {
      expect(abbrev(strings)).toEqual([
        "J",
        "F",
        "Ju",
        "Jul",
      ]);
    });
    test("set to some specific number", () => {
      expect(abbrev(strings, { minLen: 2 })).toEqual([
        "Ja",
        "Fe",
        "Ju",
        "Jul",
      ]);
    });
    test("set to some specific number and matchAlikeLen is set to true", () => {
      expect(abbrev(strings, { minLen: 2, matchAlikeLen: true })).toEqual([
        "Ja",
        "Fe",
        "Jun",
        "Jul",
      ]);
    });
    test("set to some specific number and matchLen is set to true", () => {
      expect(abbrev(strings, { minLen: 2, matchLen: true })).toEqual([
        "Jan",
        "Feb",
        "Jun",
        "Jul",
      ]);
    });
  })
  describe("with caseSensitive parameter", () => {
    let strings: string[];
    beforeEach(() => {
      strings = [
        "None",
        "novice",
        "All"
      ];
    })
    test("set to nothing (default is false)", () => {
      expect(abbrev(strings)).toEqual([
        "N",
        "no",
        "A",
      ]);
    });
    test("set to true", () => {
      expect(abbrev(strings, { caseSensitive: true })).toEqual([
        "N",
        "n",
        "A",
      ]);
    });
    test("set to false", () => {
      expect(abbrev(strings, { caseSensitive: false })).toEqual([
        "N",
        "no",
        "A",
      ]);
    });
  })
  
  // negative case
  describe("with strings", () => {
    test("that have empty value", () => {
      let strings = [
        "",
        "",
        "cat",
        "dog"
      ];
      expect(abbrev(strings)).toEqual([
        "",
        "",
        "c",
        "d"
      ]);
    });
    test("that are all empty values", () => {
      let strings = [
        "",
        "",
        "",
      ];
      expect(abbrev(strings)).toEqual([
        "",
        "",
        ""
      ]);
    });
    test("that are all the same", () => {
      let strings = [
        "Mon",
        "Mon",
        "Mon",
      ];
      expect(abbrev(strings)).toEqual([
        "Mon",
        "Mon",
        "Mon"
      ]);
    });
  })
});

