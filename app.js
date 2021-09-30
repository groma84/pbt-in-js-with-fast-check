// run `node app.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

/*


 .----------------.  .----------------.  .----------------.
| .--------------. || .--------------. || .--------------. |
| |   ______     | || |   ______     | || |  _________   | |
| |  |_   __ \   | || |  |_   _ \    | || | |  _   _  |  | |
| |    | |__) |  | || |    | |_) |   | || | |_/ | | \_|  | |
| |    |  ___/   | || |    |  __'.   | || |     | |      | |
| |   _| |_      | || |   _| |__) |  | || |    _| |_     | |
| |  |_____|     | || |  |_______/   | || |   |_____|    | |
| |              | || |              | || |              | |
| '--------------' || '--------------' || '--------------' |
 '----------------'  '----------------'  '----------------'

___  ___           _   _         _____           _
|  \/  |          | | (_)       |  __ \         | |
| .  . | __ _ _ __| |_ _ _ __   | |  \/_ __ ___ | |_ ____
| |\/| |/ _` | '__| __| | '_ \  | | __| '__/ _ \| __|_  /
| |  | | (_| | |  | |_| | | | | | |_\ \ | | (_) | |_ / /
\_|  |_/\__,_|_|   \__|_|_| |_|  \____/_|  \___/ \__/___|

martin.grotz@mathema.de
@mobilgroma


  __  __       _______ _    _ ______ __  __
 |  \/  |   /\|__   __| |  | |  ____|  \/  |   /\
 | \  / |  /  \  | |  | |__| | |__  | \  / |  /  \
 | |\/| | / /\ \ | |  |  __  |  __| | |\/| | / /\ \
 | |  | |/ ____ \| |  | |  | | |____| |  | |/ ____ \
 |_|  |_/_/    \_\_|  |_|  |_|______|_|  |_/_/    \_\







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
