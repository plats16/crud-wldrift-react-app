-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 13, 2022 at 04:00 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `simplecrud`
--

-- --------------------------------------------------------

--
-- Table structure for table `hero`
--

CREATE TABLE `hero` (
  `id` int(11) NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `heroclass` varchar(100) DEFAULT NULL,
  `role` varchar(100) DEFAULT NULL,
  `region` varchar(100) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hero`
--

INSERT INTO `hero` (`id`, `image`, `name`, `heroclass`, `role`, `region`, `createdAt`, `updatedAt`) VALUES
(22, NULL, 'Jax', 'Fighter', 'Top', 'Demacia', '2022-06-12 17:53:23', '2022-06-12 17:53:23'),
(23, NULL, 'Darius', 'Fighter/Tank', 'Solo Top', 'Noxus', '2022-06-12 17:54:07', '2022-06-12 17:54:07'),
(24, NULL, 'Ashe', 'Marskman', 'Carry/Bottom', 'Freljord', '2022-06-12 17:54:40', '2022-06-12 17:54:40'),
(25, NULL, 'Jinx', 'Marksman', 'Carry', 'Piltover', '2022-06-12 17:58:55', '2022-06-12 17:58:55');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hero`
--
ALTER TABLE `hero`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hero`
--
ALTER TABLE `hero`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
