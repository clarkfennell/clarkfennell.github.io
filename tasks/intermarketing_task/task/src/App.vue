<template>
  <div id="app">
    <div class="main">
      <div class="remaining">
        <p><span id="remainTotal"></span> still needed for this project</p>
      </div>
      <div class="progress">
        <div class="progressFill"></div>
      </div>
      <div class="charity">
        <p><span class="orange">Only 3 days left</span> to fund this project
        <br/>
        <br/>
        Join the <strong>42</strong> others donors who have already supported this project. Every dollar helps.</p>
        <div class="input">
          <label for="money">$</label>
          <input type="number" id="money" placeholder="50" />
          <input type="submit" class="btn green" id="giveBtn" value="Give Now" />
        </div>
        <a class="blue">Why give $50?</a>
      </div>
      <a class="btn">Save for later</a>
      <a class="btn">Tell your friends</a>
    </div>
  </div>
</template>

<script>
window.$ = require('jquery')
window.JQuery = require('jquery')

export default {
  name: "app"
};
$(document).ready(function() {
  var totalNeeded = 1000;
  var totalAqquired = 0;
  
  var remainTotal = totalNeeded - totalAqquired;
  $('#remainTotal').text("£" + Number(remainTotal));

  var remainPercent = 100 - ((remainTotal/totalNeeded)*100);
  $('.progressFill').css("width", Number(remainPercent) + "%");

  $('#giveBtn').on('click', function(){
    var money = $('#money').val();
    totalAqquired = Number(totalAqquired) + Number(money);
    var remainTotal = totalNeeded - totalAqquired;
    $('#remainTotal').text(Number(remainTotal));
    var remainPercent = 100 - ((remainTotal/totalNeeded)*100);
    $('.progressFill').css("width", Number(remainPercent) + "%");
  })
})
</script>

<style>
@import './assets/css/main.min.css';
</style>
