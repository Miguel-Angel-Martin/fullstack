






Rest pasword if problems: https://www.youtube.com/watch?v=21q3qdmHhU0


Set pass for root after installation

mysql> use mysql
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
mysql> update user set plugin='mysql_native_pàssword' where user='root';
Query OK, 1 row affected (0.00 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> flush privileges;
Query OK, 0 rows affected (0.01 sec)

mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY 'C4rl4_060616';
Query OK, 0 rows affected (0.01 sec)

mysql> FLUSH PRIVILEGES;
Query OK, 0 rows affected (0.00 sec)

mysql> exit;


# USER for developing

CREATE USER 'loopback'@'localhost' IDENTIFIED BY 'pass_1234';
Query OK, 0 rows affected (0.01 sec)



mysql> CREATE DATABASE db_loopback;
Query OK, 1 row affected (0.00 sec)


Grant acceso to the user only for db











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