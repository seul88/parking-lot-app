## Getting Started

Create .env file (in root directory), setup the environmental variables:
```bash
RAVENDB_URL=<url to ravendb cloud instance>
RAVENDB_DATABASE=<name of database at cloud instance>
RAVENDB_CERT_PATH=./app/db/cert.pem
CURRENCY_API_KEY=<currency API key>
```
RavenDB .pem certificate should be added to ``parking-lot-app/app/db`` directory as cert.pem OR stringified and passed as CERT env value.

Install packages and run dev mode:

```bash
pnpm install
pnpm run dev
```

App is running at ``http://localhost:3000/``.
