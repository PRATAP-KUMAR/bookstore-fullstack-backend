# Bookstore - Fullstack App

Link to [Frontend Repo](https://github.com/PRATAP-KUMAR/bookstore-fullstack-frontend)



## Steps

```bash
git clone https://github.com/PRATAP-KUMAR/bookstore-fullstack-backend
cd bookstore-fullstack-backend
npm install
```

## Prerequisite packages
1. you must have PostgreSQL installed in your local machine.
2. you must create a new database with your choice of name for the database with `psql` command line.
3. you must edit the `db.js` file with details of your postgres config for username, password, database etc.

    ```js
    const pool = new Pool({
    user: 'admin', // replace with yours
    password: 'admin', // replace with yours
    host: 'localhost', // since we choose local machine as the database, its always localhost.
    port: 5432, // by default this is the value for port
    database: 'bookstore', // replace with yours as mentioned in the step 2 above.
    })
    ```

##
Finally run the below command to start backend server
```bash
npm run dev
```

The backend is connected if you see the below message on the console/terminal.
connected to db, listening on port 3000

![All Books](https://github.com/PRATAP-KUMAR/bookstore-fullstack-backend/assets/40719899/8f29f3e2-489a-4082-b9a4-189edbb9e0dc)

![Add Book](https://github.com/PRATAP-KUMAR/bookstore-fullstack-backend/assets/40719899/20402928-667b-460c-89e4-363281155650)

![Book Detail](https://github.com/PRATAP-KUMAR/bookstore-fullstack-backend/assets/40719899/1f8b2f19-2272-4fa8-a081-e446b2d9fe62)

![Edit Book](https://github.com/PRATAP-KUMAR/bookstore-fullstack-backend/assets/40719899/e179d1bc-e90c-41f5-86e4-a9a5a97de2f8)

![Delete Book](https://github.com/PRATAP-KUMAR/bookstore-fullstack-backend/assets/40719899/e2536a6b-2477-4d15-8bca-6a863ebc01fe)
