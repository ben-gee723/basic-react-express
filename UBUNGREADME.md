# Halliallo!
 - Hier gibt es ein Beispiel template von einem Website, es ist aber lehr und wir müssen ein bischen Information hinzufügen!
 - Manche Information für die Webseite befindet sich schon in data.json außer ein bisschen fetch Daten, die wir fetch'en werden
 - Manche Beispiel-Komponenten sind schon im src/components (aber wenn die euch nicht gefallen, könnt ihr natürlich neue Komponenten erstellen!)

Technologien die bereits installiert sind:
 - bootstrap
 - scss
 - react-router-dom: Grundlage router ist schon bereits erstellt

Anbei ist ein Live-Referenz von Vercel: [hier]()

#

## 1.1 Context
 - Gleich wenden wir `store` an
 - Basic Set-Up in der context.jsx Datei:
    1. Context inizialisieren
    2. ParentContext Komponent erstellen
    3. store inizialisieren
    4. Wrap mal das ParentContext Komponent um die App Komponent herum
 
 Hinweis: Vergiss die App laufen zu lassen, um zu sehen ob Fehler auftauchen. Und versuch die zu lösen, bevor du weitergehst :D

## 1.2 data.json
Tipps: 
 - Wir wollen die Information aus dieser data.json Datei nehmen und
 - in der `value` Variable des Contextes hinzufügen, 
 - damit wir diese Information überall verwenden können.
 - data.json ist eine Datei, die auch ein Typ Objekt ist

 1. Importiere die Datei in die `context.jsx` Datei, mit dem Name `data`
 2. Füge die Variable in dem `value` Objekt von dem ParentContext hinzu

```jsx
let value = { data };
```

 3. Guck mal in die `data.json` und schau mal was für Information wir haben
    - Man kann sehen, dass wir manche Information für Home, About, und Contact haben
 4. Durch unsere `store` importiere die in die Page-Komponenten, 
 5. Wenden die Information auf ihrer zugehörigen Seite an.
    - title, information, quote

#

## 2. Fetch Nutzung: In der `context.jsx` Datei
Tipps:
 - In diesem Teil, üben wir `fetch`

 1. Import und `useState` für unsere Karten deklarieren
 2. Nachdem, schreib mal ein fetch, indem man diese `url` anwendet
  - `https://rickandmortyapi.com/api/character`
  - (man kann entweder ein Promise oder async/await nutzen)
 3. Setzte die Information in diesem useSate Variable hinein
 4. Zuletzt, fügen wir auch diese Variable in unserem `value` Objekt hinzu
    - zB:
    ```jsx
    let value = { data, cards };
    ```

Hinweis: Um die Objekt-Struktur aus dem fetch Data zu verstehen, ist es immer gut, es im Console auszudrücken und im Browser zu untersuchen.

#

## 3. ListItem: Karte erstellen und Objekt Information zugreifen 
Tipps:
 - Wo ist das Komponent in dem src Ordner und wo wird es verwendet?
 - Die Komponent-Datei ist schon erstelllt (nicht das Komponent-HTML selbst)
 - Später verwenden wir dies Komponent in dem ListOfAllItems

 1. a) Also, finde eine Karte auf der Bootstrap Webseite und verwende es in dem Komponent, oder 
 1. b) komponiere mal selbst die Karte in der Datei
 
 2. Schreibe mal ein Test-Objekt mit den Schlüsseln: name, species, und origin, und füge gewünschte Werte zu jeden hinzu.
 3. Dann wende dieses Objekt als Beispiel um deine Karte zu testen

Hinweis: 
 - Um das Komponent auszuprobieren, man kann es in dem Home Komponent nach dem Carousel aufrufen

#

## 4. ListOfItems: Schleife und mehrfach Karten erstellen
Tipps:
 - ListItem ist schon importiert, also lass uns das Komponent verwende, um die Karten mehrmals ausdrücken zu können

 1. In ListOfAllItems/index.jsx, importiere das `cards` Array aus dem store
 2. In der HTML-Rükgabe des Komponents ListOfAllItems, schleif mal durch die `cards` Array und gebe die Information als props zu dem ListItem Komponent über (props/Attribut-Name könntest du selbst einscheiden)
 3. In ListItem ersetzten wir nun die Test-Objekt Information mit dem props Information, die übergeben wird

#

## 5. Form erstellen
Tipps: 
 - Wo wird das Komponent verwendet? --> Home, About, oder Contact?
 - Check mal in der Datei zu sehen, was schon im Komponent existiert und was nicht
 - In diesem Fall, möchten wir dieses Komponent bearbeiten damit wir die Information aus dem useState durch Form-Eingaben ändern und live aktualisieren 
 
 1. Als Notizen, schreibe mal was schon exisitiert, und
 2. schreibe mal was wir vielleicht noch brauchen
 3. Dann schreiben wir mal die nötige Eingabefelder und Labels in unserem Komponent-HTML Teil
 4. Welches Event-Handler können wir benutzen, um die Information von den Eingabefeldern zu dem useState zu verknüpfen? (Hinweis: jedes mal wir in die Eingabefelder eintypen, wird die Information sich aktuelle ändern)
 5. Schreibe mal eine Handler-Funktion, die die Information ändert
 6. Verbinde diese Funktion zu dem Event der Eingabe-Felder Komponenten

Hinweis: 
 - vergiss nicht das Live-Referenz zu checken, und 
 - überprüfe dein Komponent

#

## 6. Handlers: Increase/Decrease Font size
Tipps: 
 - In ???/index.jsx wieder
 - Ein bisschen wie counter
 - In diesem Fall werden wir ein useState nutzen, um die Font-Größe zu ändern
 - Eine Zahl wie `16`px verwenden wir als Grund-Größe
 - Jedes mal wir Increase und Decrease drücken, wird die Größe sich `+2` oder `-2` ändern

 1. Erstellen wir ein useState Variable mit der Zahl `16` drin
 2. Denk mal, wie kann ich diese Zahl direkt zu einem Komponent verknüpfen? Denk mal an
   - Welches Attribut eines Komponentes können wir direkt ändern
   - Ohne CSS Datei
   - Backticks/Template literals!
 3. 2 Buttons existieren schon
 4. Schreib mal 2 Handler-Funktionen für diese buttons, um den Schrift zu vergrößen oder verkleinen