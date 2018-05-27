#!/bin/bash
export PGPASSWORD='node_password'

database="usersdb"
echo "Configuring database: $database"

# The drop will return an error if the database does not already exist
dropdb -U node_user usersdb
createdb -U node_user usersdb

psql -U node_user usersdb < ./users.sql

echo "$database configured"
