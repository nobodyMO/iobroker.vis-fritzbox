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
