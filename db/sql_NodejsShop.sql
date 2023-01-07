use sql_NodejsShop;
create table `users`(
    `userID` int not null auto_increment,
    `name` varchar(20) not null,
    `email` varchar(255) not null,
    `password` varchar(32) not null,
    `google` boolean,
    `role` varchar(50),
    `img` varchar(500),
    `status` boolean,
    UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
	UNIQUE INDEX `password_UNIQUE` (`password` ASC) VISIBLE,
    primary key(`userID`));
    
create table `categories`(
	`categoryID` int not null auto_increment,
	`categoryName` varchar(50),
	`userID` int,
	constraint `userID` foreign key(`userID`) references `users`(`userID`),
    primary key(`categoryID`)
);

create table `products`(
	`productID` int not null auto_increment,
	`producName` varchar(50),
    `unitPrice` int,
    `available` boolean,
	`user_ID` int,
    `categoryID` int,
	constraint `user_ID` foreign key(`user_ID`) references `users`(`userID`),
    constraint `categoryID` foreign key(`categoryID`) references `categories`(`categoryID`),
    primary key(`productID`)
);

show tables;

