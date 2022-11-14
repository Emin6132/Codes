<template>
  <div class="GameScreen">
    <div class="top">
      <div class="player-health health">
        <div class="tittle">PLAYER</div>
        <div class="healthBar">
          <div class="health-bar-in" :style="{ width: playerHealth + '%' }">
            {{ playerHealth }}%
          </div>
        </div>
      </div>

      <div class="monster-health health">
        <div class="tittle">MONSTER</div>
        <div class="healthBar">
          <div class="health-bar-in" :style="{ width: monsterHealth + '%' }">
            {{ monsterHealth }}%
          </div>
        </div>
      </div>
    </div>

    <hr />
    <div
      class="StartButton"
      type="button"
      v-if="!game_is_on"
      @click="StartGame"
    >
      Start Game
    </div>
    <div class="buttons" v-if="game_is_on">
      <button type="button" id="attack" class="button" @click="Attack">
        Attack
      </button>
      <button
        type="button"
        id="special-attack"
        class="button"
        @click="SpecialAttack"
      >
        Special Attack
      </button>
      <button type="button" id="health" class="button" @click="FirstAid">
        First Aid
      </button>
      <button type="button" id="give-up" class="button" @click="GiveUp">
        Give Up
      </button>
    </div>
    <div v-for="log in logs" :key="log"></div>
    {{ log }}
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      game_is_on: false,
      logs: [],
    };
  },
  methods: {
    StartGame() {
      this.game_is_on = true;
    },
    Attack() {
      var damage = Math.ceil(Math.random() * 10);

      this.add_to_log({ turn: "p", text: "Player Attack (" + damage + ")" });
      this.monsterHealth = this.monsterHealth - damage;
      this.MonsterAttack();
    },
    SpecialAttack() {
      var damage = Math.ceil(Math.random() * 20);

      this.add_to_log({
        turn: "p",
        text: "Special Player Attack (" + damage + ") ",
      });
      this.monsterHealth = this.monsterHealth - damage;
      this.SpecialMonsterAttack();
    },
    FirstAid() {
      var FirstAidPoint = Math.ceil(Math.random() * 10);

      this.add_to_log({ turn: "p", text: "First Aid (" + FirstAidPoint + ")" });
      this.playerHealth = this.playerHealth + FirstAidPoint;
    },
    GiveUp() {
      this.add_to_log({ turn: "p", text: "Player Give Up " });
      this.playerHealth = 0;
    },
    MonsterAttack() {
      var MonsterDamage = Math.ceil(Math.random() * 10);

      this.playerHealth = this.playerHealth - MonsterDamage;
      this.add_to_log({
        turn: "m",
        text: " Monster Attack (" + MonsterDamage + ")",
      });
    },
    SpecialMonsterAttack() {
      var SpecialMonsterDamage = Math.ceil(Math.random() * 20);

      this.playerHealth = this.playerHealth - SpecialMonsterDamage;
      this.add_to_log({
        turn: "m",
        text: "Special Monster Attack (" + SpecialMonsterDamage + ") ",
      });
    },
    add_to_log: function (log) {
      this.logs.push(log);
    },
  },
  watch: {
    monsterHealth: function (value) {
      if (value <= 0) {
        this.monsterHealth = 0;

        if (confirm("You win the game !!! Would you like to play again ?")) {
          this.playerHealth = 100;
          this.monsterHealth = 100;
        }
      }
    },
    playerHealth: function (value) {
      if (value <= 0) {
        this.playerHealth = 0;

        if (confirm("You lost the game !!! Would you like to try again ?")) {
          this.playerHealth = 100;
          this.monsterHealth = 100;
        }
      } else if (value >= 100) {
        this.playerHealth = 100;
      }
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
.GameScreen {
  border-radius: 10px;
  height: 50vh;
  width: 80%;
  margin: auto;
  margin-top: 100px;
  background-color: lightgray;
}
.top {
  width: 100%;
  justify-content: space-evenly;
  height: 60px;
  align-items: center;
  display: flex;
}
.health {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 180px;
}
.tittle {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.healthBar {
  border-radius: 4px;
  height: 26px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 200px;
  background-color: gray;
}
.health-bar-in {
  transition: 300ms;
  color: white;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 26px;
  width: 100%;
  background-color: green;
  border-radius: 4px;
}
.StartButton {
  transition: 300ms;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin: auto;
  cursor: pointer;
  width: 120px;
  height: 30px;
  border: 1px solid black;
  border-radius: 4px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.StartButton:active {
  transform: translateY(3px);
}
.buttons {
  margin: auto;
  margin-top: 20px;
  width: 40%;
  display: flex;
  justify-content: space-evenly;
}
#attack {
  background-color: tomato;
}
#special-attack {
  background-color: orange;
}
#health {
  background-color: green;
}
#give-up {
  background-color: rgb(157, 154, 154);
}
.button {
  cursor: pointer;
  transition: 300ms;
  color: white;
  width: 130px;
  height: 30px;
  border: 1px solid black;
  border-radius: 4px;
}
.button:active {
  transform: translateY(3px);
}
</style>
