<template>
  <div>
    <h1>{{ msg }}</h1>
    <div>
      <p class="titleTop" style="align: left">제목</p>
      <p class="titleTop">조회수</p>
    </div>
    <div v-for="list in list" :key="list.seq">
      <div>
        <p class="title">
          <a @click="openBoardDetail">
            {{ list.title }}
          </a>
          <span style="font-size: small">{{ list.viewCount }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoardList",
  data() {
    return {
      // this.getAllBoard()
      totalSize: 7,
      list: [
        {
          seq: 7,
          title: "ㅁㅁㅁㅁ",
          content: "ㅁㅁㅁㅁ",
          viewCount: 283,
          memberEmail: "ss.lee@email.com",
          replies: [
            {
              seq: 12,
              content: "sdfsfsdfaa",
              memberEmail: "admin@email.com",
              createDate: "2022-01-03T05:35:21.395525",
              updateDate: "2022-04-29T01:29:31.018735",
              deleted: false,
            },
            {
              seq: 13,
              content: "sdfsfsㅇㄹㄹdf",
              memberEmail: "admin@email.com",
              createDate: "2022-01-03T05:49:07.425764",
              updateDate: "2022-01-03T05:49:07.42577",
              deleted: false,
            },
            {
              seq: 14,
              content: "ㄴㅇㅇㄴㅇ",
              memberEmail: "admin@email.com",
              createDate: "2022-01-03T05:49:13.383223",
              updateDate: "2022-01-03T05:49:13.383229",
              deleted: false,
            },
            {
              seq: 21,
              content: "삭제된 댓글 입니다.",
              memberEmail: "wslim@test.com",
              createDate: "2022-03-10T21:28:00.171384",
              updateDate: "2022-03-11T07:48:02.475682",
              deleted: true,
            },
            {
              seq: 22,
              content: "삭제된 댓글 입니다.",
              memberEmail: "wslim@test.com",
              createDate: "2022-03-10T21:29:44.091195",
              updateDate: "2022-03-10T22:38:38.533442",
              deleted: true,
            },
            {
              seq: 23,
              content: "삭제된 댓글 입니다.",
              memberEmail: "wslim@test.com",
              createDate: "2022-03-10T21:37:42.120159",
              updateDate: "2022-03-10T22:38:29.86271",
              deleted: true,
            },
            {
              seq: 24,
              content: "test1234jbnmnbnb nb",
              memberEmail: "admin@email.com",
              createDate: "2022-03-11T07:23:33.822784",
              updateDate: "2022-03-11T08:07:36.713868",
              deleted: false,
            },
            {
              seq: 25,
              content: "삭제된 댓글 입니다.",
              memberEmail: "wslim@test.com",
              createDate: "2022-03-11T07:50:59.979348",
              updateDate: "2022-03-11T07:51:20.091977",
              deleted: true,
            },
            {
              seq: 26,
              content: "삭제된 댓글 입니다.",
              memberEmail: "wslim@test.com",
              createDate: "2022-03-11T07:56:00.794919",
              updateDate: "2022-03-11T07:56:00.794925",
              deleted: true,
            },
            {
              seq: 28,
              content: "삭제된 댓글 입니다.",
              memberEmail: "wslim@test.com",
              createDate: "2022-03-15T02:16:11.284604",
              updateDate: "2022-03-15T02:16:11.284616",
              deleted: true,
            },
            {
              seq: 29,
              content: "aaatest",
              memberEmail: "wslim@test.com",
              createDate: "2022-03-15T03:19:22.282308",
              updateDate: "2022-03-15T03:19:22.282317",
              deleted: false,
            },
          ],
          createDate: "2021-12-03T07:12:12.659918",
          updateDate: "2022-06-16T05:17:21.319716",
        },
        {
          seq: 8,
          title: "이번엔 써 질까?",
          content: "????",
          viewCount: 112,
          memberEmail: "ss.lee@email.com",
          replies: [
            {
              seq: 27,
              content: "test2zzz",
              memberEmail: "wslim@test.com",
              createDate: "2022-03-11T08:08:41.089553",
              updateDate: "2022-03-11T08:09:21.200554",
              deleted: false,
            },
          ],
          createDate: "2021-12-03T07:40:34.86761",
          updateDate: "2022-06-16T03:44:28.045631",
        },
        {
          seq: 9,
          title: "작성자만 수정삭제 보이위한 테스트",
          content: "작성자만 수정삭제 보이위한 테스트",
          viewCount: 75,
          memberEmail: "ws.han@email.com",
          replies: [
            {
              seq: 6,
              content: "댓글을 달아보아요",
              memberEmail: "ws.han@email.com",
              createDate: "2021-12-03T09:37:44.343525",
              updateDate: "2021-12-03T09:37:44.343532",
              deleted: false,
            },
            {
              seq: 7,
              content: "111",
              memberEmail: "ss.lee@email.com",
              createDate: "2021-12-05T07:46:27.808004",
              updateDate: "2021-12-05T07:46:27.80803",
              deleted: false,
            },
            {
              seq: 8,
              content: "222",
              memberEmail: "ss.lee@email.com",
              createDate: "2021-12-05T10:02:05.61735",
              updateDate: "2021-12-05T10:02:05.617368",
              deleted: false,
            },
          ],
          createDate: "2021-12-03T09:16:38.690481",
          updateDate: "2022-06-16T05:18:30.218435",
        },
        {
          seq: 10,
          title: "cccccccccccccccccccccccccc",
          content: "aaaaaaaaaaaaaaaaaaaaaaaafsafdasdf",
          viewCount: 4,
          memberEmail: "peter.lee@twolinecode.com",
          replies: [],
          createDate: "2021-12-21T09:24:51.213282",
          updateDate: "2022-03-10T22:20:26.102344",
        },
        {
          seq: 11,
          title: "asd",
          content: "asd",
          viewCount: 2,
          memberEmail: "uu@uu",
          replies: [],
          createDate: "2021-12-22T06:54:24.403717",
          updateDate: "2022-03-11T02:16:26.272314",
        },
        {
          seq: 12,
          title: "ㅁㄴㅇㄹ",
          content: "ㅁㄴㅇㄹ",
          viewCount: 1,
          memberEmail: "uu@uu",
          replies: [],
          createDate: "2021-12-23T05:40:28.108535",
          updateDate: "2022-03-10T02:19:34.876124",
        },
        {
          seq: 13,
          title: "ㅇㄹ",
          content: "ㅇㄹ",
          viewCount: 1,
          memberEmail: "uu@uu",
          replies: [],
          createDate: "2021-12-23T05:43:14.608873",
          updateDate: "2022-03-10T09:07:45.093159",
        },
        {
          seq: 14,
          title: "ㅇㄹ",
          content: "ㅇㄹ",
          viewCount: 2,
          memberEmail: "uu@uu",
          replies: [],
          createDate: "2021-12-23T05:44:24.220559",
          updateDate: "2022-04-29T01:51:03.496706",
        },
        {
          seq: 15,
          title: "ㄹ",
          content: "ㅀ",
          viewCount: 0,
          memberEmail: "uu@uu",
          replies: [],
          createDate: "2021-12-23T05:44:59.098818",
          updateDate: "2021-12-23T05:44:59.098825",
        },
        {
          seq: 16,
          title: "asssssssssssssssssss",
          content: "asdsssssssssssss",
          viewCount: 15,
          memberEmail: "uu@uu",
          replies: [],
          createDate: "2021-12-23T05:45:48.303904",
          updateDate: "2022-04-29T01:34:34.826304",
        },
      ],
    };
  },

  methods: {
    openBoardDetail() {
      // 게시글의 seq 가지고 가서 BoardDetail로 이동

      console.log(this.String);
    },
    getAllBoard() {
      return {
        // API 연동하여 데이터 가져오기
      };
    },
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  display: inline-block;
  text-align: left;
  width: 500px;
  color: #42b983;
}
.titleTop {
  display: inline-block;
  margin-left: 5%;
  margin-right: 5%;
}
</style>
