

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

var link1 = new Link("https://twitter.com/SpartaTeam", "Twitter", "twitter", "");
var link2 = new Link("https://ocdata.github.io/", "Homepage", "web", "");

var demoLinkArray = new Array();
demoLinkArray.push(link1);
demoLinkArray.push(link2);


var session1 = new Session("session-1", "Die beste WebApp der Welt!", "abstract", "description", "", "2015-05-07T11:45:00.000Z", "2015-05-07T12:45:00.000Z", 3600, "", day1, loc1, format1, track1, level1, languages1, demoSpeakerArray, demoLinkArray);
var session2 = new Session("session-2", "IBM Bluemix", "abstract", "description", "", "2015-05-07T10:45:00.000Z", "2015-05-07T11:40:00.000Z", 3600, "", day1, loc2, format2, track1, level2, languages2, demoSpeakerArray, demoLinkArray);
var session3 = new Session("session-3", "Deutsche Bank", "abstract", "description", "", "2015-05-07T13:45:00.000Z", "2015-05-07T14:45:00.000Z", 3600, "", day1, loc1, format2, track2, level2, languages1, demoSpeakerArray, demoLinkArray);

var demoSessionArray = new Array();
demoSessionArray.push(session1);
demoSessionArray.push(session2);
demoSessionArray.push(session3);