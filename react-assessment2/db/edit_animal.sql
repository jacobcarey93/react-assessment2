UPDATE animals
SET name = $2, img = $3
WHERE id = $1;