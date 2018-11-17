INSERT INTO national_parks(name, image_url, location, date_established, acres, description)
Values ($1,$2,$3,$4,$5,$6);

SELECT * FROM national_parks; 