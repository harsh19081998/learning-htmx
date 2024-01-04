import express from "express";

const app = express();

// Set up the static folder for serving static files like images, stylesheets, and scripts
app.use(express.static("public"));

// Parse incoming URL-encoded bodies (data from HTML forms)
app.use(express.urlencoded({ extended: true }));

// Parse incoming JSON bodies (data from API clients)
app.use(express.json());

// Start the server and listen for incoming requests
// Use the PORT environment variable if available, otherwise default to 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server started on port", port);
});

// Handle GET request to fetch users
app.get('/users', async (req, res) => {
    // const users = [
    //   { id: 1, name: 'John Doe' },
    //   { id: 2, name: 'Bob Williams' },
    //   { id: 3, name: 'Shannon Jackson' },
    // ];
  
    setTimeout(async () => {
      const limit = +req.query.limit || 10;
  
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?_limit=${limit}`
      );
      const users = await response.json();
  
      res.send(`
      <h1 class="text-2xl font-bold my-4">Users</h1>
      <ul>
        ${users.map((user) => `<li>${user.name}</li>`).join('')}
      </ul>
    `);
    }, 2000);
  });
  
  // Handle POST request for temp conversion
  app.post('/convert', (req, res) => {
    setTimeout(() => {
      const fahrenheit = parseFloat(req.body.fahrenheit);
      const celsius = (fahrenheit - 32) * (5 / 9);
  
      res.send(`
        <p>
          ${fahrenheit} degrees Farenheit is equal to ${celsius} degrees Celsius
        </p>
      `);
    }, 2000);
  });
  