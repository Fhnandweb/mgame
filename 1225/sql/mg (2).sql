-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2018-12-22 11:33:12
-- 服务器版本： 10.1.28-MariaDB
-- PHP Version: 5.6.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mg`
--

-- --------------------------------------------------------

--
-- 表的结构 `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `un` varchar(100) DEFAULT NULL,
  `rtime` datetime DEFAULT NULL,
  `content` varchar(300) DEFAULT NULL,
  `lid` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `comment`
--

INSERT INTO `comment` (`id`, `un`, `rtime`, `content`, `lid`) VALUES
(1, 'mogu', '2018-12-19 18:43:50', '老铁加油', '1'),
(2, '不留名大侠', '2018-12-19 18:59:14', '老铁ok', '1'),
(3, '不留名大侠', '2018-12-19 19:45:37', '我觉得ok', '1'),
(36, '不留名大侠', '2018-12-19 20:20:35', '我服了', '2'),
(37, '不留名大侠', '2018-12-20 10:08:45', '你好', '10'),
(38, '不留名大侠', '2018-12-20 10:09:03', '666', '10'),
(44, '呦吼吼', '2018-12-20 10:28:39', 'one pices', '10'),
(45, '不留名大侠', '2018-12-20 11:02:32', 'fwqfwq', '10'),
(46, '不留名大侠', '2018-12-20 11:02:43', 'dafdsa', '5'),
(47, 'vaf', '2018-12-20 11:02:47', 'saf', '5'),
(48, '你猜', '2018-12-20 11:09:01', '我是谁', '26'),
(49, '不留名大侠', '2018-12-20 15:27:54', 'sss', '17'),
(50, '不留名大侠', '2018-12-20 15:48:34', '222', '9'),
(51, '不留名大侠', '2018-12-21 09:37:37', '666', '6'),
(52, '不留名大侠', '2018-12-22 17:41:13', 'dwqdwqdqddqdwqd', '34');

-- --------------------------------------------------------

--
-- 表的结构 `forum`
--

