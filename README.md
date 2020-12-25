# Start Steps
1. run `npm i mysql`
2. install mysql v5.7.x - `sudo apt install mysql-server mysql-client`
3. run `sudo mysql -u root -p [database_name]`

# Import Steps
- run `sudo mysql -u root -p [database_name] < [path_name]/migrations.sql`

# MySQL Commands
- `USE [database_name];` - connect to database
- `show databases;` - show all dbs
- `describe [table_name];` - show specific table details
- `SET PASSWORD FOR '[current_user]'@'[hostname]' = PASSWORD([new_password])`
