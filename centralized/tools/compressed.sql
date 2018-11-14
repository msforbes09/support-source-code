CREATE TABLE `department` (
  `deptId` int(7) NOT NULL,
  `deptName` varchar(30) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

CREATE TABLE `mistake_category` (
  `mistakeId` int(7) NOT NULL,
  `deptId` int(7) NOT NULL,
  `mistakeCategory` varchar(1) COLLATE utf8_bin NOT NULL,
  `mistakeDesc` varchar(30) COLLATE utf8_bin NOT NULL,
  `mistakePoint` decimal(7,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

CREATE TABLE `plan_category` (
  `categoryId` int(7) NOT NULL,
  `deptId` int(7) NOT NULL,
  `planCategory` varchar(30) COLLATE utf8_bin NOT NULL,
  `categoryDesc` varchar(30) COLLATE utf8_bin NOT NULL,
  `categoryPoint` int(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

CREATE TABLE `process` (
  `procId` int(7) NOT NULL,
  `deptId` int(7) NOT NULL,
  `procName` varchar(30) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

CREATE TABLE `process_event` (
  `eventId` int(7) NOT NULL,
  `deptId` int(7) NOT NULL,
  `eventName` varchar(30) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

CREATE TABLE `staff` (
  `staffId` int(7) NOT NULL,
  `idNum` varchar(10) COLLATE utf8_bin NOT NULL,
  `firstName` varchar(30) COLLATE utf8_bin NOT NULL,
  `middleName` varchar(30) COLLATE utf8_bin NOT NULL,
  `lastName` varchar(30) COLLATE utf8_bin NOT NULL,
  `nickName` varchar(30) COLLATE utf8_bin NOT NULL,
  `deptId` int(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

ALTER TABLE `department`
  ADD PRIMARY KEY (`deptId`),
  ADD UNIQUE KEY `deptName` (`deptName`);

ALTER TABLE `mistake_category`
  ADD PRIMARY KEY (`mistakeId`),
  ADD UNIQUE KEY `deptId` (`deptId`,`mistakeCategory`);

ALTER TABLE `plan_category`
  ADD PRIMARY KEY (`categoryId`),
  ADD UNIQUE KEY `deptId` (`deptId`,`planCategory`) USING BTREE;

ALTER TABLE `process`
  ADD PRIMARY KEY (`procId`),
  ADD UNIQUE KEY `deptId` (`deptId`,`procName`);

ALTER TABLE `process_event`
  ADD PRIMARY KEY (`eventId`),
  ADD UNIQUE KEY `deptId` (`deptId`,`eventName`);

ALTER TABLE `staff`
  ADD PRIMARY KEY (`staffId`),
  ADD UNIQUE KEY `idNum` (`idNum`),
  ADD KEY `deptId` (`deptId`);


ALTER TABLE `department`
  MODIFY `deptId` int(7) NOT NULL AUTO_INCREMENT;

ALTER TABLE `mistake_category`
  MODIFY `mistakeId` int(7) NOT NULL AUTO_INCREMENT;

ALTER TABLE `plan_category`
  MODIFY `categoryId` int(7) NOT NULL AUTO_INCREMENT;

ALTER TABLE `process`
  MODIFY `procId` int(7) NOT NULL AUTO_INCREMENT;

ALTER TABLE `process_event`
  MODIFY `eventId` int(7) NOT NULL AUTO_INCREMENT;

ALTER TABLE `staff`
  MODIFY `staffId` int(7) NOT NULL AUTO_INCREMENT;


ALTER TABLE `mistake_category`
  ADD CONSTRAINT `mistake_category_ibfk_1` FOREIGN KEY (`deptId`) REFERENCES `department` (`deptid`);

ALTER TABLE `plan_category`
  ADD CONSTRAINT `plan_category_ibfk_1` FOREIGN KEY (`deptId`) REFERENCES `department` (`deptid`);

ALTER TABLE `process`
  ADD CONSTRAINT `process_ibfk_1` FOREIGN KEY (`deptId`) REFERENCES `department` (`deptid`);

ALTER TABLE `process_event`
  ADD CONSTRAINT `process_event_ibfk_1` FOREIGN KEY (`deptId`) REFERENCES `department` (`deptid`);

ALTER TABLE `staff`
  ADD CONSTRAINT `staff_ibfk_1` FOREIGN KEY (`deptId`) REFERENCES `department` (`deptid`);
COMMIT;