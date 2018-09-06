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
-- Table structure for table `revisionprocess`
--

CREATE TABLE `revisionprocess` (
  `processId` int(11) NOT NULL,
  `processName` varchar(30) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

INSERT INTO `revisionprocess` (`processId`, `processName`) VALUES
(1, 'Encoding'),
(2, '1st Check'),
(3, '1st Revision'),
(4, '2nd Check'),
(5, '2nd Revision'),
(6, 'Final Check'),
(7, 'Final Revision');

ALTER TABLE `revisionprocess`
  ADD PRIMARY KEY (`processId`);

ALTER TABLE `revisionprocess`
  MODIFY `processId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

--
-- Table structure for table `processevent`
--

CREATE TABLE `processevent` (
  `eventId` int(7) NOT NULL,
  `eventName` varchar(30) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

INSERT INTO `processevent` (`eventId`, `eventName`) VALUES
(1, 'Received'),
(2, 'Start'),
(3, 'Pause'),
(4, 'Continue'),
(5, 'Turn Over'),
(6, 'Finish');

ALTER TABLE `processevent`
  ADD PRIMARY KEY (`eventId`);

ALTER TABLE `processevent`
  MODIFY `eventId` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;