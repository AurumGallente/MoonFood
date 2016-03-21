CREATE TABLE IF NOT EXISTS `users` (
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
 `login` varchar(255) NOT NULL,
 `password` varchar(255) NOT NULL,
 PRIMARY KEY (`id`),
 UNIQUE KEY `login` (`login`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO  `users` (  `login` ,  `password` ) 
VALUES (
'admin',  '202cb962ac59075b964b07152d234b70'
);