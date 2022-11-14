<template>
  <div class="UploadSection">
    <div class="UploadSectionTittle">Create New Post</div>
    <div class="UploadSectionMid">
      <i class="fa-solid fa-photo-film PhotoVideoİcon"></i>
      <div class="UploadPhotoİnfo">Drag photos and videos to this area</div>
      <button class="SelectFromComputerButton">
        <strong>Select from computer</strong>
      </button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.UploadSection {
  box-shadow: 1px 1px 10px 10px lightgray;
  background-color: white;
  border-radius: 10px;
  border: 1px solid lightgray;
  text-align: center;
  width: 600px;
  height: 600px;
  margin: auto;
  margin-top: 40px;
}
.UploadSectionTittle {
  border-bottom: 1px solid lightgray;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 100%;
  justify-content: center;
  height: 40px;
  display: flex;
  align-items: center;
}
.UploadSectionMid {
  width: 100%;
  height: 93.1%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.PhotoVideoİcon {
  font-size: 70px;
}
.UploadPhotoİnfo {
  margin-top: 15px;
  margin-bottom: 15px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.SelectFromComputerButton {
  cursor: pointer;
  border-radius: 3px;
  height: 30px;
  color: white;
  border: none;
  background-color: rgb(0, 145, 255);
}
</style>
