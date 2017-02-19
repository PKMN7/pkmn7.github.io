(function(window, undefined) {
  var dictionary = {
    "a8154f73-bc43-4e62-a12d-5c79160bec7a": "Login",
    "d80e458f-db53-4d3e-9e14-d2308b7f8d1f": "Home Screen - Group",
    "40ae32a9-1ccb-4c99-a735-dbaf156edac4": "Profile",
    "201ab676-2537-456c-a263-fcd224db94ed": "Session Settings",
    "963af98c-128f-46f7-9154-dd70306a2bf9": "Sign Up",
    "5073fc9b-576c-4149-9e55-7a82eb159f75": "Add Classes(Post Sign)",
    "1245b409-e50c-45ed-b3c6-74993b4e911e": "Create Session",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home Screen",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);