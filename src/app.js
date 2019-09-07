"use strict";

/**
 * 
 * Declares a list of actions, calls an action if the given condition is true.
 * 
 */

/**
 * Declare your action here:
 */

 /**
  * 
  * Replaces the image with the kdiamant email with a proper url
  * 
  */
var kdiamantEmailEeplacement = {
  condition: function() {
    var targetUrl = "aetos.it.teithe.gr/~kdiamant";
    return window.location.toString().indexOf(targetUrl) >= 0;
  },
  action: function() {
    var emailWrapper = document.querySelector("p[title=Email]");
    var emailImage = document.querySelector("p[title=Email] img:nth-child(2)");

    var targetElement = document.createElement("a");
    targetElement.setAttribute("href", "mailto:kdiamant@it.teithe.gr");
    targetElement.innerText = "kdiamant@it.teithe.gr";

    emailWrapper.removeChild(emailImage);
    emailWrapper.appendChild(targetElement);    
  }
}

var listOfActions = [
  kdiamantEmailEeplacement
];

for (var i = 0; i < listOfActions.length; i++) {
  if (listOfActions[i].condition()) {
    listOfActions[i].action();
  }
}
