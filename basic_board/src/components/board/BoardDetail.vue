<template>
  <div>
    <h1>{{ msg }}</h1>
    <div>
      <div id="titleArea">
        <h2>{{ 제목 }}</h2>
        <div>
          <p>작성일자</p>
          <p>조회수</p>
        </div>
      </div>
      <div id="content">
        <textarea>내용</textarea>
        <v-btn>edit</v-btn>
        <v-btn>delete</v-btn>
        <p>작성자</p>
      </div>
      <div id="reply">
        <!-- v-for 사용해서 댓글 출력 -->
      </div>
    </div>
  </div>
</template>

<script>
// import router from "../../router/router.js";

export default {
  name: "BoardDetail",
  // boardSeq: router.props.seq,

  data() {
    console.log("페이지전환");
    console.log("seq : ", this.boardSeq);

    return {
      // this.getAllBoard()
    };
  },
  methods: {},
  props: {
    boardSeq: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
</style>