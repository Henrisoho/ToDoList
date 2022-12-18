CREATE TABLE "toDos"(
"id" serial PRIMARY KEY,
"toDoItem" VARCHAR(500),
"status" VARCHAR(500),
"time" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP);

INSERT INTO "toDos"
("toDoItem", "status")
VALUES
('Grab Sarah some popsicles from the store', 'To Do'),
('Make a cake for everyone coming for christmas', 'Done');