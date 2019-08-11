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

#### HTTP SandBoxing (CORS)

- When making a request to a domain, that domain's scripts should not have access to your personal identifying data stored on your browser. If they did, they could attempt to use that data in malicious ways. As protection, browsers prohibit us from allowing scripts to make requests to other domains.

- This can be an annoying problem when building systems that want to access several domains for legitimate reasons. Fortunately, servers can include a header like this in their response to explicitly indicate to the browser that it is okay for the request to come from another domain:

`Access-Control-Allow-Origin: *`

## NODE

- JavaScript runtime environment existing on the computer as opposed to the traditional browser environment. Any JavaScript written in the environment is translated into C++ before being delivered to the machine.
- All input and output in Node is handled asynchronously.

### Node is asynchronous

- Node utilizes "non-blocking" asynchronous architecture by default. A single thread handles all the requests / clients to the server, when we get a request and it's in the process of being resolved, it's placed in the `event queue`. Node continually checks the `event queue` and handles the request once it's been fulfilled. Node is ideal for application that need a lot of disk or network access, more clients can be served without the need of additional hardware. However, Node is not suitable for CPU-intensive applications because the thread would be stuck handling CPU intensive operations instead of touching the file/network and serving requests.

### Node Module system

- Node utilizes the `Module System`, what this means is that scope only exists within each specific file unless explicitly exported/imported into different modules. Variables and functions are encapsulated inside their specific module (file), they are considered `private` variables unless exported and thus are considered `public` variables that get `loaded` into other modules. The modular system in Node works by using IIFEs to wrap every file.
- Noteworthy modules: FileSystem, HTTP (creating web servers), OS, Path, Process, Query Strings, Streams (Data streams).
