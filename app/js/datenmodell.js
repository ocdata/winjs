
function Format(id, labelDe, labelEn) {

    // öffentliche Eigenschaft
    this.id = id;
    this.labelDe = labelDe;
    this.labelEn = labelEn;


    // privilegierte öffentliche Methoden
    this.setId = function (newId) {
        this.id = newId;
    }

    this.getId = function () {
        return this.id;
    }

    this.setLabelDe = function (newLabelDe) {
        this.labelDe = newLabelDe;
    }

    this.getLabelDe = function () {
        return this.labelDe;
    }

    this.setLabelEn = function (newLabelEn) {
        this.labelDe = newLabelDe;
    }

    this.getLabelEn = function () {
        return this.labelEn;
    }
}

function Link(url, title, service, type) {

    // öffentliche Eigenschaft
    this.url = url;
    this.title = title;
    this.service = service;
    this.type = type;

    // privilegierte öffentliche Methoden
    this.setUrl = function (newUrl) {
        this.url = newUrl;
    }

    this.getUrl = function () {
        return this.url;
    }

    this.setTitle = function (newTitle) {
        this.title = newTitle;
    }

    this.getTitle = function () {
        return this.title;
    }

    this.setService = function (newService) {
        this.service = newService;
    }

    this.getService = function () {
        return this.service;
    }

    this.setType = function (newType) {
        this.type = newType;
    }

    this.getType = function () {
        return this.type;
    }
}

function Speaker(id, name, photo, url, biography, organization, organizationUrl, position, linkObj) {

    // öffentliche Eigenschaft
    this.id = id;
    this.name = name;
    this.photo = photo;
    this.url = url;
    this.biography = biography;
    this.organization = organization;
    this.organizationUrl = organizationUrl;
    this.position = position;
    this.link = linkObj;

    // privilegierte öffentliche Methoden
    this.setId = function (newId) {
        this.id = newId;
    }

    this.getId = function () {
        return this.Id;
    }

    this.setName = function (newName) {
        this.name = newName;
    }

    this.getName = function () {
        return this.name;
    }

    this.setPhoto = function (newPhoto) {
        this.photo = newPhoto;
    }

    this.getPhoto = function () {
        return this.photo;
    }

    this.setUrl = function (newUrl) {
        this.url = newUrl;
    }

    this.getUrl = function () {
        return this.url;
    }

    this.setBiography = function (newBiography) {
        this.biography = newBiography;
    }

    this.getBiography = function () {
        return this.biography;
    }

    this.setOrganization = function (newOrganization) {
        this.organization = newOrganization;
    }

    this.getOrganization = function () {
        return this.organization;
    }

    this.setOrganizationUrl = function (newOrganizationUrl) {
        this.organizationUrl = newOrganizationUrl;
    }

    this.getOrganizationUrl = function () {
        return this.organizationUrl;
    }

    this.setPosition = function (newPosition) {
        this.position = newPosition;
    }

    this.getPosition = function () {
        return this.position;
    }

    this.setLink = function (newLink) {
        this.link = newLink;
    }

    this.getLink = function () {
        return this.link;
    }
}

function Level(id, labelDe, labelEn) {

    // öffentliche Eigenschaft
    this.id = id;
    this.labelDe = labelDe;
    this.labelEn = labelEn;


    // privilegierte öffentliche Methode
    this.setId = function (newId) {
        this.id = newId;
    }

    this.getId = function () {
        return this.id;
    }

    this.setLabelDe = function (newLabelDe) {
        this.labelDe = newLabelDe;
    }

    this.getLabelDe = function () {
        return this.labelDe;
    }

    this.setLabelEn = function (newLabelEn) {
        this.labelDe = newLabelDe;
    }

    this.getLabelEn = function () {
        return this.labelEn;
    }
}

