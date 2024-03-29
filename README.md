# F1 Contracts using Sanity

This is a simple website I made for myself (and others) to see when contracts are expiring.

This project is using Sanity as the datalayer and NextJS in the front. Hosted in Vercel: [f1contracts.com](https://www.f1contracts.com/)

Please contact me if you have any questions

### Running the front-end

Rename the `.env.test` file to `.env` and store the environment variables that Next and Sanity will use to pull data from the Sanity API. You can get or create the tokens, ids, and secrets from [manage.sanity.io](https://manage.sanity.io).

Once those env variables are ready, you can run the following commands to get Next's development server up and running:

```bash
npm install

# Run the frontend
npm run dev

# Run the Studio
Go to the studio folder and run
sanity start
```

The blog will be running at `http://localhost:3000`, the Studio will run at `http://localhost:3333`.
