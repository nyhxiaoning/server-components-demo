# React Server Components Demo

## 初始化连接系统pq
- 配置连接地址：
credentials.js文件

## DB Setup连接使用：postgres用户连接


### Step 1. Create the Database创建数据库
为什么默认创建postgres的数据库，因为默认postgres是默认的，必须创建。
创建好了之后，可以切换到另一个数据库。

```
psql postgres

CREATE DATABASE notesapi;
CREATE ROLE notesadmin WITH LOGIN PASSWORD 'password';
ALTER ROLE notesadmin WITH SUPERUSER;
ALTER DATABASE notesapi OWNER TO notesadmin;
\q


***上面的嗲吗解释如下：
psql postgres：这个命令用于连接到名为 postgres 的数据库。这个命令会打开一个交互式的 PostgreSQL 命令行界面，允许您执行 SQL 查询和管理数据库。

CREATE DATABASE notesapi;：这个命令用于在当前连接的 PostgreSQL 实例中创建一个名为 notesapi 的数据库。一旦执行成功，将创建一个新的空数据库。

CREATE ROLE notesadmin WITH LOGIN PASSWORD 'password';：这个命令用于创建一个名为 notesadmin 的数据库角色（用户），并设置其登录密码为 'password'。WITH LOGIN 表示允许用户登录到数据库。

ALTER ROLE notesadmin WITH SUPERUSER;：这个命令用于将 notesadmin 用户角色提升为超级用户权限。超级用户拥有对数据库的完全控制权限，包括对其他用户和角色的管理权限。

ALTER DATABASE notesapi OWNER TO notesadmin;：这个命令用于将数据库 notesapi 的所有者设置为 notesadmin 角色。这意味着 notesadmin 角色将拥有对 notesapi 数据库的管理权限，可以创建、删除表以及执行其他管理操作。

\q：这个命令用于退出 psql 命令行界面，返回到操作系统的命令行界面。

总的来说，以上命令的目的是在 PostgreSQL 中创建一个名为 notesapi 的数据库，并创建一个具有超级用户权限的名为 notesadmin 的数据库角色，并将 notesapi 数据库的所有权授予给 notesadmin 角色。

```


### Step 2. Connect to the Database

```
psql -d postgres -U notesadmin;

\c notesapi

DROP TABLE IF EXISTS notes;
CREATE TABLE notes (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL,
  title TEXT,
  body TEXT
);

\q




***代码含义解释
psql -d postgres -U notesadmin;：这是连接到 PostgreSQL 数据库的命令。-d 参数用于指定要连接的数据库名称，这里是 postgres。-U 参数用于指定连接的用户名，这里是 notesadmin。执行此命令后，将会以 notesadmin 用户身份连接到 postgres 数据库。

\c notesapi：这是在 psql 命令行中切换到另一个数据库的命令。\c 是 psql 的内部命令，用于连接到另一个数据库。在这里，它将连接到名为 notesapi 的数据库。

DROP TABLE IF EXISTS notes;：这是删除表的命令。IF EXISTS 子句表示如果表存在，则执行删除操作。在这里，它将尝试删除名为 notes 的表，如果该表存在的话。

CREATE TABLE notes (...);：这是创建表的命令。在这个例子中，它创建了一个名为 notes 的表，包含 id、created_at、updated_at、title 和 body 列。id 列是一个自增的主键列，created_at 和 updated_at 列是 TIMESTAMP 类型，title 和 body 列是 TEXT 类型。

\q：这是退出 psql 命令行界面的命令。执行此命令后，将会退出 psql，返回到操作系统的命令行界面。

综上所述，给出的代码片段连接到数据库，切换到另一个数据库，删除了可能存在的 notes 表，然后创建了一个新的 notes 表，并退出了 psql。


```

### Step 3. Run the seed script：自动生成一些数据

Finally, run `npm run seed` to populate some data.

And you're done!



## Notes about this app

The demo is a note-taking app called **React Notes**. It consists of a few major parts:

- It uses a Webpack plugin (not defined in this repo) that allows us to only include client components in build artifacts
- An Express server that:
  - Serves API endpoints used in the app
  - Renders Server Components into a special format that we can read on the client
- A React app containing Server and Client components used to build React Notes

This demo is built on top of our Webpack plugin, but this is not how we envision using Server Components when they are stable. They are intended to be used in a framework that supports server rendering — for example, in Next.js. This is an early demo -- the real integration will be developed in the coming months. Learn more in the [announcement post](https://reactjs.org/server-components).




