<template>
  <div class="updates">
    <bar></bar>
    <v-main >
      <v-container fluid >
                    <template class="bkColor" v-if="!this.Bookflag">
                    <v-item v-for="(item, index) in blogDT" v-bind:key="index" >
                      <div>
                        <v-hover v-slot:default="{ hover }">
                          <v-card
                            class="mx-auto"
                            color="grey lighten-5"
                            dark
                            max-width="800"
                            :elevation="hover ? 16 : 4"
                            :class="{ 'on-hover': hover }"
                            :to="'/BlogList/ScanBlog/'+item.blogID"
                            
                          >
                            <v-card-title
                            class="title font-weight-bold black--text">
                              <v-icon
                                large
                                left
                                color="black"
                              >
                                mdi-twitter
                              </v-icon>
                              {{item.blogTitle}}
                            </v-card-title>

                            <v-card-text class="headline font-italic black--text">
                             <div class="textDisplay">{{item.content}}</div> 
                            </v-card-text>

                            <v-card-actions align="right">
                              <v-list-item class="grow">
                                <v-list-item-title class="title font-weight-bold black--text" >{{item.author}}</v-list-item-title>
                                <v-list-item-avatar color="grey darken-3">
                                  <v-img
                                    class="elevation-6"
                                    :src="'/home/moyun/file/'+item.authorImage"
                                  ></v-img>
                                </v-list-item-avatar>

                              </v-list-item>
                            </v-card-actions>
                          </v-card>
                        </v-hover>
                      </div>
                    </v-item>
                  </template>    
                    <template v-else>
                    <v-item v-for="(item, index) in bookReviewDT" v-bind:key="index">
                      <div>
                        <v-hover v-slot:default="{ hover }">
                          <v-card
                            class="mx-auto"
                            color="blue-grey darken-1"
                            dark
                            max-width="800"
                            :elevation="hover ? 24 : 2"
                            :class="{ 'on-hover': hover }"
                            :to="'/Book/BookReview/'+item.bookReviewID"
                          >
                            <v-card-title>
                              <v-icon
                                large
                                left
                              >
                                mdi-twitter
                              </v-icon>
                              {{item.title}}
                            </v-card-title>

                            <v-card-text class="headline font-weight-bold font-italic ">
                             <div class="textDisplay">{{item.content}}</div> 
                            </v-card-text>

                            <v-card-actions>
                              <v-list-item class="grow">

                                <v-list-item-avatar color="grey darken-3">
                                  <v-img
                                    class="elevation-6"
                                    :src="'/home/moyun/file/'+item.authorImage"
                                  ></v-img>
                                </v-list-item-avatar>
                                  <v-list-item-title class="title font-weight-bold" >{{item.author}}</v-list-item-title>
                              </v-list-item>
                            </v-card-actions>
                          </v-card>
                        </v-hover>
                      </div>
                    </v-item>
                  </template>    

              <v-speed-dial
                fixed
                bottom
                right
                v-model="fab"
                direction="top"
                transition="slide-y-reverse-transition"
              >
                <template v-slot:activator>
                  <v-btn
                    v-model="fab"
                    color="blue darken-2"
                    dark
                    fab
                  >
                    <v-icon v-if="fab">
                      mdi-close
                    </v-icon>
                    <v-icon v-else>
                      mdi-plus
                    </v-icon>
                  </v-btn>
                </template>

                <v-tooltip left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                  fab
                  dark
                  small
                  color="green"
                  v-bind="attrs"
                  v-on="on"
                  v-on:click="changeToBlog"
                >
                  <v-icon>mdi-book-account-outline</v-icon>
                </v-btn>
                </template>
                <span>Check Out Blog Updates!</span>
              </v-tooltip>

                <v-tooltip left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                  fab
                  dark
                  small
                  color="indigo"
                  v-bind="attrs"
                  v-on="on"
                  v-on:click="changeToBook"
                >
                  <v-icon >mdi-comment-bookmark</v-icon>
                </v-btn>
                </template>
                <span>Check Out Book Review Updates!</span>
              </v-tooltip>
                <v-tooltip left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                  fab
                  dark
                  small
                  color="red"
                  v-bind="attrs"
                  v-on="on"
                  v-on:click="toBlock"
                >
                  <v-icon >mdi-account-circle</v-icon>
                </v-btn>
                </template>
                <span>Manage Blocks And Follows!</span>
              </v-tooltip>
              </v-speed-dial>
        </v-container>          
    </v-main>
  </div>
</template>

