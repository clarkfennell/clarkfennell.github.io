$(document).ready(function(){
// Progress Bar creation
  $(function(){
   var barHTML = new ProgressBar.SemiCircle(HTML, {
     strokeWidth: 6,
     easing: 'easeInOut',
     duration: 1400,
     color: '#DED009',
     trailColor: '#ADA9B7',
     trailWidth: 1,
     svgStyle: null
   });
   var barSCSS = new ProgressBar.SemiCircle(SCSS, {
     strokeWidth: 6,
     easing: 'easeInOut',
     duration: 1400,
     color: '#D84144',
     trailColor: '#ADA9B7',
     trailWidth: 1,
     svgStyle: null
   });
   var barJS = new ProgressBar.SemiCircle(JavaScript, {
     strokeWidth: 6,
     easing: 'easeInOut',
     duration: 1400,
     color: '#87BBA2',
     trailColor: '#ADA9B7',
     trailWidth: 1,
     svgStyle: null
   });
   var barJQ = new ProgressBar.SemiCircle(JQ, {
     strokeWidth: 6,
     easing: 'easeInOut',
     duration: 1400,
     color: '#586994',
     trailColor: '#ADA9B7',
     trailWidth: 1,
     svgStyle: null
   });
   var barGIT = new ProgressBar.SemiCircle(GIT, {
     strokeWidth: 6,
     easing: 'easeInOut',
     duration: 1400,
     color: '#DED009',
     trailColor: '#ADA9B7',
     trailWidth: 1,
     svgStyle: null
   });
   var barPHP = new ProgressBar.SemiCircle(PHP, {
     strokeWidth: 6,
     easing: 'easeInOut',
     duration: 1400,
     color: '#D84144',
     trailColor: '#ADA9B7',
     trailWidth: 1,
     svgStyle: null
   });
   var barRuby = new ProgressBar.SemiCircle(Ruby, {
     strokeWidth: 6,
     easing: 'easeInOut',
     duration: 1400,
     color: '#87BBA2',
     trailColor: '#ADA9B7',
     trailWidth: 1,
     svgStyle: null
   });
   var barCL = new ProgressBar.SemiCircle(CommandLine, {
     strokeWidth: 6,
     easing: 'easeInOut',
     duration: 1400,
     color: '#586994',
     trailColor: '#ADA9B7',
     trailWidth: 1,
     svgStyle: null
   });
   var barExcel = new ProgressBar.SemiCircle(Excel, {
     strokeWidth: 6,
     easing: 'easeInOut',
     duration: 1400,
     color: '#DED009',
     trailColor: '#ADA9B7',
     trailWidth: 1,
     svgStyle: null
   });
   var barPS = new ProgressBar.SemiCircle(Photoshop, {
     strokeWidth: 6,
     easing: 'easeInOut',
     duration: 1400,
     color: '#D84144',
     trailColor: '#ADA9B7',
     trailWidth: 1,
     svgStyle: null
   });
   var barCSharp = new ProgressBar.SemiCircle(CSharp, {
     strokeWidth: 6,
     easing: 'easeInOut',
     duration: 1400,
     color: '#87BBA2',
     trailColor: '#ADA9B7',
     trailWidth: 1,
     svgStyle: null
   });
   var barNode = new ProgressBar.SemiCircle(NodeJS, {
     strokeWidth: 6,
     easing: 'easeInOut',
     duration: 1400,
     color: '#586994',
     trailColor: '#ADA9B7',
     trailWidth: 1,
     svgStyle: null
   });
   barHTML.animate(0.85);
   barSCSS.animate(0.75);
   barJS.animate(0.6);
   barJQ.animate(0.6);
   barGIT.animate(0.7);
   barPHP.animate(0.55);
   barRuby.animate(0.35);
   barCL.animate(0.5);
   barPS.animate(0.63);
   barCSharp.animate(0.4);
   barExcel.animate(0.785);
   barNode.animate(0.3);
  });
});
