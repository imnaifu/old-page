# Index
- Indexes are `special lookup tables` that the database search engine can use to speed up data retrieval
- An index is used to speed up the performance of queries. It does this by reducing the number of database data pages that have to be visited/scanned.
- take book for example, a book is like a table with two columns 'title' and 'content'
    - normal search is like search the whole book
    - but if you add title to the index, it's like add a 目录 to the book, so you can search by the title easily.
    - another thing is that if the title only has 2 or 3 distinct value, index is not needed 
- index helps to speed up the `select` and `where`
- but slow down the data input, with the `update`, `insert` and `delete` statements
- A specialized index (e.g., in B-TREE structure) could reach the record without comparing every records. 
However, the index needs to be rebuilt whenever a record is changed, which results in overhead associated with using indexes.
- index can be defined on 
    - a single column
    - a set of columns (called concatenated index)
    - part of a column (e.g., first 10 characters of a VARCHAR(100)) (called partial index). 
- You could built more than one index in a table. For example, if you often search for a customer using either customerName or phoneNumber, you could speed up the search by building an index on column customerName, as well as phoneNumber. Most RDBMS builds index on the primary key automatically.

# type
- index
- unique index
- primary key
- composite index (apply on two or more columns)

# usage
- `CREATE INDEX index_name ON table_name(column_name)`;
- `DROP INDEX index_name`
- add `EXPLAIN` before `select` can show the usage of index


# DB Engine (InnoDB && MyISAM)
1. InnoDB support '**transaction**' (atomic process)
2. InnoDB support 'foreign key' (better not use) 
3. If you don't need the feature provided by InnoDb, 
chose MyISAM, because MyISAM is a little faster than InnoDB

|Engine|Transaction|Lock|Avoid|
|--|--|--|--|
|MyISAM|not support|table-level|many insert|
|Innodb|support|row-level|none|


# DML, DDL
## DDL - **Data Definition Language**  
- it is used to **define data structures**
- such as `create table`, `alter table`, ...
    
## DML - **Data Manipulation Language** 
- it is used to **manipulate data itself**
- such as `insert`, `update`, `delete`, ...

