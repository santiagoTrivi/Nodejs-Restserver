
CREATE DATABASE `sql_NodejsShop`;
USE sql_NodejsShop;

CREATE TABLE `rols`(
    `rolID` INT NOT NULL auto_increment,
    `rol` VARCHAR(50) NOT NULL,
    `createdAt` TIMESTAMP(5),
    `updatedAt` TIMESTAMP(5),   
    UNIQUE INDEX `rol_uniquex` (`rol` ASC) VISIBLE,
    PRIMARY KEY(`rolID`)
);

CREATE TABLE `users`(
    `userID` INT NOT NULL auto_increment,
    `name` VARCHAR(50) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(300) NOT NULL,
    `rol_id` INT,
    `google` BOOLEAN DEFAULT false,
    `img` VARCHAR(500),
    `status` BOOLEAN DEFAULT true,
    `createdAt` TIMESTAMP(5),
    `updatedAt` TIMESTAMP(5),    
    UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
	UNIQUE INDEX `password_UNIQUE` (`password` ASC) VISIBLE,
    CONSTRAINT `rol_id` FOREIGN KEY (`rol_id`) REFERENCES `rols`(`rolID`),
    PRIMARY KEY(`userID`));
    
CREATE TABLE `categories`(
	`id` INT NOT NULL auto_increment,
	`categoryName` VARCHAR(50),
	`userID` INT,
    `status` TINYINT DEFAULT 1,
    `createdAt` TIMESTAMP(5),
    `updatedAt` TIMESTAMP(5),
	CONSTRAINT `userID` FOREIGN KEY (`userID`) REFERENCES `users`(`id`),
    PRIMARY KEY(`categoryID`)
);

CREATE TABLE `products`(
	`productID` INT NOT NULL auto_increment,
	`producName` VARCHAR(50),
    `unitPrice` INT,
    `available` BOOLEAN,
	`user_ID` INT,
    `categoryID` INT,
	CONSTRAINT `user_ID` FOREIGN KEY (`user_ID`) REFERENCES `users`(`userID`),
    CONSTRAINT `categoryID` FOREIGN KEY (`categoryID`) REFERENCES `categories`(`categoryID`),
    PRIMARY KEY(`productID`)
);

show tables;

