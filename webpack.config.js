var getConfig = require('hjs-webpack')

var robotoFont = `
<script type="text/javascript">
  WebFontConfig = {
    google: { families: [ 'Roboto:400,300,500:latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })(); </script>
`
    
module.exports = getConfig({
  in: 'src/app.js',
  out: 'public',
  clearBeforeBuild: true,
  hash: true,
  hostname: '0.0.0.0',
  html: function(context){
    return {
      'index.html': context.defaultTemplate({
        head: robotoFont,
        title: 'AOS3'
      })
    }
  }
})