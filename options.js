function saveOptions(e) {
  e.preventDefault();
  browser.storage.local.set({
    hussiecomment: document.querySelector("#hussiecomment").checked,
  });
}

function restoreOptions() {

  function setCurrentChoice(result) {
    if (result.hussiecomment === true || result.hussiecomment === false)
      document.querySelector("#hussiecomment").checked = result.hussiecomment;
    else
      document.querySelector("#hussiecomment").checked = true;
  }

  function onError(error) {
    console.log('[HOMESTUCK COMPANION] Error saving options: ${error}');
  }

  //We attempt to get the boolean values from storage
  var hussiecomment = browser.storage.local.get("hussiecomment");

  hussiecomment.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);