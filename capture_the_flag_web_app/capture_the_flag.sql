-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 19, 2023 at 05:13 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.0.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ctf`
--
CREATE DATABASE IF NOT EXISTS `ctf` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `ctf`;

-- --------------------------------------------------------

--
-- Table structure for table `challenges_categories`
--

CREATE TABLE `challenges_categories` (
  `cat_id` int(11) NOT NULL,
  `category_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `challenges_categories`
--

INSERT INTO `challenges_categories` (`cat_id`, `category_name`) VALUES
(1, 'Digital Forensics'),
(2, 'Cryptography'),
(3, 'Reverse Engineering'),
(4, 'Web Exploitation');

-- --------------------------------------------------------

--
-- Table structure for table `player`
--

CREATE TABLE `player` (
  `player_id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `player`
--

INSERT INTO `player` (`player_id`, `username`, `email`, `password`) VALUES
(4, 'kelvin', 'kelvin@gmail.com', 'ebf501ccb64b59cfb91dfaf339945793'),
(5, 'jane', 'jane@gmail.com', '5570c0cd80d575f9db152f9cc8bf1c6a'),
(6, 'mary', 'wangeci@gmail.com', 'f387c152606d845d3c4fcb4137b0c084'),
(7, 'james', 'james@gmail.com', '9ba36afc4e560bf811caefc0c7fddddf'),
(8, 'henry', 'henry@gmail.com', '027e4180beedb29744413a7ea6b84a42'),
(9, 'drake', 'drake@gmail.com', 'b4688aaaaf17fad03225929fe56ad458');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `challenges_categories`
--
ALTER TABLE `challenges_categories`
  ADD PRIMARY KEY (`cat_id`);

--
-- Indexes for table `player`
--
ALTER TABLE `player`
  ADD PRIMARY KEY (`player_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `challenges_categories`
--
ALTER TABLE `challenges_categories`
  MODIFY `cat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `player`
--
ALTER TABLE `player`
  MODIFY `player_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
