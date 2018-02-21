/**
 * Created by albertacedosanchez on 18/1/17.
 * Updated by Germán Mendoza sooooo many several times :D
 */

//------------------------------------------------------

util = {
    interPageDataKey : "interPageDataKey",
    interPageLangKey : "interPageLangKey",

    redirectToPage: function (pageData) {
        this.putInLocalStorage(this.interPageDataKey, pageData.payload);
        window.location.href = pageData.url;
    },

    putInLocalStorage: function (key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    },
    getFromLocalStorage: function (key) {
        return JSON.parse(sessionStorage.getItem(key));
    },
    removeFromLocalStorage: function(key){
        sessionStorage.removeItem(key);
    }
};

//------------------------------------------------------

uiCoreAPI = {
    //instanceUrl: "http://localhost:8080/",
    instanceUrl: "/enggeows/",
    // instanceUrl: "http://ec2-34-242-113-148.eu-west-1.compute.amazonaws.com:8080/enggeows/",

    _getRequest: function (url, callback) {
        $.ajax({
            contentType: 'application/json; charset=utf-8',
            url: url,
            dataType: "json",
            cache:false,
            method:'GET',
            success:function (response) {
                callback(response);
            }.bind(this),
            error:function (response) {
                callback(false);
                return false;
            }.bind(this)
        });
    },
    _postRequest: function (url, data, callback) {
        $.ajax({
            contentType: 'application/json; charset=utf-8',
            url: url,
            dataType: "json",
            data: JSON.stringify(data),
            cache:false,
            method:'POST',
            success:function (response) {
                callback(response);
            }.bind(this),
            error:function (response) {
                callback(false);
                return false;
            }.bind(this)
        });
    },
    _deleteRequest: function (url, callback) {
        $.ajax({
            contentType: 'application/json; charset=utf-8',
            url: url,
            dataType: "json",
            cache:false,
            method:'DELETE',
            success:function (response) {
                callback(response);
            }.bind(this),
            error:function (response) {
                callback(false);
                return false;
            }.bind(this)
        });
    },
    _updateRequest: function (url, data, callback) {
        $.ajax({
            contentType: 'application/json; charset=utf-8',
            url: url,
            dataType: "json",
            data: data,
            cache:false,
            method:'PUT',
            success:function (response) {
                callback(response);
            }.bind(this),
            error:function (response) {
                callback(false);
                return false;
            }.bind(this)
        });
    }
};

//------------------------------------------------------

uiCoreWS = {
    home : 'home/lisbon_citizen/',
    home2 : 'home/',
    SOP: 'home/SOP_data/',
    SC: 'home/SC_data/',
    CE: 'home/CE_data/',
    finish: 'home/finish/',
    globalEnd: 'home/final_details/',
    comments: 'home/comments/'
};

//------------------------------------------------------

/**
 * Language translations
 * based on https://github.com/dakk/jquery-multilang
 * and on   https://github.com/recurser/jquery-i18n
 */
