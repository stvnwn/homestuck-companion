function saveOptions(e) {
  e.preventDefault();
  browser.storage.local.set({
    hussiecomment: document.querySelector("#hussiecomment").checked,
  });
}

function restoreOptions() {

  async function setCurrentChoice(result) {
    if (result.hussiecomment === undefined) {
      await browser.storage.local.set({
        hussiecomment: true,
      });
    }
    document.querySelector("#hussiecomment").checked = result.hussiecomment;
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
