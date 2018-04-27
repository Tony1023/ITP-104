function copyright() {
  document.write('<div id="copyright">\u00A9 Zhehao Lu 2018 @USC, no rights reserved</div>');
}
function navBar() {
  document.write(
    '<div class="codeFont" id="nav">\
      <div class="navItem"><a href="index.html">Home</a></div>\
      <div id="projects" class="navItem">\
        <a href="projects.html">Projects</a>\
        <div id="dropdown-content">\
          <a href="stellar.html">Stellar</a><br/>\
          <a href="coming_soon.html">Overryde</a><br/>\
          <a href="librarian.html">Librarian</a><br/>\
          <a href="coming_soon.html">LIGO</a><br/>\
        </div>\
      </div>\
      <div class="navItem"><a href="info.html">Personal Info</a></div>\
      <div class="navItem"><a href="misc.html">Misc</a></div><div class="clearFloat"></div>\
    </div>'
  );
}