// Copyright 2013 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var ime_api = chrome.input.ime;
var context_id = -1;
//console.log("Initializing IME");
ime_api.onFocus.addListener(function(context) {
  //console.log('onFocus:' + context.contextID);
  context_id = context.contextID;
});
ime_api.onBlur.addListener(function(contextID) {
  //console.log('onBlur:' + contextID);
  context_id = -1;
});
// ime_api.onActivate.addListener(function(engineID) {
//   console.log('onActivate:' + engineID);
// });
// ime_api.onDeactivated.addListener(function(engineID) {
//   console.log('onDeactivated:' + engineID);
// });
// var qwerty_to_colemak = {
//     's': 'r',
//     'd': 's',
//     'f': 't',
//     'g': 'd',
//     'e': 'f',
//     'r': 'p',
//     't': 'g',
//     'y': 'j',
//     'u': 'l',
//     'i': 'u',
//     'o': 'y',
//     'p': ';',
//     'j': 'n',
//     'k': 'e',
//     'l': 'i',
//     ';': 'o',
//     'n': 'k',
//     'S': 'R',
//     'D': 'S',
//     'F': 'T',
//     'G': 'D',
//     'E': 'F',
//     'R': 'P',
//     'T': 'G',
//     'Y': 'J',
//     'U': 'L',
//     'I': 'U',
//     'O': 'Y',
//     'P': ':',
//     'J': 'N',
//     'K': 'E',
//     'L': 'I',
//     ':': 'O',
//     'N': 'K',
// }
var qwerty_to_nav = {
  'e': ['Up', 'ArrowUp'],
  'd': ['Down', 'ArrowDown'],
  's': ['Left', 'ArrowLeft'],
  'f': ['Right', 'ArrowRight'],
  'a': ["\u0000", 'Home'],
  'g': ["\u0000", 'End'],
  'c': ['_', 'Minus'],
  'z': ['~', 'Backquote'],
  'x': ['+', 'Equal'],
  'v': ['=', 'Equal'],
  'b': ['-', 'Minus'],
}

// function unicodeEscape(str) {
//   for (var result = '', index = 0, charCode; !isNaN(charCode = str.charCodeAt(index++));) {
//     result += '\\u' + ('0000' + charCode.toString(16)).slice(-4);
//   }
//   return result;
// }

var is_alt = false

ime_api.onKeyEvent.addListener(
function(engineID, keyData) {
  //console.log(keyData)
  if (keyData.extensionId || keyData.ctrlKey) {
    return false
  }
  // if (keyData.code == 'CapsLock' || keyData.code == 'MetaLeft') {
  //   var newKeyData = JSON.parse(JSON.stringify(keyData))
  //   newKeyData.key = 'Backspace'
  //   newKeyData.code = 'Backspace' //'ArrowLeft'
  //   //chrome.input.ime.commitText({"contextID": context_id, "text": colemak_key});
  //   chrome.input.ime.sendKeyEvents({"contextID": context_id, "keyData": [newKeyData]})
  //   return true
  // }
  if (keyData.code == '' && keyData.key == "\u0000") { // disabled alt
    if (keyData.type == 'keydown') {
      is_alt = true
      return true
    } else if (keyData.type == 'keyup') {
      is_alt = false
      return true
    }
  }
  if (keyData.type != 'keydown') {
    return false
  }
  var key = keyData.key
  if (is_alt) {
    var nav_keypair = qwerty_to_nav[key]
    if (nav_keypair) {
      var nav_key = nav_keypair[0]
      var nav_code = nav_keypair[1]
      var newKeyData = JSON.parse(JSON.stringify(keyData))
      newKeyData.key = nav_key
      newKeyData.code = nav_code //'ArrowLeft'
      //chrome.input.ime.commitText({"contextID": context_id, "text": colemak_key});
      chrome.input.ime.sendKeyEvents({"contextID": context_id, "keyData": [newKeyData]})
      return true
    }
    return true
  }
  // var colemak_key = qwerty_to_colemak[key]
  // if (colemak_key) {
  //   var newKeyData = JSON.parse(JSON.stringify(keyData))
  //   newKeyData.key = colemak_key
  //   //newKeyData.code = 'KeyA'
  //   //chrome.input.ime.commitText({"contextID": context_id, "text": colemak_key});
  //   chrome.input.ime.sendKeyEvents({"contextID": context_id, "keyData": [newKeyData]})
  //   return true
  // }
  return false
});