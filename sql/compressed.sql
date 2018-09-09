--staff table 

CREATE TABLE `staff` (
  `staffId` int(7) NOT NULL,
  `idNum` varchar(10) COLLATE utf8_bin NOT NULL,
  `firstName` varchar(30) COLLATE utf8_bin NOT NULL,
  `middleName` varchar(30) COLLATE utf8_bin NOT NULL,
  `lastName` varchar(30) COLLATE utf8_bin NOT NULL,
  `nickName` varchar(30) COLLATE utf8_bin NOT NULL,
  `birthDate` date NOT NULL,
  `hiredDate` date NOT NULL,
  `email` varchar(30) COLLATE utf8_bin NOT NULL,
  `phoneNumber` varchar(11) COLLATE utf8_bin NOT NULL,
  `statId` int(7) NOT NULL,
  `jobId` int(7) NOT NULL,
  `teamId` int(7) NOT NULL,
  `passCode` varchar(32) COLLATE utf8_bin NOT NULL,
  `img` varchar(40) COLLATE utf8_bin NOT NULL,
  `dateUpdated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

ALTER TABLE `staff`
  ADD PRIMARY KEY (`staffId`),
  ADD UNIQUE KEY `idNum` (`idNum`),
  ADD KEY `statId` (`statId`),
  ADD KEY `jobId` (`jobId`),
  ADD KEY `teamId` (`teamId`);

ALTER TABLE `staff`
  MODIFY `staffId` int(7) NOT NULL AUTO_INCREMENT;

ALTER TABLE `staff`
  ADD CONSTRAINT `staff_ibfk_1` FOREIGN KEY (`statId`) REFERENCES `empstatus` (`statId`),
  ADD CONSTRAINT `staff_ibfk_2` FOREIGN KEY (`jobId`) REFERENCES `jobdesc` (`jobId`),
  ADD CONSTRAINT `staff_ibfk_3` FOREIGN KEY (`teamId`) REFERENCES `team` (`teamId`);
COMMIT;

--
-- Table structure for table `empstatus`
--

CREATE TABLE `empstatus` (
  `statId` int(7) NOT NULL,
  `statDesc` varchar(20) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

INSERT INTO `empstatus` (`statId`, `statDesc`) VALUES
(1, 'Probationary'),
(2, 'Regular'),
(3, 'Resigned');

ALTER TABLE `empstatus`
  ADD PRIMARY KEY (`statId`);

ALTER TABLE `empstatus`
  MODIFY `statId` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

--
-- Table structure for table `jobdesc`
--

CREATE TABLE `jobdesc` (
  `jobId` int(7) NOT NULL,
  `jobName` varchar(30) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

INSERT INTO `jobdesc` (`jobId`, `jobName`) VALUES
(1, 'Leader'),
(2, 'Sub Leader'),
(3, 'Cad Engineer');

ALTER TABLE `jobdesc`
  ADD PRIMARY KEY (`jobId`);

ALTER TABLE `jobdesc`
  MODIFY `jobId` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

--
-- Table structure for table `team`
--

CREATE TABLE `team` (
  `teamId` int(7) NOT NULL,
  `teamName` varchar(30) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

INSERT INTO `team` (`teamId`, `teamName`) VALUES
(1, 'Revision');

ALTER TABLE `team`
  ADD PRIMARY KEY (`teamId`);

ALTER TABLE `team`
  MODIFY `teamId` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

--
-- Table structure for table `process_table`
--

CREATE TABLE `process_table` (
  `processId` int(11) NOT NULL,
  `processName` varchar(30) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

INSERT INTO `process_table` (`processId`, `processName`) VALUES
(1, 'Encoding'),
(2, '1st Check'),
(3, '1st Revision'),
(4, '2nd Check'),
(5, '2nd Revision'),
(6, 'Final Check'),
(7, 'Final Revision');

ALTER TABLE `process_table`
  ADD PRIMARY KEY (`processId`);

ALTER TABLE `process_table`
  MODIFY `processId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

--
-- Table structure for table `event_table`
--

CREATE TABLE `event_table` (
  `eventId` int(7) NOT NULL,
  `eventName` varchar(30) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

INSERT INTO `event_table` (`eventId`, `eventName`) VALUES
(1, 'Received'),
(2, 'Start'),
(3, 'Pause'),
(4, 'Continue'),
(5, 'Turn Over'),
(6, 'Finish');

ALTER TABLE `event_table`
  ADD PRIMARY KEY (`eventId`);

ALTER TABLE `event_table`
  MODIFY `eventId` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

--
-- Table structure for table `housetype_table`
--

CREATE TABLE `housetype_table` (
  `typeId` int(7) NOT NULL,
  `typeName` varchar(30) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

ALTER TABLE `housetype_table`
  ADD PRIMARY KEY (`typeId`);

ALTER TABLE `housetype_table`
  MODIFY `typeId` int(7) NOT NULL AUTO_INCREMENT;
COMMIT;

--
-- Table structure for table `plan_table`
--

CREATE TABLE `plan_table` (
  `planId` int(7) NOT NULL,
  `planNumber` varchar(30) COLLATE utf8_bin NOT NULL,
  `planName` varchar(30) COLLATE utf8_bin NOT NULL,
  `typeId` int(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

ALTER TABLE `plan_table`
  ADD PRIMARY KEY (`planId`),
  ADD KEY `typeId` (`typeId`);

ALTER TABLE `plan_table`
  MODIFY `planId` int(7) NOT NULL AUTO_INCREMENT;

ALTER TABLE `plan_table`
  ADD CONSTRAINT `plan_table_ibfk_1` FOREIGN KEY (`typeId`) REFERENCES `housetype_table` (`typeId`);
COMMIT; 

--
-- Table structure for table `gravity_table`
--

CREATE TABLE `gravity_table` (
  `gravityId` int(7) NOT NULL,
  `gravityName` varchar(10) COLLATE utf8_bin NOT NULL,
  `gravityDesc` varchar(50) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

ALTER TABLE `gravity_table`
  ADD PRIMARY KEY (`gravityId`);

ALTER TABLE `gravity_table`
  MODIFY `gravityId` int(7) NOT NULL AUTO_INCREMENT;
COMMIT;

--
-- Table structure for table `receive_table`
--

CREATE TABLE `receive_table` (
  `receiveId` int(7) NOT NULL,
  `planId` int(7) NOT NULL,
  `receiveDate` date NOT NULL,
  `dueDate` date NOT NULL,
  `gravityId` int(7) NOT NULL,
  `remark` varchar(50) COLLATE utf8_bin NOT NULL,
  `status` varchar(20) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

ALTER TABLE `receive_table`
  ADD PRIMARY KEY (`receiveId`),
  ADD KEY `planId` (`planId`),
  ADD KEY `gravityId` (`gravityId`);

ALTER TABLE `receive_table`
  MODIFY `receiveId` int(7) NOT NULL AUTO_INCREMENT;

--
-- Table structure for table `monitoring_table`
--

CREATE TABLE `monitoring_table` (
  `monitoringId` int(7) NOT NULL,
  `receiveId` int(7) NOT NULL,
  `processId` int(7) NOT NULL,
  `eventId` int(7) NOT NULL,
  `staffId` int(7) NOT NULL,
  `note` varchar(50) COLLATE utf8_bin NOT NULL,
  `time` datetime NOT NULL,
  `dateUpdated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

ALTER TABLE `monitoring_table`
  ADD PRIMARY KEY (`monitoringId`),
  ADD KEY `receiveId` (`receiveId`),
  ADD KEY `processId` (`processId`),
  ADD KEY `eventId` (`eventId`),
  ADD KEY `staffId` (`staffId`);

ALTER TABLE `monitoring_table`
  MODIFY `monitoringId` int(7) NOT NULL AUTO_INCREMENT;

ALTER TABLE `monitoring_table`
  ADD CONSTRAINT `monitoring_table_ibfk_1` FOREIGN KEY (`receiveId`) REFERENCES `receive_table` (`receiveId`),
  ADD CONSTRAINT `monitoring_table_ibfk_2` FOREIGN KEY (`processId`) REFERENCES `process_table` (`processId`),
  ADD CONSTRAINT `monitoring_table_ibfk_3` FOREIGN KEY (`eventId`) REFERENCES `event_table` (`eventId`),
  ADD CONSTRAINT `monitoring_table_ibfk_4` FOREIGN KEY (`staffId`) REFERENCES `staff` (`staffId`);
COMMIT;