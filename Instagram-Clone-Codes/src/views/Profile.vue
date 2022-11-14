<template>
  <div class="Profile">
    <div class="ProfileTop">
      <div class="ProfileDiv">
        <img
          src="data:image/jpeg;base64,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"
          class="AdminAccountProfile"
        />
      </div>
      <div class="ProfileTopRight">
        <div class="ProfileTopRightTop">
          <div class="AdminAccountİnfo">
            <div class="AdminAccountName">{{ AdminAccountName }}</div>
          </div>
          <button
            type="button"
            class="EditProfileButton"
            @click="EditProfileShow = true"
          >
            Edit Profile
          </button>
          <div @click="SettingsModalShow = true">
            <i class="fa-solid fa-gear icon"></i>
          </div>
        </div>
        <div class="ProfileTopRightMid">
          <div class="posts">3 Posts</div>
          <div class="followers">250 Followers</div>
          <div class="following">111 Following</div>
        </div>
        <div class="ProfileTopRightFooter">
          <div class="AdminName">
            <strong>{{ AdminName }}</strong>
          </div>
          <div class="biography">
            {{ Biography }}
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="Options">
      <router-link
        tag="div"
        to="/posts"
        class="Option"
        active-class="active"
        exact
      >
        <i class="fa-solid fa-table-cells Optionİcon"></i> POSTS
      </router-link>

      <router-link
        tag="div"
        to="/saved"
        class="Option"
        active-class="active"
        exact
      >
        <i class="fa-solid fa-bookmark Optionİcon"></i> SAVED
      </router-link>

      <router-link
        tag="div"
        to="/tagged"
        class="Option"
        active-class="active"
        exact
      >
        <i class="fa-solid fa-user Optionİcon"></i>TAGGED
      </router-link>
    </div>
    <div class="EditProfile" v-if="EditProfileShow">
      <div class="EditProfileTop">
        <div class="tittle">Edit Profile</div>
        <div @click="CloseEditModal">
          <i class="fa-solid fa-xmark timesİcon"></i>
        </div>
      </div>
      <input type="text" placeholder="Write new name" v-model="NewAdminName" />
      <input
        type="text"
        placeholder="Write new account name"
        v-model="NewAdminAccountName"
      />
      <input
        type="text"
        placeholder="Write new biography"
        v-model="NewBiography"
      />
      <button type="button" class="Button" @click="ChangeButton">Change</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      AdminName: "Emin",
      AdminAccountName: "_emin_inan_",
      Biography: "Piç olsun sözünden dönen Zengin olmadan ölen 💵💵",
      NewAdminAccountName: "",
      NewAdminName: "",
      NewBiography: "",
      EditProfileShow: false,
      SettingsModalShow: false,
    };
  },
  methods: {
    ChangeButton() {
      this.AdminName = this.NewAdminName;
      this.AdminAccountName = this.NewAdminAccountName;
      this.Biography = this.NewBiography;

      if (this.NewAdminName == "") {
        this.AdminName = "Emin";
        this.AdminAccountName = "_emin_inan_";
        alert("Name field cannot be left blank");
      }
      if (this.NewAdminAccountName == "") {
        this.AdminName = "Emin";
        this.AdminAccountName = "_emin_inan_";
        alert("Account name field cannot be left blank");
      } else {
        alert("Account information has been changed");
      }
    },
    CloseEditModal() {
      this.EditProfileShow = false;

      this.NewAdminAccountName = "";
      this.NewAdminName = "";
      this.NewBiography = "";
    },
  },
};
</script>
<style scoped>
.Profile {
  height: 240px;
  margin: auto;
  width: 55%;
}
.ProfileTop {
  display: flex;
}
.ProfileDiv {
  justify-content: center;
  display: flex;
  width: 300px;
}
.AdminAccountProfile {
  padding: 20px;
  width: 140px;
  height: 140px;
  border-radius: 1400px;
}
.ProfileTopRight {
  display: flex;
  flex-direction: column;
}
.ProfileTopRightTop {
  margin-top: 24px;
  height: 40px;
  align-items: center;
  justify-content: space-between;
  width: 340px;
  display: flex;
}
.AdminAccountName {
  font-size: 28px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.EditProfileButton {
  margin-right: 10px;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 3px;
  height: 30px;
  width: 120px;
  background: none;
  border: 1px solid lightgray;
}
.icon {
  font-size: 24px;
  cursor: pointer;
}
.ProfileTopRightMid {
  margin-top: 12px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  height: 40px;
  align-items: center;
  justify-content: space-between;
  width: 340px;
  display: flex;
}
.AdminName {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.biography {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
hr {
  margin: 0;
  border: 0.1px solid lightgray;
}
.Options {
  color: black;
  justify-content: space-between;
  margin: auto;
  width: 440px;
  display: flex;
}
.Option {
  color: gray;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 50px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.Optionİcon {
  margin-right: 6px;
}
.active {
  color: black;
  margin-top: -1px;
  border-top: 1px solid black;
}
.EditProfile {
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: -210px;
  box-shadow: 1px 1px 4px 4px lightgray;
  margin-left: -350px;
  background-color: gray;
  width: 300px;
  height: 200px;
  position: absolute;
}
.tittle {
  margin-bottom: 4px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 24px;
  color: white;
}
input {
  outline: none;
  width: 90%;
  height: 30px;
}
.Button {
  width: 93%;
  height: 30px;
}
.EditProfileTop {
  height: 30px;
  align-items: center;
  display: flex;
}
.timesİcon {
  margin-bottom: 3px;
  cursor: pointer;
  margin-left: 60px;
  margin-right: -70px;
  color: white;
  font-size: 30px;
}
</style>
