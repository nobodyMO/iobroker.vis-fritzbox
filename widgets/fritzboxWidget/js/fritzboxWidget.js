/*
    ioBroker.vis template Widget-Set

    version: "0.0.1"

    Copyright 2019 Author author@mail.com
*/
"use strict";

// add translations for edit mode
$.get( "../vis-fritzbox.admin/words.js", function(script) {
    let translation = script.substring(script.indexOf('{'), script.length);
    translation = translation.substring(0, translation.lastIndexOf(';'));
    $.extend(systemDictionary, JSON.parse(translation));
});

// this code can be placed directly in template.html
vis.binds["fritzbox"] = {
    version: "0.0.1",
	powerstate: 0,
	connectionstate: 0,
	phonestate: 0,
	wlanstate: 0,
	flashstate:true,
    createWidget: function (widgetID, view, data, style) {
		var fbobj=this;
		
        var $div = $('#' + widgetID);
        // if nothing found => wait
        if (!$div.length) {
            return setTimeout(function () {
                fbobj.createWidget(widgetID, view, data, style);
            }, 100);
        }

        if (data.powerstate) {
			fbobj.powerstate=vis.states.attr(data.powerstate + '.val');
			console.log ("powerstate :" + fbobj.powerstate);
			$div.find('div.fritzboxpower').css("content","url(widgets/fritzboxWidget/img/power"+(fbobj.powerstate?"on":"off") +".png)");
            vis.states.bind(data.powerstate + '.val', function (e, newVal, oldVal) {
				fbobj.powerstate=newVal;
				console.log ("powerstate :" + fbobj.powerstate);
				$div.find('div.fritzboxpower').css("content","url(widgets/fritzboxWidget/img/power"+(fbobj.powerstate?"on":"off") +".png)");
            });
        }				
        if (data.connectionstate) {
			fbobj.connectionstate=vis.states.attr(data.connectionstate + '.val');
			console.log ("connectionstate :" + fbobj.connectionstate);
			$div.find('div.fritzboxinternet').css("content","url(widgets/fritzboxWidget/img/internet"+(fbobj.connectionstate?"on":"off") +".png)");
            vis.states.bind(data.connectionstate + '.val', function (e, newVal, oldVal) {
				fbobj.connectionstate=newVal;
				console.log ("connectionstate :" + fbobj.connectionstate);
				$div.find('div.fritzboxinternet').css("content","url(widgets/fritzboxWidget/img/internet"+(fbobj.connectionstate?"on":"off") +".png)");
            });
        }				
        if (data.phonestate) {
			fbobj.phonestate=vis.states.attr(data.phonestate + '.val');
			console.log ("phonestate :" + fbobj.phonestate);
			$div.find('div.fritzboxphone').css("content","url(widgets/fritzboxWidget/img/phone"+(fbobj.phonestate?"on":"off") +".png)");
            vis.states.bind(data.phonestate + '.val', function (e, newVal, oldVal) {
				fbobj.phonestate=newVal;
				console.log ("phonestate :" + fbobj.phonestate);
				$div.find('div.fritzboxphone').css("content","url(widgets/fritzboxWidget/img/phone"+(fbobj.phonestate?"on":"off") +".png)");
            });
        }				
        if (data.wlanstate) {
			fbobj.wlanstate=vis.states.attr(data.wlanstate + '.val');
			console.log ("wlanstate :" + fbobj.wlanstate);
			$div.find('div.fritzboxwlan').css("content","url(widgets/fritzboxWidget/img/wlan"+(fbobj.wlanstate?"on":"off") +".png)");			
            vis.states.bind(data.wlanstate + '.val', function (e, newVal, oldVal) {
				fbobj.wlanstate=newVal;
				console.log ("wlanstate :" + fbobj.wlanstate);
				$div.find('div.fritzboxwlan').css("content","url(widgets/fritzboxWidget/img/wlan"+(fbobj.wlanstate?"on":"off") +".png)");				
            });
        }
		setInterval(function(){ 
			fbobj.flashstate=!fbobj.flashstate;
			if (fbobj.powerstate==2) {
				$div.find('div.fritzboxpower').css("content","url(widgets/fritzboxWidget/img/power"+(fbobj.flashstate?"on":"off") +".png)");
			}; 				
			if (fbobj.connectionstate==2) {
				$div.find('div.fritzboxinternet').css("content","url(widgets/fritzboxWidget/img/internet"+(fbobj.flashstate?"on":"off") +".png)");
			};
			if (fbobj.phonestate==2) {
				$div.find('div.fritzboxphone').css("content","url(widgets/fritzboxWidget/img/phone"+(fbobj.flashstate?"on":"off") +".png)");
			};
			if (fbobj.wlanstate==2) {
				$div.find('div.fritzboxwlan').css("content","url(widgets/fritzboxWidget/img/wlan"+(fbobj.flashstate?"on":"off") +".png)");
			};
		}, 1000);
		
    }
};
