update national_parks
set name = $2, location = $3, image_url=$4, description= $5, acres=$6, date_established= $7
where id=$1; 

SELECT * FROM national_parks; 