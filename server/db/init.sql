DROP TABLE IF EXISTS products;

CREATE TABLE IF NOT EXISTS products(
    id SERIAL PRIMARY KEY,
    name VARCHAR(25),
    price INTEGER,
    img TEXT
);


INSERT INTO products
(name, price, img)
VALUES
('Quazzi', 1000, 'https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/60555762_927081904301311_4810089799283113984_n.jpg?_nc_cat=107&_nc_oc=AQlkaFSY294amrPAIxFnrT4tIEgFBjc2-h29js8s60d-3GxcF7E9g6WyWW5LKxNsUPM&_nc_ht=scontent.fphx1-1.fna&oh=55b68dcfbfc5183949982f3bbc9facba&oe=5DBC8301');

INSERT INTO products
(name, price, img)
VALUES
('Malaking', 1, 'https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/164531_185451504800686_2810763_n.jpg?_nc_cat=107&_nc_oc=AQkJpVqMk8-WX6Ki8N2PKanZfJWghr-k34tfHbMVbiBS2BQcCt26PEtlAyiqMPBC27M&_nc_ht=scontent.fphx1-1.fna&oh=909fc053aeab13f54ae25046d1def83b&oe=5DB9FA4A');

INSERT INTO products
(name, price, img)
VALUES
('Mobeta', 999, 'https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/13938631_10153716192074147_2333936837826980542_n.jpg?_nc_cat=103&_nc_oc=AQnjmClFnJ6z4GoAIi8t41SG_jTlKDyAu2ETMlj7Gs4kltv8SWnBDdhFIdeDnIcm3OM&_nc_ht=scontent.fphx1-2.fna&oh=e519156c485b26d7d4180c0ceb324dab&oe=5DC5351B');

INSERT INTO products
(name, price, img)
VALUES
('Noeski', 998, 'https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-1/p320x320/58384166_1909899582448826_5943012269712474112_n.jpg?_nc_cat=104&_nc_oc=AQkxIjcMOHKFx6MxNNeP8ukmaUSoFjJSmSu9lY99GLyH_B_BtDpTA8FcU6M_tCHNC7I&_nc_ht=scontent.fphx1-2.fna&oh=064f639d57736ae81c92e5987ae07a7b&oe=5DBB60C2');

INSERT INTO products
(name, price, img)
VALUES
('Mr. Asia', 999999, 'https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/44057825_562242597564817_8283835309355958272_n.jpg?_nc_cat=106&_nc_oc=AQmw6yCgQ2RDMpQq0dy2YQR_D_Mt0NNDj12qFDqTuvNquU1fNWSeUEltJSWrKx7ZEQ8&_nc_ht=scontent.fphx1-1.fna&oh=bac1029346bcf871a17994dd79c3fb62&oe=5DB570B3');

INSERT INTO products
(name, price, img)
VALUES
('Fasi', 999, 'https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/58384492_10217889643423353_7682227111217594368_o.jpg?_nc_cat=101&_nc_oc=AQlWJz6GCF3nei-Ql-dGjks_17N-2eBN8V1574KrENm6ZiYvQ22--zzN6ALRdETQj5I&_nc_ht=scontent.fphx1-2.fna&oh=4ce05eaa71e42e631a53e8d3be36f4b5&oe=5DC3979F');