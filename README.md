---------------------------<<Moustache-Republic-Ecommerce-App>>------------------------------------------
This ecommerce product page application built as part of the Full Stack Developer Technical Test.

The application displays product details, allows size selection, supports cart functionality, and includes automated testing and Docker-based deployment.

----------------------------------------<<Tech Stack>>--------------------------------------------------------
1. Frontend: React, JavaScript, CSS3
2. Testing: Vitest, React Testing Library
3. Deployment: Docker, Docker Compose, Nginx, gh Pages.

----------------------------------<<Running Locally(Development Mode)>>--------------------------------------
1. Go to terminal and install dependencies
    ```bash
    npm install
    ```
2. Start the development server
    ```bash
    npm run dev
    ```
3. Open the following URL in the browser
    ```bash
    http://localhost:5173/moustache-republic-ecommerce-app/
    ```
4. To run the test, Please head to command prompt and run
    ```bash
    npm test
    ```
----------------------------------------------<<Running with Docker>>---------------------------------------
1. Go to terminal, Build and Start the container
    ```bash
    docker compose up --build
    ```
2. Open the following URL in the browser
    ```bash
   http://localhost:3000/moustache-republic-ecommerce-app/
    ```
3. To stop the container
    ```bash
    docker compose down
    ```
Please note your Docker Desktop should be running.

---------------------------------------<<GitHub Pages Deployment>>----------------------------------------
I have deployed the application Github pages please refer the link to the application 

https://aksharvijay.github.io/moustache-republic-ecommerce-app/
