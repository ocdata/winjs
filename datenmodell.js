
function Format(id, labelDe, labelEn) {

    // öffentliche Eigenschaft
    this.id = id;
	  this.labelDe = labelDe;
    this.labelEn = labelEn;


    // privilegierte öffentliche Methode
    this.setId = function(newId) {
        this.id = newId;
    }

    this.getId = function() {
        return this.id;
    }

    this.setLabelDe = function(newLabelDe) {
        this.labelDe = newLabelDe;
    }

    this.getLabelDe = function() {
        return this.labelDe;
    }

    this.setLabelEn = function(newLabelEn) {
        this.labelDe = newLabelDe;
    }

    this.getLabelEn = function() {
        return this.labelEn;
    }
}

function Level(id, labelDe, labelEn) {

    // öffentliche Eigenschaft
    this.id = id;
	  this.labelDe = labelDe;
    this.labelEn = labelEn;


    // privilegierte öffentliche Methode
    this.setId = function(newId) {
        this.id = newId;
    }

    this.getId = function() {
        return this.id;
    }

    this.setLabelDe = function(newLabelDe) {
        this.labelDe = newLabelDe;
    }

    this.getLabelDe = function() {
        return this.labelDe;
    }

    this.setLabelEn = function(newLabelEn) {
        this.labelDe = newLabelDe;
    }

    this.getLabelEn = function() {
        return this.labelEn;
    }
}

function Language(id, labelDe, labelEn) {

    // öffentliche Eigenschaft
    this.id = id;
	  this.labelDe = labelDe;
    this.labelEn = labelEn;


    // privilegierte öffentliche Methode
    this.setId = function(newId) {
        this.id = newId;
    }

    this.getId = function() {
        return this.id;
    }

    this.setLabelDe = function(newLabelDe) {
        this.labelDe = newLabelDe;
    }

    this.getLabelDe = function() {
        return this.labelDe;
    }

    this.setLabelEn = function(newLabelEn) {
        this.labelDe = newLabelDe;
    }

    this.getLabelEn = function() {
        return this.labelEn;
    }
}

function Track(id, labelDe, labelEn, color) {

    // öffentliche Eigenschaft
    this.id = id;
    // color soll z.B. das enthalten: #ff0000
    this.color = color;
	  this.labelDe = labelDe;
    this.labelEn = labelEn;


    // privilegierte öffentliche Methode
    this.setId = function(newId) {
        this.id = newId;
    }

    this.getId = function() {
        return this.id;
    }

    this.setColor = function(newColor) {
        this.color = newColor;
    }

    this.getColor = function() {
        return this.color;
    }

    this.setLabelDe = function(newLabelDe) {
        this.labelDe = newLabelDe;
    }

    this.getLabelDe = function() {
        return this.labelDe;
    }

    this.setLabelEn = function(newLabelEn) {
        this.labelDe = newLabelDe;
    }

    this.getLabelEn = function() {
        return this.labelEn;
    }
}

function Location(id, labelDe, labelEn, orderIndex, isStage) {

    // öffentliche Eigenschaft
    this.id = id;
    this.orderIndex = orderIndex;
    this.isStage = isStage;
	  this.labelDe = labelDe;
    this.labelEn = labelEn;


    // privilegierte öffentliche Methode
    this.setId = function(newId) {
        this.id = newId;
    }

    this.getId = function() {
        return this.id;
    }

    this.setOrderIndex = function(newOrderIndex) {
        this.orderIndex = newOrderIndex;
    }

    this.getOrderIndex = function() {
        return this.orderIndex;
    }

    this.setIsStage = function(newIsStage) {
        this.isStage = newIsStage;
    }

    this.getIsStage = function() {
        return this.isStage;
    }

    this.setLabelDe = function(newLabelDe) {
        this.labelDe = newLabelDe;
    }

    this.getLabelDe = function() {
        return this.labelDe;
    }

    this.setLabelEn = function(newLabelEn) {
        this.labelDe = newLabelDe;
    }

    this.getLabelEn = function() {
        return this.labelEn;
    }
}

