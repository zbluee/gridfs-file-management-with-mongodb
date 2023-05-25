# File Management with MongoDB GridFS

This code demonstrates a basic implementation of file management using MongoDB's GridFS with Node.js and Express. It showcases how to upload, retrieve, stream, and download files using GridFS. 

## Prerequisites

Before running the code, make sure you have the following prerequisites installed:

- Node.js
- MongoDB

## Installation

1. `git clone <repository-url>` : clone the repository or download the code.
2. `cd <project-directory>`
    `npm install`
Navigate to the project directory in your terminal abd Install the dependencies by running the following command:


## Configuration

1. Create a `.env` file in the project root directory and configure the following environment variables:

* `MONGO_CONNECTION_STRING=<your_mongodb_connection_string>`
* `PORT=<optional_port_number>`


Replace `<your_mongodb_connection_string>` with the actual connection string for your MongoDB instance. Optionally, you can set the `PORT` variable to specify the desired server port (default is 3000).

## Usage

1. Ensure that your MongoDB instance is running.
2. Run `node <server_file_name>.js`, `npm run dev` or `npm start` commands to start the server.
Replace `<server_file_name>` with the name of the file containing the server configuration (e.g., `server.js`)

3. The server will start running and listening for requests on the specified port.

## Endpoints

The following endpoints are available for file management:

* `GET /files` : Retrieves a list of all files stored in the GridFS collection.

* `GET /file/:filename` :  Retrieves a specific file by its filename.

* `GET /stream/:filename` :Streams and downloads a file by its filename.

* `POST /upload` : Uploads one or multiple files. The files should be sent using the `files` field in a multipart form-data request. The request should also include the `uploadBy` attribute in the body to identify the uploader.


## Contributing

This code is meant for demonstration purposes and may not cover all possible scenarios or edge cases. Contributions, improvements, and suggestions are welcome. If you find any issues or have ideas for enhancements, feel free to open an issue or submit a pull request.

