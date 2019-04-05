# my-vue-app

> Vue js project for TapOnIt sample app

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## MySQL DB Queries

1. Create new database.

```
CREATE DATABASE sample_app；
```

2. Create a table storing product information.

```
CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    product_photo VARCHAR(100),
    price DECIMAL(10,2),
    likes INT
)；
```

3. Populate 5 example items.

```
INSERT INTO products 
	(title, description, product_photo, price, likes) 
VALUES 
	('Peter Millar Stretch Tattersall Woven Sport Shirt','This premier sport shirt is made from a unique performance fabric that offers stretch for optimum mobility and ideal comfort on the course or around town. The innovative fabric construction allows for exceptional breathability and moisture management that keeps the garment fresh throughout wear. Styled with a button down collar, French placket, left chest pocket and double button barrel cuffs. 94% nylon 6% spandex sport shirt. Imported.','../static/img/products/product_1.jpg',152.98,17),
    ('Nike Tech Quarter Zip Vest','185g stretch woven. Decoupled lower body for enhanced mobility, inner hand warmer connected to sleeve, side zip pockets, printed center front zipper. Wear for training or practice. Imported.','../static/img/products/product_2.jpg', 150, 33),
    ('Nike Long Sleeve','DRI FIT DOUBLE KNIT ENGINEERED FABRICATION PROVIDES VISUAL QUES TO TECHNOLOGY, SPECIFICALLY IN THE SLEEVES WHERE LARGER HOLE MESH ALLOWS BREATHABILITY, ELBOW AREA IS ARTICULATED FOR MOBILITY, AND TAPERED SLEEVE FOR ZERO DISTRACTIONS. MOTION VENT ALLOWS THE TOP TO MOVE WITH YOU AND SHOULDER MOBILITY SEAM WITH BONDED BEMIS TAPING, FIT TO PROVIDE OPTIMAL RANGE OF MOTION WHEN PUTTING UP SHOTS. SOFT HAND KNIT WITH PLENTY OF STRETCH PROVIDES OPTIMUM COMFORT. SCHOOL NAME PRINTED ACROSS THE FRONT CHEST. CRAFTED FOR THE BASKETBALL ATHLETE. Imported.','../static/img/products/product_3.jpg',120,72),
    ('Peter Millar College Stripe Stretch Jersey Polo','Lightweight, breathable, quick dry performance fabric stretches four ways for maximum comfort. 92% polyester, 8% spandex with a knit collar and UPF 50 sun protection. This solid polo shirt delivers no matter how hot the matchup. Imported.','../static/img/products/product_4.jpg',112.98,123),
    ('Nike Game Jersey','100% Polyester. Imported.','../static/img/products/product_5.jpg',100,99);
```

4. Counting the numer of likes of all products in the DB.

```
SELECT SUM(likes) FROM products;
```