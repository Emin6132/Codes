<template>
  <div class="article">
    <div class="MessagePage">
      <div class="MessagePageLeft">
        <div class="Accountİnfo">
          <div class="AccountNameDiv">
            <div class="AccountName">
              <strong>{{ AdminAccountName }}</strong>
            </div>
            <i class="fa-solid fa-chevron-down ChangeAccount"></i>
          </div>
          <i class="fa-solid fa-plus NewPersonİcon"></i>
        </div>
        <div class="MessageOptions">
          <div class="MessageOptionsOne MessageOption MessageOptionPrimary">
            <strong>PRİMARY</strong>
          </div>
          <div class="MessageOptionsTwo MessageOption MessageOptionGeneral">
            GENERAL
          </div>
          <div class="MessageOptionsThree MessageOption MessageWantsOptions">
            <strong>  Requests(1)</strong>
          </div>
        </div>
      </div>
      <div class="MessagePageRight">
        <div class="SendMessageSection">
          <div><i class="fa-regular fa-paper-plane SendMessageİcon"></i></div>
          <div class="SendMessageSectionTittle">Your Messages</div>
          <div class="SendMessageSectionExplanation">Send private photos and messages to a friend or group.</div>
          <button class="SendMessageButton" type="button">Send Message</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      AdminAccountName: "_emin_inan_",
    };
  },
};
</script>
<style scoped>
.MessagePage {
  background-color: white;
  display: flex;
  border-radius: 3px;
  border: 1px solid lightgray;
  height: 750px;
  margin: auto;
  margin-top: 15px;
  width: 930px;
}
.MessagePageLeft {
  height: 100%;
  border-right: 1px solid lightgray;
  width: 345px;
}
.Accountİnfo {
  border-bottom: 1px solid lightgray;
  align-items: center;
  justify-content: space-between;
  display: flex;
  width: 100%;
  height: 60px;
}
.AccountNameDiv {
  justify-content: right;
  width: 234px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
}
.NewPersonİcon {
  font-size: 20px;
  cursor: pointer;
  margin-right: 20px;
}
.ChangeAccount {
  font-size: 19px;
  margin-left: 8px;
}
.MessageOptions {
  display: flex;
}
.MessageOption {
  font-size: 14px;
  cursor: pointer;
  align-items: center;
  height: 40px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  justify-content: center;
  display: flex;
  width: 115px;
}
.MessageWantsOptions {
  border-bottom: 1px solid lightgray;
  color: rgb(0, 145, 255);
}
.MessageOptionGeneral {
  color: rgb(184, 184, 184);
  border-bottom: 1px solid lightgray;
}
.MessageOptionPrimary {
  border-bottom: 1px solid black;
}
.SendMessageSection{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  display: flex;
  width: 162.8%;
}
.SendMessageİcon{
  margin-bottom: 15px;
  font-size: 70px;
}
.SendMessageSectionTittle{
  margin-bottom: 5px;
  font-size: 20px;
}
.SendMessageSectionExplanation{
  margin-bottom: 18px;
  font-size: 14px;
  color: gray;
}
.SendMessageButton{
  cursor: pointer;
  border-radius: 3px;
  height: 30px;
  color: white;
  border: none;
  background-color: rgb(0, 145, 255);
}
</style>