function Day(id, labelDe, labelEn, dateStr) {

    // öffentliche Eigenschaft
    this.id = id;
    // dateStr soll z.B. das enthalten: 2015-05-30
    this.dateStr = dateStr;
	  this.labelDe = labelDe;
    this.labelEn = labelEn;


    // privilegierte öffentliche Methode
    this.setId = function(newId) {
        this.id = newId;
    }

    this.getId = function() {
        return this.id;
    }

    this.setDateStr = function(newDateStr) {
        this.dateStr = newDateStr;
    }

    this.getDateStr = function() {
        return this.dateStr;
    }

    this.setLabelDe = function(newLabelDe) {
        this.labelDe = newLabelDe;
    }

    this.getLabelDe = function() {
        return this.labelDe;
    }

    this.setLabelEn = function(newLabelEn) {
        this.labelDe = newLabelDe;
    }

    this.getLabelEn = function() {
        return this.labelEn;
    }
}

function Session(id, title, abstract, description, url, begin, end, duration, dayObj, locationObj, formatObj, trackObj, levelObj, languageObj, speakerArray, linkArray) {

    // öffentliche Eigenschaft
    this.id = id;
	  this.title = title;
    this.abstract = abstract;
    this.description = description;
    this.url = url;
    this.begin = begin;
    this.end = end;
    this.duration = duration;
    this.dayObj = dayObj;
    this.locationObj = locationObj;
    this.formatObj = formatObj;
    this.trackObj = trackObj;
    this.levelObj = levelObj;
    this.languageObj = languageObj;
    this.speakerArray = speakerArray;
    this.linkArray = linkArray;


    // privilegierte öffentliche Methode
    this.setId = function(newId) {
        this.id = newId;
    }

    this.getId = function() {
        return this.id;
    }

    this.setTitle = function(newTitle) {
        this.title = newTitle;
    }

    this.getTitle = function() {
        return this.title;
    }

    this.setAbstract = function(newAbstract) {
        this.abstract = newAbstract;
    }

    this.getAbstract = function() {
        return this.abstract;
    }

    this.setDescription = function(newDescription) {
        this.description = newDescription;
    }

    this.getDescription = function() {
        return this.description;
    }

    this.setUrl = function(newUrl) {
        this.url = newUrl;
    }

    this.getUrl = function() {
        return this.url;
    }

    this.setBegin = function(newBegin) {
        this.begin = newBegin;
    }

    this.getBegin = function() {
        return this.begin;
    }

    this.setEnd = function(newEnd) {
        this.end = newEnd;
    }

    this.getEnd = function() {
        return this.end;
    }

    this.setDuration = function(newDuration) {
        this.duration = newDuration;
    }

    this.getDuration = function() {
        return this.duration;
    }

    this.setDayObj = function(newDayObj) {
        this.dayObj = newDayObj;
    }

    this.getDayObj = function() {
        return this.dayObj;
    }

    this.setLocationObj = function(newLocationObj) {
        this.locationObj = newLocationObj;
    }

    this.getLocationObj = function() {
        return this.locationObj;
    }

    this.setFormatObj = function(newFormatObj) {
        this.formatObj = newFormatObj;
    }

    this.getFormatObj = function() {
        return this.formatObj;
    }

    this.setTrackObj = function(newTrackObj) {
        this.trackObj = newTrackObj;
    }

    this.getTrackObj = function() {
        return this.trackObj;
    }

    this.setLevelObj = function(newLevelObj) {
        this.levelObj = newLevelObj;
    }

    this.getLevelObj = function() {
        return this.levelObj;
    }

    this.setLanguageObj = function(newLanguageObj) {
        this.languageObj = newLanguageObj;
    }

    this.getLanguageObj = function() {
        return this.languageObj;
    }

    this.setSpeakerArray = function(newSpeakerArray) {
        this.speakerArray = newSpeakerArray;
    }

    this.getSpeakerArray = function() {
        return this.speakerArray;
    }

    this.setLinkArray = function(newLinkArray) {
        this.linkArray = newLinkArray;
    }

    this.getLinkArray = function() {
        return this.linkArray;
    }

}
