
<h1  align='center'>
<b>abbrev-string-array</b>
</h1>
<div  align='center'>Abbreviate strings by assigning a distinct minimum value to each element in the array.</div>

## Installing

### Package manager

Using npm:

```bash
$ npm install abbrev-string-array
```

Using yarn:

```bash
$ yarn add abbrev-string-array
```

Once the package is installed, import the library:

```js
import abbrev from 'abbrev-string-array';
```

[Since the function is exported using default export, you can use any name instead of 'abbrev' as the name for the imported function.]

## Examples

`abbrev ([strings], {opts})` 

Default option values : 
 ```js
	matchAlikeLen = false, 
	matchAll = false, 
	suffix = null, 
	minLen = null, 
	caseSensitive = false
```
 ```js
 const arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday']
 abbrev (arr) 
// ['M', 'T', 'W', 'Th']
```
 ```js
 const arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday']
 abbrev (arr, {matchAlikeLen: true}) 
// ['M', 'Tu', 'W', 'Th']
```
 ```js
 const arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday']
 abbrev (arr, {matchAll: true}) 
// ['Mo', 'Tu', 'We', 'Th']
```
 ```js
 const arr = ['Cata', 'Catalyst', 'catabolism']
 abbrev (arr, {suffix:  '.'}) 
// ['C.', 'Ca.', 'cat.']
```
 ```js
 const arr = ['January', 'February', 'June', 'July']
 abbrev (arr) 
// ['J', 'F', 'Ju', 'Jul',]

 abbrev (arr, {minLen:  2}) 
// ['Ja', 'Fe', 'Ju', 'Jul']
```
  ```js
 const arr = ['None', 'novice', 'All']
 abbrev (arr) 
// ['N', 'no', 'A']

 abbrev (arr, {caseSensitive:  true}) 
// ['N', 'n', 'A']
```


## Test
```
npm test
``` 

## Future work

* Provide support for acronyms when the word is delimited by a space or some other characters.
eg: `['Science Fiction', 'Action Comedy', 'Romantic Drama']`
===> `['SF', 'AC', 'RD'] `

* Enable the addition of a unique value, such as a number, when there are distinct strings
eg: `['mon', 'mon', 'tue']`
===>  `['m.1', 'm.2', 't'] `
    

## Resources

-   [Documentation](https://abbrev.pages.dev/docs/)
-   [Changelog](https://github.com/eyobsamuel/abbrev-string-array/blob/master/CHANGELOG.md)
-   [Stack Overflow](https://stackoverflow.com/questions/tagged/abbrev-string-array)

## License 

`abbrev-string-array` is freely distributable under the terms of the  [MIT license](https://github.com/eyobsamuel/abbrev-string-array/blob/master/LICENSE).
    
  