# Jasmine FaaS

Jasmine is a behavior-driven development framework for testing JavaScript code. This function will test source code using spec code provided as json input.

Once the test executed the function return number of tests, failed tests, succeded tests.

## Example usage

```
$ curl -X POST \
  http://127.0.0.1:8080/function/jasmine-faas \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -d '{
	"name": "anagram",
	"src": "'\''use strict'\'';  function Anagram(word) {   this.word = word; }  Anagram.prototype.matches = function (wordList) {   var words = Array.isArray(wordList) ? wordList : [].slice.call(arguments, 0);    return words.filter(function (candidate) {     return !sameWord(this.word, candidate) && isAnagram(this.word, candidate);   }, this); };  function sameWord(word, candidate) {   return word.toLowerCase() === candidate.toLowerCase(); }  function isAnagram(word, candiate) {   return normalize(word) === normalize(candiate); }  function normalize(string) {   return string.toLowerCase().split('\'''\'').sort().toString(); }  module.exports = Anagram;",
	"spec": "var Anagram = require('\''./anagram'\'');  describe('\''Anagram'\'', function () {   it('\''no matches'\'', function () {     var subject = new Anagram('\''diaper'\'');     var matches = subject.matches([ '\''hello'\'', '\''world'\'', '\''zombies'\'', '\''pants'\'']);      expect(matches).toEqual([]);   });    xit('\''detects simple anagram'\'', function () {     var subject = new Anagram('\''ant'\'');     var matches = subject.matches(['\''tan'\'', '\''stand'\'', '\''at'\'']);      expect(matches).toEqual(['\''tan'\'']);   });    xit('\''does not detect false positives'\'', function () {     var subject = new Anagram('\''galea'\'');     var matches = subject.matches(['\''eagle'\'']);      expect(matches).toEqual([]);   });    xit('\''detects multiple anagrams'\'', function () {     var subject = new Anagram('\''master'\'');     var matches = subject.matches(['\''stream'\'', '\''pigeon'\'', '\''maters'\'']);      expect(matches).toEqual(['\''stream'\'', '\''maters'\'']);   });    xit('\''does not detect anagram subsets'\'', function () {     var subject = new Anagram('\''good'\'');     var matches = subject.matches(['\''dog'\'', '\''goody'\'']);      expect(matches).toEqual([]);   });    xit('\''detects anagram'\'', function () {     var subject = new Anagram('\''listen'\'');     var matches = subject.matches(['\''enlists'\'', '\''google'\'', '\''inlets'\'', '\''banana'\'']);      expect(matches).toEqual(['\''inlets'\'']);   });    xit('\''detects multiple anagrams'\'', function () {     var subject = new Anagram('\''allergy'\'');     var matches = subject.matches(['\''gallery'\'', '\''ballerina'\'', '\''regally'\'', '\''clergy'\'', '\''largely'\'', '\''leading'\'']);      expect(matches).toEqual(['\''gallery'\'', '\''regally'\'', '\''largely'\'']);   });    xit('\''detects anagrams case-insensitively'\'', function () {     var subject = new Anagram('\''Orchestra'\'');     var matches = subject.matches(['\''cashregister'\'', '\''Carthorse'\'', '\''radishes'\'']);      expect(matches).toEqual(['\''Carthorse'\'']);   });    xit('\''does not detect a word as its own anagram'\'', function () {     var subject = new Anagram('\''banana'\'');     var matches = subject.matches(['\''Banana'\'']);      expect(matches).toEqual([]);   });    xit('\''matches() accepts string arguments'\'', function () {     var subject = new Anagram('\''ant'\'');     var matches = subject.matches('\''stand'\'', '\''tan'\'', '\''at'\'');      expect(matches).toEqual(['\''tan'\'']);   });    xit('\''matches() accepts single string argument'\'', function () {     var subject = new Anagram('\''ant'\'');     var matches = subject.matches('\''tan'\'');      expect(matches).toEqual(['\''tan'\'']);   }); });"
}'

{"total":11,"failed":10,"passed":1}
```