<script>
//0是bookreview 1是blog
import bar from "../components/Bar.vue";
export default {
  data: () => ({
    Bookflag:true,
    fab:false,
    blogDT: [
      {
        blogID: 1,
        blogTitle: "Book1",
        content: `This is a book about Jesus and how mankind react to atheism,deeply revealling the truth of religious...Now this is testing whether my css which doesnt seem to work..`,
        authorID: "Jeff",
        personPhoto: "../assets/UpdatesA1",
        recentFinishTime: "2021-04-28",
        author:"a",
        authorImage:"https://cdn.vuetifyjs.com/images/john.jpg"
      },
      {
        blogID: 1,
        blogTitle: "Book1",
        content: `This is a book about Jesus and how mankind react to atheism,deeply revealling the truth of religious...`,
        authorID: "Jeff",
        personPhoto: "../assets/UpdatesA1",
        recentFinishTime: "2021-04-28",
        author:"a",
        authorImage:"https://cdn.vuetifyjs.com/images/john.jpg"
      },
      {
        blogID: 1,
        blogTitle: "Book1",
        content: `This is a book about Jesus and how mankind react to atheism,deeply revealling the truth of religious...`,
        authorID: "Jeff",
        personPhoto: "../assets/UpdatesA1",
        recentFinishTime: "2021-04-28",
        author:"a",
        authorImage:"https://cdn.vuetifyjs.com/images/john.jpg"
      },
      {
        blogID: 1,
        blogTitle: "Book1",
        content: `This is a book about Jesus and how mankind react to atheism,deeply revealling the truth of religious...`,
        authorID: "Jeff",
        personPhoto: "../assets/UpdatesA1",
        recentFinishTime: "2021-04-28",
        author:"a",
        authorImage:"https://cdn.vuetifyjs.com/images/john.jpg"
      },
    ],
      bookReviewDT : [
      {
        bookReviewID: 1,
        title: "BR",
        reviewTime:'2020-01-01',
        content: `This is a book about Jesus and how mankind react to atheism,deeply revealling the truth of religious...`,
        userID:'1',
        author:'aaa',
        authorImage:"https://cdn.vuetifyjs.com/images/john.jpg"
      },
      {
        bookReviewID: 1,
        title: "BR",
        reviewTime:'2020-01-01',
        content: `This is a book about Jesus and how mankind react to atheism,deeply revealling the truth of religious...`,
        userID:'1',
        author:'aaa',
        authorImage:"https://cdn.vuetifyjs.com/images/john.jpg"
      },
      {
        bookReviewID: 1,
        title: "BoR",
        reviewTime:'2020-01-01',
        content: `This is a book about Jesus and how mankind react to atheism,deeply revealling the truth of religious...`,
        userID:'1',
        author:'aaa',
        authorImage:"https://cdn.vuetifyjs.com/images/john.jpg"
      },
      {
        bookReviewID: 1,
        title: "BoR",
        reviewTime:'2020-01-01',
        content: `This is a book about Jesus and how mankind react to atheism,deeply revealling the truth of religious...`,
        userID:'1',
        author:'aaa',
        authorImage:"https://cdn.vuetifyjs.com/images/john.jpg"
      },
    ],

    blogDTUsers:[],
    bookReviewDTUsers:[],
  }),
  components: {
    bar,
  },

  created(){
    this.showUpdates;
  },
  methods:{
    changeToBook(){
      this.Bookflag=true;
    },
    changeToBlog(){
      this.Bookflag=false;
    },
    toBlock(){
        this.$router.push({path:"/updates/block"});
    },
    like(news){
      news.likes++;
      news.myLike=true;
    },
    unlike(news){
      news.likes--;
      news.myLike=false;
    },
    showUpdates(){
        this.$http({
        method: "get",
        url: "/blogDT",
      })
        .then((res) => {
          this.blogDT=res.data.blogDT;
          this.blogDTUsers=res.data.blogDTUser;
        })
        .catch((err) => {
          console.log(err);
        });
        this.$http({
        method: "get",
        url: "/bookReviewDT",
      })
        .then((res) => {
          this.bookReviewDT=res.data.bookReviewDT;
          this.bookReviewDTUsers=res.data.bookReviewDTUser;
        })
        .catch((err) => {
          console.log(err);
        });

        for(var blog in this.blogDT){
          for(var user in this.blogDTUsers){
            if (blog.authorID===user.userID){
              blog.append(author,user.username);
              blog.append(authorImage,user.headImage);
            }
          }
        }

        for(var rw in this.bookReviewDT){
          for(var user in this.bookReviewDT){
            if (rw.authorID===user.userID){
              rw.append(author,user.username);
              rw.append(authorImage,user.headImage);
            }
          }
        }
      },
  }
};
</script>

<style scoped>
.updates {
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

.box {
  display: flex;
  flex-direction: column;
}
.v-card {
  margin-bottom: 30px;
}
.middle {
    height: 445px;
    width: 300px;
    background: no-repeat center top;
    background-size: contain;
}    

.bkColor {
  background-color:transparent;
}

.textDisplay{
    overflow: hidden;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}
</style>