function Language(id, labelDe, labelEn) {

    // öffentliche Eigenschaft
    this.id = id;
    this.labelDe = labelDe;
    this.labelEn = labelEn;


    // privilegierte öffentliche Methoden
    this.setId = function (newId) {
        this.id = newId;
    }

    this.getId = function () {
        return this.id;
    }

    this.setLabelDe = function (newLabelDe) {
        this.labelDe = newLabelDe;
    }

    this.getLabelDe = function () {
        return this.labelDe;
    }

    this.setLabelEn = function (newLabelEn) {
        this.labelDe = newLabelDe;
    }

    this.getLabelEn = function () {
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
    this.setId = function (newId) {
        this.id = newId;
    }

    this.getId = function () {
        return this.id;
    }

    this.setColor = function (newColor) {
        this.color = newColor;
    }

    this.getColor = function () {
        return this.color;
    }

    this.setLabelDe = function (newLabelDe) {
        this.labelDe = newLabelDe;
    }

    this.getLabelDe = function () {
        return this.labelDe;
    }

    this.setLabelEn = function (newLabelEn) {
        this.labelDe = newLabelDe;
    }

    this.getLabelEn = function () {
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


    // privilegierte öffentliche Methoden
    this.setId = function (newId) {
        this.id = newId;
    }

    this.getId = function () {
        return this.id;
    }

    this.setOrderIndex = function (newOrderIndex) {
        this.orderIndex = newOrderIndex;
    }

    this.getOrderIndex = function () {
        return this.orderIndex;
    }

    this.setIsStage = function (newIsStage) {
        this.isStage = newIsStage;
    }

    this.getIsStage = function () {
        return this.isStage;
    }

    this.setLabelDe = function (newLabelDe) {
        this.labelDe = newLabelDe;
    }

    this.getLabelDe = function () {
        return this.labelDe;
    }

    this.setLabelEn = function (newLabelEn) {
        this.labelDe = newLabelDe;
    }

    this.getLabelEn = function () {
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


    // privilegierte öffentliche Methoden
    this.setId = function (newId) {
        this.id = newId;
    }

    this.getId = function () {
        return this.id;
    }

    this.setDateStr = function (newDateStr) {
        this.dateStr = newDateStr;
    }

    this.getDateStr = function () {
        return this.dateStr;
    }

    this.setLabelDe = function (newLabelDe) {
        this.labelDe = newLabelDe;
    }

    this.getLabelDe = function () {
        return this.labelDe;
    }

    this.setLabelEn = function (newLabelEn) {
        this.labelDe = newLabelDe;
    }

    this.getLabelEn = function () {
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


    // privilegierte öffentliche Methoden
    this.setId = function (newId) {
        this.id = newId;
    }

    this.getId = function () {
        return this.id;
    }

    this.setTitle = function (newTitle) {
        this.title = newTitle;
    }

    this.getTitle = function () {
        return this.title;
    }

    this.setAbstract = function (newAbstract) {
        this.abstract = newAbstract;
    }

    this.getAbstract = function () {
        return this.abstract;
    }

    this.setDescription = function (newDescription) {
        this.description = newDescription;
    }

    this.getDescription = function () {
        return this.description;
    }

    this.setUrl = function (newUrl) {
        this.url = newUrl;
    }

    this.getUrl = function () {
        return this.url;
    }

    this.setBegin = function (newBegin) {
        this.begin = newBegin;
    }

    this.getBegin = function () {
        return this.begin;
    }

    this.setEnd = function (newEnd) {
        this.end = newEnd;
    }

    this.getEnd = function () {
        return this.end;
    }

    this.setDuration = function (newDuration) {
        this.duration = newDuration;
    }

    this.getDuration = function () {
        return this.duration;
    }

    this.setDayObj = function (newDayObj) {
        this.dayObj = newDayObj;
    }

    this.getDayObj = function () {
        return this.dayObj;
    }

    this.setLocationObj = function (newLocationObj) {
        this.locationObj = newLocationObj;
    }

    this.getLocationObj = function () {
        return this.locationObj;
    }

    this.setFormatObj = function (newFormatObj) {
        this.formatObj = newFormatObj;
    }

    this.getFormatObj = function () {
        return this.formatObj;
    }

    this.setTrackObj = function (newTrackObj) {
        this.trackObj = newTrackObj;
    }

    this.getTrackObj = function () {
        return this.trackObj;
    }

    this.setLevelObj = function (newLevelObj) {
        this.levelObj = newLevelObj;
    }

    this.getLevelObj = function () {
        return this.levelObj;
    }

    this.setLanguageObj = function (newLanguageObj) {
        this.languageObj = newLanguageObj;
    }

    this.getLanguageObj = function () {
        return this.languageObj;
    }

    this.setSpeakerArray = function (newSpeakerArray) {
        this.speakerArray = newSpeakerArray;
    }

    this.getSpeakerArray = function () {
        return this.speakerArray;
    }

    this.setLinkArray = function (newLinkArray) {
        this.linkArray = newLinkArray;
    }

    this.getLinkArray = function () {
        return this.linkArray;
    }

}

function Position(mapObj, x, y) {

    // öffentliche Eigenschaft
    this.map = mapObj;
    // Format: 1536
    this.x = x;
    // Format: 918
    this.y = y;

    // privilegierte öffentliche Methoden
    this.setMap = function (newMap) {
        this.map = newMap;
    }

    this.getMap = function () {
        return this.map;
    }

    this.setX = function (newX) {
        this.X = newX;
    }

    this.getX = function () {
        return this.X;
    }

    this.setY = function (newY) {
        this.Y = newY;
    }

    this.getY = function () {
        return this.Y;
    }
}

function Location(id, labelDE, labelEn) {
    this.id = id;
    this.labelDe = labelDe;
    this.labelEn = labelEn;

    this.setId = function (newId) {
        this.id = newId;
    }

    this.getId = function () {
        return this.Id;
    }

    this.setLabelDe = function (newLabelDe) {
        this.labelDe = newLabelDe;
    }

    this.getLabelDe = function () {
        return this.labelDe;
    }

    this.setLabelEn = function (newLabelEn) {
        this.labelDe = newLabelDe;
    }

    this.getLabelEn = function () {
        return this.labelEn;
    }
}

function Pois(id, labelEn, labelDe, category, positionObj, hidden, priority, locationObj) {

    // öffentliche Eigenschaft
    this.id = id;
    this.type = "Poi"
    this.labelEn = labelEn;
    this.labelDe = labelDe;
    this.category = category;
    this.positions = positionObj;
    // Format: false
    this.hidden = hidden;
    // Format: 1000
    this.priority = priority;
    this.location = locationObj;

    // privilegierte öffentliche Methoden
    this.setId = function (newId) {
        this.id = newId;
    }

    this.getId = function () {
        return this.Id;
    }

    this.setLabelDe = function (newLabelDe) {
        this.labelDe = newLabelDe;
    }

    this.getLabelDe = function () {
        return this.labelDe;
    }

    this.setLabelEn = function (newLabelEn) {
        this.labelDe = newLabelDe;
    }

    this.getLabelEn = function () {
        return this.labelEn;
    }

    this.setType = function (newType) {
        this.type = newType;
    }

    this.getType = function () {
        return this.Type;
    }

    this.setCategory = function (newCategory) {
        this.category = newCategory;
    }

    this.getCategory = function () {
        return this.category;
    }

    this.setPositions = function (newPositionsObj) {
        this.positions = newPositions;
    }

    this.getPositions = function () {
        return this.Positions;
    }

    this.setHidden = function (newHidden) {
        this.hidden = newHidden;
    }

    this.getHidden = function () {
        return this.hidden;
    }

    this.setPriority = function (newPriority) {
        this.priority = newPriority;
    }

    this.getPriority = function () {
        return this.priority;
    }

    this.setLocation = function (newLocationObj) {
        this.location = newLocation;
    }

    this.getLocation = function () {
        return this.location;
    }
}

function Maps(id, labelEn, labelDe, floorLabelDe, floorLabelEn, isOutdoor, isIndoor, floor, orderIndex, areaObj, tilesObj, poisObj) {
    this.id = id;
    this.type = "map";
    this.labelEn = labelEn;
    this.labelDe = labelDe;
    this.floorLabelDe = floorLabelDe;
    this.floorLabelEn = floorLabelEn;
    // Format: true/false 
    this.isOutdoor = isOutdoor;
    // Format: true/false 
    this.isIndoor = isIndoor;
    this.floor = floor;
    this.orderIndex = orderIndex;
    this.area = areaObj;
    this.tiles = tilesObj;
    this.pois = poisObj;

    // privilegierte öffentliche Methoden
    this.setId = function (newId) {
        this.id = newId;
    }

    this.getId = function () {
        return this.Id;
    }

    this.setLabelDe = function (newLabelDe) {
        this.labelDe = newLabelDe;
    }

    this.getLabelDe = function () {
        return this.labelDe;
    }

    this.setLabelEn = function (newLabelEn) {
        this.labelDe = newLabelDe;
    }

    this.getLabelEn = function () {
        return this.labelEn;
    }

    this.type = function (newType) {
        this.type = newType;
    }

    this.getType = function () {
        return this.type;
    }

    this.setfloorLabelDe = function (newfloorLabelDe) {
        this.floorlabelDe = newfloorLabelDe;
    }

    this.getfloorLabelDe = function () {
        return this.floorlabelDe;
    }

    this.setfloorLabelEn = function (newfloorLabelEn) {
        this.floorlabelDe = newfloorLabelDe;
    }

    this.getfloorLabelEn = function () {
        return this.floorlabelEn;
    }

    this.setIsOutdoor = function (newIsOutdoor) {
        this.IsOutdoor = newIsOutdoor;
    }

    this.getIsOutdoor = function () {
        return this.IsOutdoor;
    }

    this.setIsIndoor = function (newIsIndoor) {
        this.IsIndoor = newIsIndoor;
    }

    this.getIsIndoor = function () {
        return this.IsIndoor;
    }

    this.setFloor = function (newFloor) {
        this.floor = newFloor;
    }

    this.getFloor = function () {
        return this.floor;
    }

    this.setOrderIndex = function (newOrderIndex) {
        this.orderIndex = newOrderIndex;
    }

    this.getOrderIndex = function () {
        return this.orderIndex;
    }

    this.setArea = function (newAreaObj) {
        this.area = newAreaObj;
    }

    this.getArea = function () {
        return this.area;
    }

    this.setTiles = function (newTilesObj) {
        this.area = newTilesObj;
    }

    this.getTiles = function () {
        return this.tiles;
    }

    this.setPois = function (newPoisObj) {
        this.pois = newPoisObj;
    }

    this.getPois = function () {
        return this.pois;
    }
}