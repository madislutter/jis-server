# Joogivanema infosüsteemi *back-end*'i mock

See rakendus on vajalik joogivanema infosüsteemi [*front-end*'i prototüübi](https://github.com/madislutter/jis-klient) demonstreerimiseks.

Oma arvutis rakenduse jooksutamiseks peab olema installeeritud tarkvara **node** (testitud versiooniga v5.9.0) ning selle kaasa tulev **npm** (node package manager). Node'i uusima versiooni installeerimiseks on mugav kasutada tarkvara [nvm](https://github.com/creationix/nvm) (node version manager):

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash
nvm install node
nvm use node
```

Rakenduse käivitamiseks pärast repositooriumi oma arvutisse kloonimist jooksuta järgmised käsud repositooriumi juurkataloogist:

```bash
npm install
node server.js
```