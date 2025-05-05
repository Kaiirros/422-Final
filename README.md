# Write your Readme here; explaining how to use this app

This program takes CSV files inserted into the inbound directory and exports them as JSON to the outbound directory while moving
the inbound CSV file into the processed directory.

> Step 1, Drag your CSV file into the 'inbound' directory
> Step 2, Collect your output JSON file from the 'outbound' directory 

JSON file format is an array of JSON objects of each CSV line made up of each CSV field.

# Requirements
> Node - v22.15.0
> npm 10.9.2
> Docker

# Dependencies
> chokidar: ^4.0.3,
> csv: ^6.3.11,
> dotenv: ^16.5.0,
> jest: ^29.7.0,
> mock-fs: ^5.5.0

# Run Tests
`npm test`

# Run Program
`npm start`

# Deploy program to container
`docker compose -f 'docker-compose.yml' up -d --build`