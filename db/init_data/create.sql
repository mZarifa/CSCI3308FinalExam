DROP TABLE IF EXISTS artist_reviews;
CREATE TABLE IF NOT EXISTS artist_reviews(
  id VARCHAR(30) PRIMARY KEY,
  artist_name TEXT,   
  review_text TEXT,
  review_date DATE NOT NULL
);

INSERT INTO artist_reviews(id, artist_name, review_text, review_date)
VALUES('000001', 'Test1', 'Some words go here', '20200915'),
('000002', 'Test4', 'Some words go here', '20200915'),
('000003', 'Test3', 'Some words go here', '20200915');
