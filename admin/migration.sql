CREATE TABLE IF NOT EXISTS `users` (
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
 `login` varchar(255) NOT NULL,
 `password` varchar(255) NOT NULL,
 PRIMARY KEY (`id`),
 UNIQUE KEY `login` (`login`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT IGNORE INTO  `users` (  `login` ,  `password` ) 
VALUES (
'admin',  '202cb962ac59075b964b07152d234b70'
);
CREATE TABLE IF NOT EXISTS `products` (
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
 `fio` text NOT NULL,
 `address` text NOT NULL,
 `phone` varchar(255) NOT NULL,
 `email` varchar(255) NOT NULL,
 `bottlecount` smallint(5) unsigned NOT NULL,
 `cost` float unsigned NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8

	
CREATE TABLE IF NOT EXISTS `bottlecost` (
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
 `cost` int(10) unsigned NOT NULL,
 `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
INSERT INTO `bottlecost`(`cost`) VALUES (400);
CREATE TABLE `texts` (
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
 `text` text NOT NULL,
 `header` text NOT NULL,
 `group` varchar(255) NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
