// run `node app.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

/*
Property-based testing
==========================
Property-based Testing ist eine Methode, um zu prüfen, ob eine Funktion für alle Eingaben korrekt
ist. Dies wird erreicht, indem sie mit zufällig generierten Daten ausgeführt wird.

Gegensatz zu:
Example-based testing
Nur feste Beispiele - geringe Datenmenge & nur, an was man eh schon gedacht hat
*/



















/*
Schwierigkeit bei PBT: Gute Properties finden!

Gute Ideen z.B. auf
https://blog.johanneslink.net/2018/07/16/patterns-to-find-properties/
*/





















/*
  Beispiele für PBT-Libraries:

  - fast-check (JavaScript, TypeScript)
  - elm-test (Elm)
  - jqwik (Java)
  - FsCheck (C#, F#)
  - PropCheck/PropEr (Erlang, Elixir)
  - QuickCheck (Haskell)
  ...

  Wir nutzen heute https://github.com/dubzzz/fast-check in JavaScript
*/
