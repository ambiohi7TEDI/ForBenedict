<!DOCTYPE html>
<html>
<head>
  <title>Homepage</title>
</head>
<body>
  <h1>Welcome to the Department Store</h1>
  <p>Please select your department:</p>
  <form method="post" action="/department">
    <select name="department">
      <% departments.forEach(function(department) { %>
        <option value="<%= department.id %>"><%= department.name %></option>
      <% }); %>
    </select>
    <input type="submit" value="Submit">
  </form>
</body>
</html>
