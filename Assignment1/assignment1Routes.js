
const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if(url === '/') {
    // Do some homepage voodoo
    res.write(`
<!DOCTYPE html>
<html lang="en">
    <script>
        function changeMe(){
          document.getElementById('header').innerText = 'Welcome to Assignment2!'
        }
        function changeMeBack(){
          document.getElementById('header').innerText = 'Hello to Assignment1!'
        }
    </script>
    <h1 id="header">Hello to Assignment1!</h1>
    <div>
        <h2>Options</h2>
        <section id="Section1">
            <h3>User Options</h3>
            <a href="/users">
                <button>Log In</button>
            </a>
        </section>
        <section id="Section2">
            <h3>JavaScript Tests</h3>
            <button onClick="changeMe()">Change Me</button>
            <button onClick="changeMeBack()">Change Me Back</button>
        </section>
    </div>
    
</html>
    `)
    return res.end();
  }
  if(url === '/users') {
    // Do some users voodoo
    res.write(`
<!DOCTYPE html>
<html lang="en">
    <h1>Users</h1>
    <section>
      <h2>Current Dummies</h2>
      <ul>
          <li>Dummy One</li>
          <li>Dummy Two</li>
          <li>Dummy Three</li>
          <li>Dummy Four</li>
      </ul>
    </section>
    <section>
        <h2>New Dummy</h2>
        <form action="/">
            <input type="text" name="create-user">
            <button type="submit" formaction="/create-user"="/" formmethod="POST">Add</button>
        </form>
    </section>
</html>
    `)
    return res.end();
  }
  if(url === '/create-user' && method === 'POST') {
    // Capture request and add to buffer
    const body = [];
    req.on('data', (chunk) => {
      // You must push it!... Push it real good!!
      body.push(chunk);
    });
    return req.on('end', () => {
      // Set request constants and decode body to string
      const parsedBody = decodeURIComponent(Buffer.concat(body).toString());
      const message = parsedBody.split('=')[1];
      // Do the page response voodoo
      console.log(message);
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    })
  }
};

exports.handler = requestHandler;