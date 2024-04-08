#!/bin/bash

#Change permisions of the file chmod +x setup_mysql.sh
#Run the script ./setup_mysql.sh
#sudo mysql -u root -p


# MySQL root username and password
MYSQL_ROOT_USER="martinm"
MYSQL_ROOT_PASSWORD="C4rl4_060616"

# Database name, username, and password
DATABASE_NAME="db"
NEW_USERNAME="loopback"
NEW_USER_PASSWORD="loopback_1234"

# Commands to execute
SQL_COMMANDS=$(cat <<EOF
CREATE DATABASE IF NOT EXISTS $DATABASE_NAME;
CREATE USER '$NEW_USERNAME'@'localhost' IDENTIFIED BY '$NEW_USER_PASSWORD';
GRANT ALL PRIVILEGES ON $DATABASE_NAME.* TO '$NEW_USERNAME'@'localhost';
FLUSH PRIVILEGES;
EOF
)

# Execute MySQL commands
echo "Executing MySQL commands..."
mysql -u$MYSQL_ROOT_USER -p$MYSQL_ROOT_PASSWORD -e "$SQL_COMMANDS"

echo "Database and user created successfully."