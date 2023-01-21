const express = require("express");
const server = express();

const path = require("path");

server.use(express.static(path.join(__dirname, "public")));

const handlePostAboutRequests = (req, res) => {
  const aboutPath = path.join(__dirname, "public", "about.html");
  res.sendFile(aboutPath);
};
//server that handles requests for get
const handleGetHomeRequests = (req, res) => {
  const homePath = path.join(__dirname, "public", "home.html");
  res.sendFile(homePath);
};

//server that handles requests for put

const handleContactPutRequests = (req, res) => {
  const contactpath = path.join(__dirname, "public", "contact.html");
  res.sendFile(contactpath);
};

//server that handles requests for delete
const handleServiceDeleteRequests = (req, res) => {
  const servicepath = path.join(__dirname, "public", "service.html");
  res.sendFile(servicepath);
};

//server request handle method
const handleAllTypeRequests = (req, res) => {
  res.sendFile("Response Server is now started");
};
server.put("/contact", handleContactPutRequests);
server.delete("/service", handleServiceDeleteRequests);
server.post("/about", handlePostAboutRequests);
server.get("/home", handleGetHomeRequests);
server.use("/", handleAllTypeRequests);
server.listen(3000, () => console.log("Server is started!"));
