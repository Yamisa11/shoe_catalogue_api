create table shoes (
    id serial primary key, 
    shoe_brand varchar(100),
    shoe_name varchar(100),
    color varchar(50) ,
    shoe_size integer,
    shoe_price float, 
    stock integer,
    img_url text 
    );