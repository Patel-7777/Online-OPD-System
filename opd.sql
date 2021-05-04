-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 25, 2021 at 06:16 AM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sgp`
--

-- --------------------------------------------------------

--
-- Table structure for table `opd`
--

CREATE TABLE `opd` (
  `id` int(10) NOT NULL,
  `PatientName` varchar(255) NOT NULL,
  `Age` int(10) NOT NULL,
  `Gender` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `ContactNo` varchar(255) NOT NULL,
  `DoctorName` varchar(255) NOT NULL,
  `AppointmentDate` varchar(255) NOT NULL,
  `Time` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `opd`
--

INSERT INTO `opd` (`id`, `PatientName`, `Age`, `Gender`, `Email`, `ContactNo`, `DoctorName`, `AppointmentDate`, `Time`) VALUES
(2, 'Drashti Fefar', 19, 'female', 'drashtifefar7777@gmail.com', '987654321', 'Dr. V.M. Shah', '2021-04-25', '9:00 am to 9:15 am'),
(3, 'Krupali Patel', 18, 'female', 'krupalipatel3013@gmail.com', '123456789', 'Dr. Savitri Shrivastava', '2021-04-27', '9:15 am to 9:30 am'),
(4, 'Krish Fefar', 12, 'female', 'fefarkrish26@gmail.com', '654987321', 'Dr. Ramakanta Panda', '2021-05-08', '10:00 am to 10:15 am'),
(5, 'Subham Patel', 15, 'male', 'sbpatel24102004@gmail.com', '8976543212', 'Dr. Rachel Parker', '2021-04-14', '10:45 am to 11:00 am'),
(6, 'Gajendra Patel', 45, 'male', 'gajendra.r.fefar@gmail.com', '321459876', 'Dr. Ian Smith', '2021-05-13', '03:00 pm to 03:15 pm'),
(7, 'harsh Patel', 15, 'male', 'harshpatel13052005@gmail.com', '9828211678', 'Dr. Shobha Rani', '2021-05-01', '03:15 pm to 03:30 pm'),
(8, 'Uma Patel', 46, 'female', '19dit016@charusat.edu.in', '9513578462', 'Dr. V.M. Shah', '2021-05-26', '11:45 am to 12:00 am'),
(9, 'Nishita Aredeshna', 18, 'female', '19dit003@charusat.edu.in', '7539512684', 'Dr. Savitri Shrivastava', '2021-05-17', '04:00 pm to 04:15 pm'),
(10, 'Shobhna Satapara', 50, 'female', '19dit048@charusat.edu.in', '486259731', 'Dr. Ramakanta Panda', '2021-04-13', '11:30 am to 11:45 am'),
(11, 'Shubham Patel', 22, 'female', 'shubhamsatapara@gmail.com', '987654321', 'Dr. Rachel Parker', '2021-05-06', '03:00 pm to 03:15 pm'),
(12, 'Hirva Patel', 29, 'female', '19ee012@gmail.com', '9876543210', 'Dr. Ian Smith', '2021-04-24', '9:45 am to 10:00 am'),
(13, 'Heer Pannara', 23, 'female', 'hirvapatel50@gmail.com', '5632789144', 'Dr. Shobha Rani', '2021-04-25', '03:30 pm to 03:45 pm');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `opd`
--
ALTER TABLE `opd`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `opd`
--
ALTER TABLE `opd`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
