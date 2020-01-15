This is my sample to use react hooks and material ui components.
There are server and client code.

And here is sql for create DB
database name is management.

CREATE TABLE `customer` (
`id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
`image` VARCHAR(1024) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
`name` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
`birthday` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
`gender` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
`job` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
`createDate` DATETIME NULL DEFAULT NULL,
`isDeleted` INT(11) UNSIGNED NOT NULL DEFAULT '0',
PRIMARY KEY (`id`)
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
AUTO_INCREMENT=37
;
