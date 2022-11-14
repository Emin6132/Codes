<template>
  <div class="Saved">
    <div class="image-grid">
      <div class="image">
        <img
          class="img"
          src="data:image/jpeg;base64,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"
        />
        <div class="image__overlay image__overlay--primary">
          <div class="İmageİnfo">
            <div class="imgLikedView">
              <i class="fa-solid fa-heart likedİcon"></i>21
            </div>
            <div class="imgCommentView">
              <i class="fa-solid fa-comment commentİcon"></i>
              13
            </div>
          </div>
        </div>
      </div>
      <div class="image">
        <img
          class="img"
          src="data:image/jpeg;base64,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"
        />
        <div class="image__overlay image__overlay--primary">
          <div class="İmageİnfo">
            <div class="imgLikedView">
              <i class="fa-solid fa-heart likedİcon"></i>7K
            </div>
            <div class="imgCommentView">
              <i class="fa-solid fa-comment commentİcon"></i>
              63
            </div>
          </div>
        </div>
      </div>
      <div class="image">
        <img
          class="img"
          src="data:image/jpeg;base64,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"
        />
        <div class="image__overlay image__overlay--primary">
          <div class="İmageİnfo">
            <div class="imgLikedView">
              <i class="fa-solid fa-heart likedİcon"></i>12K
            </div>
            <div class="imgCommentView">
              <i class="fa-solid fa-comment commentİcon"></i>
              831
            </div>
          </div>
        </div>
      </div>
      <div class="image">
        <img
          class="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUjA9qh--8TlYVrzwN7X-MWbVET4kjX7Sag&usqp=CAU"
        />
        <div class="image__overlay image__overlay--primary">
          <div class="İmageİnfo">
            <div class="imgLikedView">
              <i class="fa-solid fa-heart likedİcon"></i>721
            </div>
            <div class="imgCommentView">
              <i class="fa-solid fa-comment commentİcon"></i>
              13
            </div>
          </div>
        </div>
      </div>
      <div class="image">
        <img
          class="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiRzmOFhOY14U9OWPm4zq9q9tV3weS0QWeCA&usqp=CAU"
        />
        <div class="image__overlay image__overlay--primary">
          <div class="İmageİnfo">
            <div class="imgLikedView">
              <i class="fa-solid fa-heart likedİcon"></i>342
            </div>
            <div class="imgCommentView">
              <i class="fa-solid fa-comment commentİcon"></i>
              36
            </div>
          </div>
        </div>
      </div>
      <div class="image">
        <img
          class="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjWCGA4Te4kT5AWQJgXDrh1nHM5pHaQ6gqLg&usqp=CAU"
        />
        <div class="image__overlay image__overlay--primary">
          <div class="İmageİnfo">
            <div class="imgLikedView">
              <i class="fa-solid fa-heart likedİcon"></i>3K
            </div>
            <div class="imgCommentView">
              <i class="fa-solid fa-comment commentİcon"></i>
              81
            </div>
          </div>
        </div>
      </div>
      <div class="image">
        <img
          class="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1PveuVm-dAuB-aqN8W1QXI_0ROCdpPAulQQ&usqp=CAU"
        />
        <div class="image__overlay image__overlay--primary">
          <div class="İmageİnfo">
            <div class="imgLikedView">
              <i class="fa-solid fa-heart likedİcon"></i>923
            </div>
            <div class="imgCommentView">
              <i class="fa-solid fa-comment commentİcon"></i>
              91
            </div>
          </div>
        </div>
      </div>
      <div class="image">
        <img
          class="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQelBtD4DtaP3GC0svVD48kFZrZsDs2IN1Naw&usqp=CAU"
        />
        <div class="image__overlay image__overlay--primary">
          <div class="İmageİnfo">
            <div class="imgLikedView">
              <i class="fa-solid fa-heart likedİcon"></i>11K
            </div>
            <div class="imgCommentView">
              <i class="fa-solid fa-comment commentİcon"></i>
              323
            </div>
          </div>
        </div>
      </div>
      <div class="image">
        <img
          class="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyHInq7HrtJV_RF491m46pMsGPjHZcijWbiw&usqp=CAU"
        />
        <div class="image__overlay image__overlay--primary">
          <div class="İmageİnfo">
            <div class="imgLikedView">
              <i class="fa-solid fa-heart likedİcon"></i>19K
            </div>
            <div class="imgCommentView">
              <i class="fa-solid fa-comment commentİcon"></i>
              1131
            </div>
          </div>
        </div>
      </div>
      <div class="image">
        <img
          class="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa6VJqwyYsLBT7WgoqtMj4884gx08P4d2KhQ&usqp=CAU"
        />
        <div class="image__overlay image__overlay--primary">
          <div class="İmageİnfo">
            <div class="imgLikedView">
              <i class="fa-solid fa-heart likedİcon"></i>1223
            </div>
            <div class="imgCommentView">
              <i class="fa-solid fa-comment commentİcon"></i>
              131
            </div>
          </div>
        </div>
      </div>
      <div class="image">
        <img
          class="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS86joXblG1-U31iU56WGn1-X8d0SXPTeL7cQ&usqp=CAU"
        />
        <div class="image__overlay image__overlay--primary">
          <div class="İmageİnfo">
            <div class="imgLikedView">
              <i class="fa-solid fa-heart likedİcon"></i>4K
            </div>
            <div class="imgCommentView">
              <i class="fa-solid fa-comment commentİcon"></i>
              823
            </div>
          </div>
        </div>
      </div>
      <div class="image">
        <img
          class="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnA5CXFTrlOKwtWdOwg6VXBHfPH-b8XtLnmg&usqp=CAU"
        />
        <div class="image__overlay image__overlay--primary">
          <div class="İmageİnfo">
            <div class="imgLikedView">
              <i class="fa-solid fa-heart likedİcon"></i>2K
            </div>
            <div class="imgCommentView">
              <i class="fa-solid fa-comment commentİcon"></i>
              431
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.image-grid {
  --gap: 16px;
  --num-cols: 3;
  --row-height: 300px;

  margin: auto;
  height: 600px;
  overflow-y: auto;
  width: 925px;
  box-sizing: border-box;
  padding: var(--gap);

  display: grid;
  grid-template-columns: repeat(var(--num-cols), 1fr);
  grid-auto-rows: var(--row-height);
  gap: var(--gap);
}

.image-grid > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Anything udner 1024px */
@media screen and (max-width: 1100px) {
  .image-grid {
    --num-cols: 2;
    --row-height: 200px;
  }
}
.Saved {
  height: 100%;
  margin: auto;
  justify-content: space-between;
  width: 960px;
  display: flex;
}
.image {
  cursor: pointer;
  position: relative;
  width: 290px;
  height: 80%;
}
img {
  width: 100%;
  height: 100%;
}
.image__img {
  width: 100%;
}

.image__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  font-family: "Quicksand", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.25s;
}

.image__overlay--blur {
  backdrop-filter: blur(5px);
}

.image__overlay > * {
  transform: translateY(20px);
  transition: transform 0.25s;
}

.image__overlay:hover {
  opacity: 1;
}

.image__overlay:hover > * {
  transform: translateY(0);
}

.İmageİnfo {
  font-size: 1.2em;
  display: flex;
}
.likedİcon {
  margin-right: 6px;
}
.commentİcon {
  margin-right: 6px;
  margin-left: 40px;
}
</style>
