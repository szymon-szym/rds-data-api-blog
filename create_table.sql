CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  image VARCHAR(255) NOT NULL
);

INSERT INTO items (id, name, description, price, image) VALUES
(1, 'Item 1', 'Description for Item 1', 10.99, 'item1.jpg'),
(2, 'Item 2', 'Description for Item 2', 15.99, 'item2.jpg'),
(3, 'Item 3', 'Description for Item 3', 20.99, 'item3.jpg'),
(4, 'Item 4', 'Description for Item 4', 25.99, 'item4.jpg'),
(5, 'Item 5', 'Description for Item 5', 30.99, 'item5.jpg');
