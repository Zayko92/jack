# Gioacchino Orlando

Migrazione del sito pubblico https://gioacchinoorlando.base44.app in **Next.js App Router, React e TypeScript**, pronta per essere importata su Vercel.

## Avvio locale

Richiede Node.js 20.9 o successivo.

```bash
npm ci
npm run dev
```

Apri http://127.0.0.1:3000.

## Pagine

- `/`: ritratto, presentazione, biografia e collegamenti.
- `/libri`: copertine, descrizioni integrali, premio e link agli editori.
- `/articoli`: ultimi lavori e archivio degli articoli.

Sono mantenuti i contenuti pubblici, i font originali, la texture della carta, i colori, le proporzioni del layout e la navigazione responsive. La home include il movimento delle immagini e del titolo durante lo scorrimento, con rispetto della preferenza di movimento ridotto.

Immagini e font sono inclusi nel progetto: il sito non richiede il servizio Base44, le sue API, autenticazione o variabili d’ambiente. Le copertine e le risorse editoriali continuano a collegare i siti esterni originali. Gli indirizzi email nel footer sono cliccabili.

## Deploy su Vercel

1. Carica questo progetto in un repository GitHub, GitLab o Bitbucket, includendo `package-lock.json`, `public/` e `src/fonts/`.
2. Su Vercel scegli **Add New → Project** e importa il repository.
3. Usa il preset **Next.js** e come Root Directory la cartella che contiene `package.json`.
4. Mantieni le impostazioni predefinite: installazione `npm install` e build `npm run build`. Non serve impostare Output Directory o variabili d’ambiente.
5. Seleziona **Deploy**.

Il progetto viene generato come pagine statiche da Next.js e usa la gestione immagini di Next.js. Non servono database o configurazioni aggiuntive.

Per una build locale, da eseguire manualmente:

```bash
npm run build
npm start
```

## Modifica dei contenuti

- `src/content/site.json`: biografia, libri e collegamenti agli articoli.
- `src/app/globals.css`: layout, colori e stile responsive.
- `src/components/`: intestazione, footer, navigazione e home.
- `src/app/layout.tsx`: font e metadati generali.
- `src/app/libri/page.tsx` e `src/app/articoli/page.tsx`: pagine e metadati specifici.
- `public/images/`: immagini originali salvate localmente.
- `src/fonts/`: font originali serviti con `next/font/local`.

La cartella `.reference/` e `original-page.html`, se presenti, sono materiali temporanei di confronto e sono esclusi da Git.