CREATE TABLE `forum` (
  `lid` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `content` varchar(500) DEFAULT NULL,
  `uname` varchar(16) DEFAULT NULL,
  `rtime` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `forum`
--

INSERT INTO `forum` (`lid`, `title`, `content`, `uname`, `rtime`) VALUES
(1, '[讨论] 新人报道', '新人报道请多多关照', '小明', '2018-12-14 14:25:36'),
(5, '[讨论] 新人报道', '新人报道请多多关照', '小a', '2018-12-14 14:25:37'),
(6, '[讨论] 人在江湖', '新人报道请多多关照', '小b', '2018-12-14 14:25:37'),
(7, '[讨论] 不会挨刀', '新人报道请多多关照', '小明', '2018-12-14 14:25:37'),
(9, '[讨论] 相忘于江湖', '新人报道请多多关照', '大哥大', '2018-12-14 14:25:37'),
(10, '[讨论] 若如初见', '新人报道请多多关照', '小照', '2018-12-14 14:25:37'),
(11, '[讨论] 改革春风', '新人报道请多多关照', '小慢', '2018-12-14 14:25:38'),
(12, '狄安娜是谁？', '新人报道请多多关照', '小明', '2018-12-14 14:25:38'),
(13, '[讨论] 电脑硬件对游戏的影响', '新人报道请多多关照', '小两', '2018-12-15 16:09:28'),
(14, '[讨论] 新人报道', '新人报道请多多关照', '小两', '2018-12-15 16:09:28'),
(15, '[讨论] 新人报道', '新人报道请多多关照', '小两', '2018-12-15 16:09:28'),
(17, '[讨论] 新人报道', '新人报道请多多关照', '小两', '2018-12-15 16:09:28'),
(18, '[讨论] 新人报道', '新人报道请多多关照', '小两', '2018-12-15 16:09:28'),
(19, '[讨论] 新人报道', '新人报道请多多关照', '小两', '2018-12-15 16:10:59'),
(20, '[讨论] 新人报道', '新人报道请多多关照', '小两', '2018-12-15 16:10:59'),
(21, '[讨论] 新人报道', '新人报道请多多关照', '小两', '2018-12-15 16:10:59'),
(22, '[讨论] 新人报道', '新人报道请多多关照', '小两', '2018-12-15 16:10:59'),
(23, '[求助] 如何升级硬件可以流畅运行绝地求生大逃杀', '\r\nCPU： I5 4590  主板：微星B85  内存：8G  固态硬盘：希捷1T  显卡：联众750Ti-1G 如何升级可以流畅运行绝地求生大逃杀  请不吝赐教', '冰无情伤', '2018-12-17 12:34:54'),
(24, '[攒机] 冒泡', '\r\n2333333333333333333333333', '小两', '2018-12-17 12:34:54'),
(25, '	打印 上一主题 下一主题 [攒机] 这配置能撑多久？2k分辨率玩3a大作', '新人报道请多多关照', '壮壮', '2018-12-17 12:34:54'),
(26, '[攒机] 为什么你们买显卡都喜欢N卡，A卡有那么差吗', '\r\n为什么你们买显卡都喜欢N卡，A卡有那么差吗？', 'mogu', '2018-12-17 12:36:02');

-- --------------------------------------------------------

--
-- 表的结构 `reg`
--

CREATE TABLE `reg` (
  `id` int(11) NOT NULL,
  `un` varchar(20) DEFAULT NULL,
  `up` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `reg`
--

INSERT INTO `reg` (`id`, `un`, `up`) VALUES
(1, 'yaya', '123456'),
(2, 'doudou', '123456'),
(3, 'dangdang', '123456'),
(9, 'fhn', '123456');

-- --------------------------------------------------------

--
-- 表的结构 `strategy`
--

CREATE TABLE `strategy` (
  `id` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `rtime` datetime DEFAULT NULL,
  `source` varchar(20) DEFAULT NULL,
  `author` varchar(20) DEFAULT NULL,
  `content` varchar(500) DEFAULT NULL,
  `imgurl1` varchar(100) DEFAULT NULL,
  `imgurl2` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `strategy`
--

INSERT INTO `strategy` (`id`, `title`, `rtime`, `source`, `author`, `content`, `imgurl1`, `imgurl2`) VALUES
(1, '《NBA2K18》灌篮高手MOD及使用方法 灌篮高手MOD怎么用', '2018-08-31 00:00:00', '巴布网', 'ldc1024', ' 灌篮高手是很多朋友非常喜欢的动漫，许多玩家都想在《NBA2K18》中体验下樱木、流川枫的威力，今天给大家带来“ldc1024”分享的《NBA2K18》灌篮高手MOD及使用方法，快来体验下动漫角色在游戏中的威力吧。\r\n              介绍\r\n              　　NBA2K18灌篮高手MOD下载地址：点击进入\r\n              　　包含湘北高校、山王工髙、陵南高校这三支球队。\r\n              安装及使用方法\r\n              正版\r\n              　　将压缩包解压后的“游戏图形文件”文件夹内的“waigua文件夹”及“2KWAIGUA.dll”和“dinput8.dll”放入NBA2K18.exe所在目录，然后在游戏中搜索名单“EGS-SlamDunk\r\n              For 2K18 V1.0”作者cfword（或者按照作者id搜索cfword，然后下载其名称为“EGS-SlamDunk For 2K18 V1.0”的名单），使用该名单即可拥有灌篮高手队伍。\r\n             　灌篮高手', 'img/str/nba1.jpg', 'img/str/nba2.jpg'),
(2, '【必看】绝地求生攻略。如何活到最后', '2018-09-11 00:00:00', '游民星空', '蘑菇', ' 首先，玩这个游戏的目的是什么。拿第一，活下去。\r\n这个游戏跟H1z1还是有区别的\r\n攻略的目的就是要让你们知道自己要做什么，怎么活下去，如何钓鱼诱杀更多敌人另说\r\n成为最后的玩家，才可以获得所有的东西。可参见电影BR大逃杀。\r\n\r\n这些是你必须要了解的。假如这是一个真实的世界，最少你也要懂得“黑暗森林法则”，什么是黑暗森林法则？\r\n这里就是一座黑暗森林，每个玩家都是带枪的猎人，像幽灵般潜行于林间，轻轻拨开挡路的树枝，竭力不让脚步发出一点儿声音，连呼吸都必须小心翼翼：他必须小心，因为林中到处都有与他一样潜行的猎人，如果他发现了别的生命，能做的只有一件事：开枪消灭之。在这片森林中，他人就是地狱，就是永恒的威胁，任何暴露自己存在的生命都将很快被消灭，这就是宇宙文明的图景，这就是对费米悖论的解释。一旦被发现，能生存下来的是只有一方，或者都不能生存\r\n1、生存是你的第一需要\r\n2、你的物资不断增长和扩张,但游戏中的物质总量基本保持不变\r\n对于空投的补给箱来说\r\n一个黑暗森林中的猎手……突然看到……所有猎手都能认出的字标示出的森林中的一个位置……假设林中有一百个猎手，可能有九十个对这个标示不予理', 'img/str/juedi1.jpg', 'img/str/juedi2.jpg'),
(3, '英雄联盟攻略典藏版 你不得不知LOL小技巧', '2018-01-01 00:00:00', '游民星空', 'sd', ' 血瓶使用：英雄联盟最BUG的一个道具 攻击不能被打断。 前期尤其强势。（小编的话：貌似要被削弱了，嗯，BUG修复！）\r\n　　1： 如果你走双人路又是鞋子出门 不妨多等几秒再带一个血 效果非常好。\r\n　　2： 如果对面和你在草丛相遇了 点一个血瓶再上 可能活下来拿到FB的就是你。\r\n　　3： 5级之前点燃伤害=血瓶加血。\r\n　　速度： 这里指的是移动速度\r\n　　1：你买一双鞋子就是增加50移动速度 如果是二级的鞋子 70 三级90 五级130 (木有四级)\r\n　　2：移动速度百分比增效：按照基本移动速度的百分比增加英雄的当前移动速度。而移动速度直接增效类的物品将会在百分比增效计算完成之后直接增加，意味着鞋类物品不会受到这项属性的百分比加成。\r\n　　3：当英雄的移动速度超出400时，所有增加移动速度的效果将会减少20%。当英雄的速度超出475时候，所有增加英雄移动速度的效果会减少50% (一般没人注意吧)\r\n　　buff： 就是状态\r\n　　1：红buff 持续150s 打人有减速和一点伤害的效果(伤害滞后)蓝buff 也是150s 有减少技能CD和回蓝%的效果\r\n　　2：Baron bu', 'img/str/lol1.jpg', 'img/str/lol2.jpg'),
(4, '《荒野大镖客2》全陌生人任务图文攻略 支线任务触发方法及流程详解', '2018-12-15 00:00:00', '游民星空', '瑞破受气包', ' 《荒野大镖客2》中有一些陌生人任务，除了任务完成后应该获得的报酬之外，完成一定数量后还可以解锁“西部陌生人”奖杯（完成10条陌生人任务线），并且如果错过了这些陌生人任务的话是不影响主线剧情的。今天就为大家分享一篇《荒野大镖客2》全陌生人任务图文攻略，一起来了解一下吧。\r\n    “亚瑟先生，我遇到你的时候，你总是面带微笑地在帮助别人。”\r\n      全陌生人位置地图\r\n      　　本作中一共有26个陌生人，下面为大家介绍一下这些陌生人的位置，也就是这些陌生人任务的起始位置。\r\n      　　这些陌生人会随着主线剧情的进度慢慢解锁，在通关主线之后依然可以去指定位置找到它们。\r\n      　　图中标注的章节只是它们解锁的时间（右边地图上的序号与左边任务序号对应）。\r\n      　　许多任务是由多个部分组成的，你需要完成该任务本身以及后续任务（完成第一个任务后大概在24-48小时左右就能看到）其中大多数是由多个部分组成的任务线。\r\n      　　如果没有解锁后续任务的话，你可以继续推主线，或者在不同时段（白天/夜间）再去查看。\r\n      需要注意的是，并不是上图中所有陌生', 'img/str/huangye1.jpg', 'img/str/huangye2.jpg'),
(5, '文明6入门攻略', '2018-07-15 00:00:00', '游民星空', '醉酒青牛', ' 文明6入的豪华版，目前大概玩了4局左右从国王开始。最高难度不朽通关（神级还不知道有什么变化，所以是入门攻略）。\r\n\r\n\r\n鉴于贴吧和群里很多人因为不熟悉游戏各种提问以及质疑文明6的游戏性，所以本萌新特开一帖，希望让因为不熟悉游戏的人开心点玩。\r\n\r\n\r\n第一，要说的就是很多人质疑的——AI前期疯狂宣战的问题，也是大大降低游戏性的问题。有些AI甚至隔了一个大陆从水路运兵悬（比如英国）。其实哈，这个问题很简单。你们是不是经常发现AI见面之后过几个回合就会派遣使团过来，再过几个回合外交关系就会莫名其妙不开心，之后玩家发现问题不对想派遣使团过去缺很容易被拒绝（重点来了），之后就很容易被宣战。那么问题在哪里！？很简单，因为AI派了使团而你没有派！（并不是绝对，但概率不低），在AI派遣使团之后，玩家再派遣使团过去，基本不会被拒绝，而其他情况下，想必你们都知道，AI一般不会同意，一般来说只要即时派遣使团，至少能维持中立！（再次重复，不是绝对），那么派遣使团为什么这么有用，在哪里看外交任务？\r\n本宝宝发现文明6和5不同，5的外交界面是直接在地图上，而6需要在领袖界面点击访问关系！！！！（重点），点开', 'img/str/wenming1.jpg', 'img/str/wenming2.jpg'),
(6, '《审判之眼死神的遗言》图文攻略 全剧情流程图文攻略', '2018-12-16 00:00:00', '游侠论坛', 'RustyS', ' 《审判之眼死神的遗言》是如龙工作室开发的新作，本作讲述了侦探八神隆之在神室町与黑恶势力斗争的热血故事。下面小编为大家带来了《审判之眼死神的遗言》全剧情流程图文攻略，一起来看一下吧。\r\n    游戏介绍\r\n\r\n　　《审判之眼：死神的遗言》的故事和《如龙》系列一样，发生在日本神室町，是系列总监名越稔洋领军的人中之龙工作室制作的原创新作。本作将以律师事务所为背景，叙述由日本知名偶像木村拓哉担纲演出的律师八神调查案件的经历，此外还请到谷原章介、中尾彬等实力派演员参与演出。\r\n\r\n　　《审判之眼：死神的遗言》中，知名演员木村拓哉将扮演游戏主角 - 一位律师，与他的搭档一起揭开悬而未决的谜案背后的故事。\r\n', 'img/str/sp1.jpg', 'img/str/sp2.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `swipe`
--

CREATE TABLE `swipe` (
  `id` int(11) NOT NULL,
  `imgurl` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `swipe`
--

INSERT INTO `swipe` (`id`, `imgurl`) VALUES
(1, 'img/swiper/5.jpg'),
(2, 'img/swiper/4.jpg'),
(3, 'img/swiper/3.jpg'),
(4, 'img/swiper/2.jpg'),
(5, 'img/swiper/1.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `forum`
--
ALTER TABLE `forum`
  ADD PRIMARY KEY (`lid`);

--
-- Indexes for table `reg`
--
ALTER TABLE `reg`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `strategy`
--
ALTER TABLE `strategy`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `swipe`
--
ALTER TABLE `swipe`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- 使用表AUTO_INCREMENT `forum`
--
ALTER TABLE `forum`
  MODIFY `lid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- 使用表AUTO_INCREMENT `reg`
--
ALTER TABLE `reg`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- 使用表AUTO_INCREMENT `strategy`
--
ALTER TABLE `strategy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- 使用表AUTO_INCREMENT `swipe`
--
ALTER TABLE `swipe`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
