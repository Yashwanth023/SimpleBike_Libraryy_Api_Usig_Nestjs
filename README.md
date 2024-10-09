# Bike Library API

This is a simple REST API built with Nest.js to manage a bike library. It provides CRUD operations for bikes and uses SQLite as the database.

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/Yashwanth023/SimpleBike_Libraryy_Api_Usig_Nestjs
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the application:
   ```
   npm run start:dev
   ```

The API will be available at `http://localhost:3000`.

## API Documentation

Swagger documentation is available at `http://localhost:3000/api` when the application is running.

## Endpoints

- GET /bikes: Fetch a list of all bikes in the library.
- POST /bikes: Add a new bike to the library.
- PUT /bikes/{id}: Update the details of an existing bike.
- DELETE /bikes/{id}: Delete a bike from the library.

## Screenshots

![screencapture-localhost-3000-api-2024-10-09-12_38_13](https://github.com/user-attachments/assets/d830eb74-d124-40e7-95e2-1bf24371a182)


## Technologies Used

- Nest.js
- TypeORM
- SQLite
- Swagger (for API documentation)

## Project Structure

- `src/bikes/controllers/`: Route handling
- `src/bikes/services/`: Business logic
- `src/bikes/dto/`: Data Transfer Objects for validation
- `src/bikes/entities/`: Data models

## Error Handling

The API includes error handling for invalid or non-existent bike IDs, as well as validation for input data.