var translator = {
    _languages: ['en', 'pt', 'es'],
    _currLangData: null,

    /**
     *  Verifies if target is among the registered languages
     * @param target - the language identifier, e.g., 'en'
     * @returns {boolean} - true if target is a registered language, false otherwise
     */
    _checkInLanguage: function (target){
        var found = false;
        for(var i = 0; i < this._languages.length; i++){
            if (target === this._languages[i]){
                found = true;
                break;
            }
        }
        return found;
    },

    /**
     * Applies a language definition data to all html elements that have defined a 'langkey' attribute.
     * @param langDefData - the language definition data
     */
    _translateAll: function (langDefData){
        $("[langkey]").each (function (){

            var strTr = langDefData [$(this).attr ('langkey')];
            if (!($(this).attr ('tagName'))){
                $(this).text(strTr);
            }else {
                var tagName = ($(this).attr('tagName')).toLowerCase();
                if (tagName === "div") {
                    $(this).text(strTr);
                }
                else if (tagName === "a") {
                    $(this).text(strTr);
                }
                else if (tagName === "span") {
                    $(this).text(strTr);
                }
                else if (tagName === "p") {
                    $(this).text(strTr);
                }
                else if (tagName === "textarea") {
                    $(this).text(strTr);
                }
                else if (tagName === "option") {
                    $(this).text(strTr);
                }
                else if (tagName === "input") {
                    $(this).val(strTr);
                }
                else {
                    $(this).text(strTr);
                }

                /*if(typeof ($(this).attr("text")) !== typeof undefined && $(this).attr("text") !== false){
                 $(this).text(strTr);
                 }
                 else if(typeof ($(this).attr("value")) !== typeof undefined && $(this).attr("value") !== false){
                 $(this).val(strTr);
                 }
                 else{
                 $(this).html(strTr);
                 }*/
            }
        });
    },

    /**
     * Determines the current language of the browser, sets it as current language, and applies it to all html elements that have defined a 'langkey' attribute.
     * @param doneFn - callback function called when the translation is done
     */
    applyBrowserLanguage: function (doneFn){
        var langCode = navigator.language.substr (0, 2);
        this.applyLanguage(langCode, doneFn);
    },

    /**
     * Loads a the requested language definition data, sets the requested language as current language, and applies it to all html elements that have defined a 'langkey' attribute.
     * @param langCode - the language identifier, e.g., 'en'
     * @param doneFn - callback function called when the translation is done
     */
    applyLanguage: function (langCode, doneFn){
        var curObject = this;
        var applyLng = function (jsonData){
            curObject._currLangData = jsonData;
            curObject._translateAll(jsonData);
            if(doneFn){
                doneFn(langCode);
            }
        };
        if (this._checkInLanguage(langCode))
            $.getJSON('data/langs/'+langCode+'.json', null, applyLng);
        else
            $.getJSON('data/langs/en.json', null, applyLng);
    },

    /**
     * Applies the current language to element with a specific 'langkey' attribute value
     * @param keyStr - the 'langkey' attribute value
     */
    applyLanguageToKey: function (keyStr){
        var curObject = this;
        var args = Array.prototype.slice.call(arguments);
        $("[langkey=" + keyStr + "]").each (function (){
            var strTr = curObject._currLangData [$(this).attr ('langkey')];
            args.shift();
            $(this).html(curObject.formatPrint(strTr, args));
        });
    },

    /**
     * Obtain the string from the current language that corresponds to specific 'langkey' attribute value
     * @param langKeyValue - the 'langkey' attribute value
     */
    getKeyLanguageValue: function (langKeyValue){
        return this._currLangData [langKeyValue];
    },

    /**
     * Resembles the printf behaviour
     * @param strTr - The string to be formatted with the placeholders, e.g., 'The $ to be $'
     * @param args - The values for the placeholders, e.g., ['string', 'formatted']
     * @returns {string} the formatted string
     */
    formatPrint: function (strTr, args) {
        if (!args) return strTr;
        for(var i = 0; i < args.length; i++){
            strTr = strTr.replace("$", args[i]);
        }
        return strTr;
    },

    /**
     * Applies the language used in the previous page
     * @param donFn The callback function called when the translation has been done. It receive the language code as a parameter.
     */
    applyPreviousLanguage: function(donFn){
        var langCode = util.getFromLocalStorage(util.interPageLangKey);
        if (langCode){
            this.applyLanguage(langCode, donFn);
        }
        else{
            donFn(langCode);
        }
    },

    /**
     * Saves the language code to indicate following pages the current language.
     * @param langCode - The language code
     */
    saveChosenLanguage: function (langCode) {
        util.putInLocalStorage(util.interPageLangKey, langCode);
    }
};

//------------------------------------------------------

appHelper = {
	collection : "mainCollection",
	getEmptyGeoJson: function(){
		return {
			type: "FeatureCollection",
			features: []
		};
	},
	obtainCE: function (doc) {
		var geoJson = appHelper.getEmptyGeoJson();
		var areas = doc.CE.areas;
		if(areas) {
			for (var i = 0; i < areas.length; i++) {
				var other = JSON.parse(areas[i].layer);
				geoJson.features = geoJson.features.concat(other.features);
			}
		}
		return geoJson;
	},
	obtainSC: function (doc) {
		var geoJson = appHelper.getEmptyGeoJson();
		var groups = doc.SC.groups;
		for (var j = 0; j < groups.length; j++) {
			var areas = groups[j].areas;
			for (var i = 0; i < areas.length; i++) {
				var other = JSON.parse(areas[i].layer);
				geoJson.features = geoJson.features.concat(other.features);
			}
		}
		return geoJson;
	},
	obtainSOP: function (doc) {
		var geoJson = appHelper.getEmptyGeoJson();
		var areas = doc.SOP.areas;
		for (var i = 0; i < areas.length; i++) {
			var other = JSON.parse(areas[i].layer);
			geoJson.features = geoJson.features.concat(other.features);
		}
		return geoJson;
	}
};

