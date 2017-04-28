<img src="http://assets.angular.schule/logo-angular-power-workshop.png">

#### **von Johannes Hoppe**

<hr>

Schön, dass Du dabei bist!  
Merke dir schon einmal dieses Repository: https://github.com/angular-schule/2017-05-angular-workshop-stuttgart  
Damit wir am Dienstag gleich durchstarten können, solltest du ein paar Vorbereitungen treffen.


## Benötigte Software

1. Node.js **6.9** oder höher: [https://nodejs.org](https://nodejs.org)
2. Visual Studio Code **1.10** oder höher: [https://code.visualstudio.com](https://code.visualstudio.com)
3. Google Chrome: [https://www.google.com/chrome/](https://www.google.com/chrome/)
4. Git (und ggf. ein Client wie GitExtensions: [https://gitextensions.github.io](https://gitextensions.github.io))


## Pakete installieren

Alle Windows-User sollten vor Beginn des Kurses die `windows-build-tools` installieren.  
Warnungen von NPM können ignoriert werden.  
Nach der Installation müsst ihr eine neue Konsole starten!

```
npm install -g windows-build-tools
```

Danach bitte folgenden Befehl ausführen. Warnungen von NPM können ignoriert werden. 

```
npm install -g @angular/cli@1.0.1
```

...bitte anschließend die Versionen überprüfen:

```
node -v
> Erwartet: v6.9.x oder höher

npm -v
> Erwartet: 3.x oder höher

ng -v
> Erwartet: 1.0.1

```

## Startprojekt erzeugen

Bitte lege das Übungsprojekt vor Beginn des Workshops an.  
Wechsel dazu in dein Arbeitsverzeichnis und führe aus:  

```
ng new book-rating --routing
cd book-rating
ng serve -o
```

Achtung! Die Installation kann bei langsamen Internet sehr lange dauern.
Warte beim Schritt `Installing packages for tooling via npm.` mit Geduld ab!


> Auf http://localhost:4200 sollte nun eine Website mit dem Text "app works!" erscheinen!
Wenn bei allen Teilnehmern "app works!" erscheint, können wir ohne Zeitverlust loslegen.


### Ich freue mich auf Dienstag! 

Bei Fragen wende Dich einfach direkt an mich:  
johannes.hoppe@haushoppe-its.de

<hr>

### &copy; 2017 http://angular.schule, Stand: 28.04.2017


