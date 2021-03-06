set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

create table "todos" (
  "todoId" serial not null,
  "task" text not null,
  "isCompleted" bool default false
)