app = {
    setHome: function (data, callback) {
			  db.collection(appHelper.collection).add(data)
				.then(function(docRef) {
					callback(docRef);
				})
				.catch(function(error) {
					callback(false);
				});
    },
    // getHome: function () {
    //     uiCoreAPI._getRequest(
    //         uiCoreAPI.instanceUrl + uiCoreWS.home2,
    //         function (response) {
    //             alert(response);
    //         }
    //     );
    // },
    setSOP: function (id, data2, callback) {
        data2.areas.forEach(function (value) {
            value.layer = JSON.stringify(value.layer);
        });

        var updRef = db.collection(appHelper.collection).doc(id);
			  updRef.update({
            SOP: data2
        })
        .then(function() {
            callback({id:id});
        })
        .catch(function(error) {
            callback(false);
        });
    },
    setSC: function (id, data2, callback) {
				data2.groups.forEach(function (value) {
					value.areas.forEach(function (value2) {
						value2.layer = JSON.stringify(value2.layer);
					});
				});
        var updRef = db.collection(appHelper.collection).doc(id);
				updRef.update({
            SC: data2
        })
        .then(function() {
          callback({id:id});
        })
        .catch(function(error) {
          callback(false);
        });
    },
    setCE: function (id, data, callback) {
				if (data.areas) {
					data.areas.forEach(function (value) {
						value.layer = JSON.stringify(value.layer);
					});
				}
        var updRef = db.collection(appHelper.collection).doc(id);
				updRef.update({
					CE: data
        })
        .then(function() {
          callback({id:id});
        })
        .catch(function(error) {
          callback(false);
        });
    }, getSOP: function (id, callback) {
			var sopRef = db.collection(appHelper.collection).doc(id);
			sopRef.get().then(function(doc) {
				if (doc.exists) {
					var geoJson = appHelper.obtainSOP(doc.data());
					callback({geoJson:geoJson, id:id});
				} else {
					callback(false);
				}
			}).catch(function(error) {
				callback(false);
			});
    }, getSC: function (id, callback) {
			var scRef = db.collection(appHelper.collection).doc(id);
			scRef.get().then(function(doc) {
				if (doc.exists) {
					var geoJson = appHelper.obtainSC(doc.data());
					callback({geoJson:geoJson, id:id});
				} else {
					callback(false);
				}
			}).catch(function(error) {
				callback(false);
			});
    }, getCE: function (id, callback) {
				var ceRef = db.collection(appHelper.collection).doc(id);
				ceRef.get().then(function(doc) {
				if (doc.exists) {
					var geoJson = appHelper.obtainCE(doc.data());
					callback({geoJson:geoJson, id:id});
				} else {
					callback(false);
				}
			}).catch(function(error) {
				callback(false);
			});
    },
    finish: function (id, data, callback) {
				var updRef = db.collection(appHelper.collection).doc(id);
				updRef.update(data)
				.then(function() {
					callback({id:id});
				})
				.catch(function(error) {
					callback(false);
				});
    },
    finishA: function (id, data, callback) {
				var updRef = db.collection(appHelper.collection).doc(id);
				updRef.update(data)
				.then(function() {
					callback({id:id});
				})
				.catch(function(error) {
					callback(false);
				});
    },
    comments: function (id, data, callback) {
				var updRef = db.collection(appHelper.collection).doc(id);
				updRef.update(data)
				.then(function() {
					callback({id:id});
				})
				.catch(function(error) {
					callback(false);
				});
    },
    getSOPA: function (callback) {
			var geoJson = appHelper.getEmptyGeoJson();
			db.collection(appHelper.collection).get().then(function(docs) {
				docs.forEach(function(doc) {
					var data = doc.data();
					if (data.SOP){
						var singled = appHelper.obtainSOP(data);
						geoJson.features = geoJson.features.concat(singled.features);
					}
				});
				callback({geoJson:geoJson, id:id});
			});
    },
    getSCA: function (callback) {
			var geoJson = appHelper.getEmptyGeoJson();
			db.collection(appHelper.collection).get().then(function(docs) {
				docs.forEach(function(doc) {
					var data = doc.data();
					if (data.SC){
						var singled = appHelper.obtainSC(data);
						geoJson.features = geoJson.features.concat(singled.features);
					}
				});
				callback({geoJson:geoJson, id:id});
			});
    },
    getCEA: function (callback) {
			var geoJson = appHelper.getEmptyGeoJson();
			db.collection(appHelper.collection).get().then(function(docs) {
				docs.forEach(function(doc) {
					var data = doc.data();
					if (data.CE){
						var singled = appHelper.obtainCE(data);
						geoJson.features = geoJson.features.concat(singled.features);
					}
				});
				callback({geoJson:geoJson, id:id});
			});
    }
};