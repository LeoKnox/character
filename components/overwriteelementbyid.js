document.getElementById(
      mobArray[0].x + "-" + mobArray[0].y
    ).innerHTML += `<label id="aka">敵</label>`;

/* needs css "position: absolute" to over write location.
Can be useful but would need to hide text underneath. Could
also use "innerHTML =" and replace floor when char moves.
Setting label "background-color: white" is an option.
