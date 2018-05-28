CREATE TABLE users(
  username_hash character(64),
  password_hash character(64)
);

INSERT INTO users(username_hash, password_hash) VALUES
('foo123', 'pass123'),
('bar456', 'word456');