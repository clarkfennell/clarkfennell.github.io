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
          <span class="currancy">
            <input type="text" placeholder="50" />
          </span>
          <input type="submit" class="btn green" value="Give Now" />
        </div>
        <a class="blue">Why give $50?</a>
      </div>
      <a class="btn">Save for later</a>
      <a class="btn">Tell your friends</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
@import './assets/css/main.css';
</style>
