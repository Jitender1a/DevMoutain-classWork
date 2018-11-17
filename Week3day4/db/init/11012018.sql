create table national_parks(
    id serial primary key,
    name varchar,
    image_url text,
    location varchar,
    date_established date,
    acres decimal,
    description text 
);
