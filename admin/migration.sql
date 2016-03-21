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

CREATE TABLE IF NOT EXISTS `texts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `text` text NOT NULL,
  `header` text NOT NULL,
  `group` varchar(255) NOT NULL,
  `specialty` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;
INSERT INTO `texts` (`id`, `text`, `header`, `group`, `specialty`) VALUES
(1, 'За 15 лет практики в качестве ведущего врача-диетолога в нашей клинике, это первый случай, когда продукт подходит абсолютно всем пациентам. Отсутствие потенциальных аллергенов в составе, сбалансированность веществ и микроэлементов позволяют употреблять Moon Food практически всем. За 4 месяца, в течение которых я предлагаю эти бутылочки своим пациентам, не наблюдалось ни одного негативного случая или побочного эффекта. Да что там говорить, я и сама в последнее время частенько пользуюсь этим уникальным продуктом. Это инновации, которые качественно меняют нашу жизнь: будущее в диетическом питании пришло к нам уже сегодня.', 'Виктор Стрижевский', 'specialist', 'фитнес-тренер'),
(2, 'Данный продукт содержит все необходимые микроэлементы, витамины и питательные вещества. Продукт сбалансирован для повседневного употребления, который заботится о вашем иммунитете. Благодаря Mood Food Вы больше не почувствуете послеобеденной тяжести в своем желудке. ', 'Ирина Петрова', 'specialist', 'терапевт'),
(3, ' Mood Food был проверен на анализ сырья находящегося в данном продукте, реакционной смеси веществ, продукта и полупродукта. Mood Food полностью одобрен и пригоден для употребления человеком, не вызывает побочных эффектов и аллергию. ', 'Лидия Иванова', 'specialist', 'химик аналитик');
