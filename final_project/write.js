function copyright() {
  document.write('<div id="copyright">\u00A9 Zhehao Lu 2018 @USC, no rights reserved</div>');
}

function navBar() {
  document.write('\
    <div class="codeFont" id="nav">\
    <div class="navItem"><a href="index.html">Home</a></div>\
    <div class="navItem"><a href="info.html">About</a></div>\
      <div id="projects" class="navItem">\
        <a href="projects.html">Projects</a>\
        <div id="dropdown-content">\
          <a href="stellar.html">Stellar</a><br/>\
          <a href="projects.html#overryde">Overryde</a><br/>\
          <a href="projects.html#librarian">Librarian</a><br/>\
          <a href="projects.html#ligo">LIGO</a><br/>\
        </div>\
      </div>\
      <div class="navItem"><a href="misc.html">Misc</a></div>\
      <div class="navItem"><a href="contact.html">Contact</a></div>\
      <div class="clearFloat"></div>\
    </div>\
  ');
}

function logo() {
  document.write('\
    <div id="logo">\
      <a href="index.html"><img src="logo.jpg"><a>\
    </div>\
  ');
}