

var format1 = new Format("format-1", "Vortrag", "presentation");
var format2 = new Format("format-2", "Workshop", "workshop");

var level1 = new Level("level-1", "Anfänger", "Beginner");
var level2 = new Level("level-2", "Pro", "Pro");

var languages1 = new Language("lang-1", "Deutsch", "German");
var languages2 = new Language("lang-2", "Englisch", "English");

var day1 = new Day("day-1", "Tag 1", "Day 1", "2015-07-31");
var day2 = new Day("day-2", "Tag 2", "Day 2", "2015-08-01");

var track1 = new Track("track-1", "Bildung", "Education", "#ff0000");
var track2 = new Track("track-2", "Wissenschaft", "Science", "#00ff00");

var loc1 = new Location("loc-1", "Mensa", "Mensa", 1, false);
var loc2 = new Location("loc-2", "Saal 10", "Saal 10", 2, false);

var speaker1 = new Speaker("speaker-1", "Max Mustermann", "http://www.flossdorf.com/wp/wp-content/uploads/2013/12/team-8-300x300.jpg", "https://re-publica.de/member/5552#profile-speaker", "Willkommen, Welcome, Velkommen, Bienvenue, Benvenuti, Bienvenido!", "Universität Mainz", "https://www.uni-mainz.de/", "Student", null);
var speaker2 = new Speaker("speaker-2", "Sabine Mustermann", "https://taeglichneu.files.wordpress.com/2011/01/mustermann.jpg", "https://re-publica.de/member/5552#profile-speaker", "Willkommen, Welcome, Velkommen, Bienvenue, Benvenuti, Bienvenido!", "Universität Mainz", "https://www.uni-mainz.de/", "Student", null);

var demoSpeakerArray = new Array();
demoSpeakerArray.push(speaker1);
demoSpeakerArray.push(speaker2);