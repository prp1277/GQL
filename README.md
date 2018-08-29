# Notes From [Essentials of GraphQL](https://www.linkedin.com/learning/graphql-essential-training/data-persistence-with-sql)

Handwritten notes are in the `./img/` folder.

[Click Here](/walk-thru.md) for a detailed walk-through.

# General Overview
Details about specific files and their functions.

## root

**index.js** - Entry point for the node.js server

**aliens.sqlite** - SQL Database created by `./data/dbConnections.js`

## /data/

**dbConnectors.js** - Creates the MongoDB and SQLite databases and defines the schemas data-types.
  - Exports: `Friends` & `Aliens`

**resolvers.js** - Maps the queries and mutations and how each should be handled.
  - Exports: `resolvers`

**schema.js** - Defines typeDefs and the details about the value of each field.
  - Types defined in `typeDefs` have to match `inputs`, `queries` and `mutations`
  - Exports: `schema`

**IMPORTANT: the fields must be consistent between the three files**