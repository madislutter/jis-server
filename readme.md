# Joogivanema infosüsteemi *back-end*'i mock

See rakendus on vajalik joogivanema infosüsteemi [*front-end*'i prototüübi](https://github.com/madislutter/jis-klient) demonstreerimiseks.

## Mis peab olema installeeritud rakenduse kasutamiseks?

Oma arvutis rakenduse jooksutamiseks peab olema installeeritud tarkvara **node** (testitud versiooniga v5.9.0) ning sellega kaasa tulev **npm** (node package manager). Node'i uusima versiooni installeerimiseks on mugav kasutada tarkvara [nvm](https://github.com/creationix/nvm) (node version manager):

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash
nvm install node
nvm use node
```

Rakenduse oma arvutisse paigaldamiseks ja käima panemiseks jooksuta järgmised käsud kataloogist, kuhu soovid rakendust paigaldada:

```bash
git clone git@github.com:madislutter/jis-server.git
cd jis-server
npm install
node server.js
```