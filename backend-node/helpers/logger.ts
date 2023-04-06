// this file is for handling the error
// we use winston for handling the error
// we use process.on for handling the error in promise
import winston from "winston";
// this is for handling the error in console
winston.add(new winston.transports.Console({ level: "error" }));
// this is for handling the error in file
winston.add(
  new winston.transports.File({ filename: "error.log", level: "error" })
);
// this is for handling the error in exception
winston.exceptions.handle(
  new winston.transports.Console({ level: "error" }),
  new winston.transports.File({ level: "error", filename: "error.log" })
);
// this is for handling the error in promise
process.on("unhandledRejection", (ex) => {
  throw ex;
});
