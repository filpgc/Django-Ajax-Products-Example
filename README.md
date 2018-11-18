# Django-Ajax-Products-Example

# Task:
Develop a basic Ajax frontend and Django backend for a web application that deals with a list of products. You will only need one model Product for this task. This model should have three Fields: name (CharField), description (TextField) and price (DecimalField).
1) On the Django backend your application should respond to the four request types (GET, POST, PUT and DELETE). You can use the “method” Field of the request objects to find out which type of request is being made. For each request type you should respond appropriately. Whenever data is required to be returned to the client this should be done using JSON (for instance, returning the list of products, or the details of a given product). Make use of Django’s JsonReponse object.  
2) On the frontend one should be able to
• see the list of all products or the details of a single product (GET) • add a new product to the list (POST)
• update the price of a product (PUT)
• delete a product (DELETE)
ny request from the client to the server should be done via Ajax requests using the jQuery library. So there should not be any page refreshes.
Sample use cases:
• When accessing the application for the First time an Ajax request is made to the server requesting the current list of all products. The backend responds with this list in JSON format. Upon receiving this list, the frontend includes the list of products on the HTML using jQuery. This would be an example of an Ajax request using the GET method.
• A user clicks on the “delete” button next to a product. A DELETE Ajax request is made to the server so this product is removed from the database. At the same time, that list item containing the product is removed from the DOM.
• At the bottom of the page a user has the ability to include new products through a simple form. Upon inputing the details of a new product and clicking the “Add” button a POST Ajax request is triggered, so that the product is added on the application database, and at the same time the new product is added to the list of products shown on the page.


   <a href="https://ibb.co/kexMc0"><img src="https://preview.ibb.co/buGsjf/Screen-Shot-2018-11-18-at-21-15-25.png" alt="Screen-Shot-2018-11-18-at-21-15-25" width="680" hight="330" border="0"></a> <br> <br>
<a href="https://ibb.co/nfYiqL"><img src="https://preview.ibb.co/kGf7H0/Screen-Shot-2018-11-18-at-21-04-23.png" alt="Screen-Shot-2018-11-18-at-21-04-23"  width="710" hight="330" border="0" margin-left="-20px"></a>
