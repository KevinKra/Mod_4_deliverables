# Overview

This project is intended to satisfy the mod_4 deliverables assignment. Two separate directories have been created, the first handles routes with the express library and the second handle routes strictly with Node.

## HTTP (Hyper-Text Transfer Protocol)

- TCP/IP application layer protocol.
- A communication pattern between two computers, a client and a server. They use the request/response cycle to communicate and deliver content.
- Connectionless protocol: After the client makes a request to the server, the connection is closed. Once the server has the response prepared, the connection is reopened and the content is sent.
- HTTP can deliver any sort of content, so long as both computers can read it.
- A Stateless Protocol: Client and server only know about each other during the current request. After the connection closes, they will need to reconnect (provide their data anew) if they want to begin another request/response cycle.

### The Request / Response cycle

- Client sends and HTTP request to the server. Client disconnects from server (connectionless protocol).
- Server processes request, prepares response, reopens connection, server responds with an HTTP response.

### HTTP messages structure

- StartLine, Headers, Body. All contain plain-text information.
- URI: Uniform Resource Identifier, set of readable characters to locate the resource.
- Request message: StartLine: Action URI Http version. Headers: Host Accept Accept Language. No body.
- Response message: StartLine: Http/Version status code, Headers: Host Accept Accept Language etc, Body: The requested content.
