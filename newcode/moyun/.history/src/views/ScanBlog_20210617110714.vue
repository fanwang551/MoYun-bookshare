<template>
    <div class="ScanBlog">
        <v-app>
        <bar></bar>
        <v-container>
            <template>
            <v-card
                class="mx-auto my-12"
                width="1400"
                min-height="1000"
                center
                elevation="24"
            >  
            <v-card-title class="text-h2" 
            text-align="center"
            :headStyle="{ 'text-align': 'center' }" 
            jusify="center" 
            >
            <span
            text-align="center"
            :headStyle="{ 'text-align': 'center' }" 
            >{{this.blog.blogTitle}}</span>
            </v-card-title> 
            
            <v-row justify="center" style="margin-top:20px">
            <v-snackbar
              v-model="snackbar1"
              absolute
              top
              center
              color="success"
              timeout="1000"
              >
              <span>ReTweet successful!</span>
              <v-icon dark>mdi-checkbox-marked-circle</v-icon>
              </v-snackbar>    
                <v-btn
                    fab
                    color="purple lighten-2"
                    dark
                    @click.stop="dialog = true"
                    class="button lxtBtn"
                    style="margin-left:40px"
                    >
                    <v-icon>mdi-share-variant</v-icon>
                    </v-btn>

                    <v-dialog
                    v-model="dialog"
                    max-width="290"
                    >
                    <v-card>
                        <v-card-title class="headline">是否确定转载?</v-card-title>
                        <v-card-text>
                        该日志将被转载到您的动态
                        </v-card-text>

                        <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn
                            color="green darken-1"
                            text
                            @click="cancelpost"
                        >
                            No
                        </v-btn>

                        <v-btn
                            color="green darken-1"
                            text
                            @click="post"
                        >
                            Yes
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>

                <v-btn
                    fab
                    color="blue"
                    @click.stop="dialog1 = true"
                    dark
                    class="button"
                >
                <v-icon>mdi-message-text</v-icon>
                </v-btn>

                <v-dialog
                    v-model="dialog1"
                    width="1200px"
                    height="3000px"
                >
                    <v-card>
                        <v-container>
                        <v-card-title class="headline" center> Post Comment</v-card-title>
                        <v-snackbar
                        v-model="snackbar2"
                        absolute
                        top
                        center
                        color="success"
                        vertical
                        timeout="1000"
                        >
                        <span>Comment Post successful!</span>
                        <v-icon dark>mdi-checkbox-marked-circle</v-icon>
                        </v-snackbar>
                            <v-form ref="form" @submit.prevent="submit">
                            <v-container fluid>
                                <v-row>
                                <v-col cols="12">
                                    <v-textarea
                                    v-model="form.content"
                                    color="teal"
                                    >
                                    <template v-slot:label>
                                        <div>
                                        Content
                                        </div>
                                    </template>
                                    </v-textarea>
                                </v-col>
                                </v-row>
                            </v-container>
                            <v-card-actions>
                            <v-btn text @click="resetForm">Clear</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                            :disabled="!formIsValid"
                            text
                            color="primary"
                            type="submit"
                            @click="postComment"
                            >Post</v-btn>
                        </v-card-actions>
                        </v-form> 
                        </v-container>
                    </v-card>
                </v-dialog>  
                <v-btn
                        fab
                        dark
                        v-if="isCollect===1"
                        color="indigo"
                        style="space around"
                        v-on:click="collect"
                        class="button"
                    >
                        <v-icon>mdi-star</v-icon>
                    </v-btn>
                  <v-btn
                        fab
                        dark
                        v-else
                        color="grey"
                        style="space around"
                        v-on:click="collect"
                        class="button"
                    >
                        <v-icon>mdi-star</v-icon>
                    </v-btn>  

                    <v-btn
                        color="pink"
                        v-if="this.like"
                        fab
                        dark
                        v-on:click="likeBlog"
                        class="button"
                    >
                    <v-icon>mdi-heart</v-icon>                    
                    </v-btn> 
                    <v-btn
                        color="grey"
                        v-else
                        fab
                        dark
                        v-on:click="likeBlog"
                        class="button"
                    >
                    <v-icon>mdi-heart</v-icon>                    
                    </v-btn>
            </v-row>
                <br>
                <br>
                <br>
                <v-card-text right>
                <v-row
                align="center"
                class="mx-0">
                <div class="my-4 subtitle-1 ">{{this.blog.author}}</div> 
                <v-spacer></v-spacer>   
                <div class="my-4 subtitle-1 ">{{this.blog.recentFinishTime}}</div>
                <v-spacer></v-spacer>  
                <div v-if="this.blog.isReprint===1">转载</div>
                <div v-else>原创</div>
                </v-row>
                </v-card-text>
                <v-divider class="mx-4"></v-divider>
                <v-card-title>Content</v-card-title>
                <v-card-text>
                    <div>{{this.blog.content}}</div>
                </v-card-text>                                   
                </v-card>
            </template>           
        </v-container>
        
        </v-app>
        </div>
</template>

<script>
import bar from "../components/Bar.vue"
export default({
    data() {
    
    const defaultForm = Object.freeze({
        first: '',
        content: '',
      })
    
    return{
        form: Object.assign({}, defaultForm),
        rules: {
          name1: [val => (val || '').length > 0 || 'This field is required'],
        },
        like: false,
        isCollect:false,
        alert1: false,
        conditions: false,
        snackbar1: false,
        snackbar2: false,
        terms: false,
        defaultForm,
        dialog1: false,
        dialog: false,
        trans: false,
        bio:'',
        direction: 'bottom',
        fab: false,
        fling: false,
        hover: false,
        tabs: null,
        transition: 'slide-y-reverse-transition',
        //backend content
        blog:[],
      }
    },
    components:{
        bar,
    },
    computed: {
      formIsValid () {
        return (
          this.form.content
        )
      },
    },

    created:function (){
      this.show1();
    },

    methods: {
      show1(){
        this.$http({
        method: "get",
        url: "/inspectBlog",
        params:{
          BlogID: this.$route.params.id,
        }
          }).then((res) => {
            console.log(res.data);
            if (res.data.success) {
              this.blog=res.data.blogInfo;
              this.isCollect=res.data.isCollect;
            }
          }).catch(err=>{
            console.log(err)
          });
      },
      resetForm () {
        this.form = Object.assign({}, this.defaultForm)
        this.$refs.form.reset()
      },
      submit () {
        this.snackbar2 = true
        this.resetForm()
      },
      postComment(){
        var a=this.blog.blogID;
        console.log(a);
        console.log(this.blog);
        console.log(this.form.content);
        this.$http({
        method: "post",
        url: "/WriteBlogComment",
        data: {
          BlogID: this.blog.blogID,
          Comment: this.form.content,

        },
          }).then((res) => {
            console.log(res.data);
            if (res.data.success) {
              this.dialog1=false;
              this.snackbar2=true;
              this.submit();
            }
            else{
              alert("评论失败！")
            }
          }).catch(err=>{
            console.log(err)
          });

      },
      post(){
        //this.alert1=true
        console.log(this.blog);
        console.log(this.blog.blogID);
        this.$http({
        method: "post",
        url: "/ReprintBlog",
        data: {
          BlogID: this.blog.blogID,

        },
          }).then((res) => {
            
            if (res.data.success) {
              this.dialog=false;
              this.snackbar1=true;
            }
            else{
              alert("转载失败！")
            }
          }).catch(err=>{
            console.log(err)
          });

      },
      cancelpost(){
        this.dialog=false
      },
      collect(){
        if(!this.isCollect){
          this.$http({
          method: "post",
          url: "/CollectBlog",
          data: {
            BlogID: this.blog.blogID,

          },
            }).then((res) => {
              alert("收藏");
              if (res.data.success) {
                this.blog.isCollect=0;
              }
              else{
                alert("收藏失败！");
              }
            }).catch(err=>{
              console.log(err)
            });
        }
        else{
          this.$http({
          method: "post",
          url: "/CancelCollectBlog",
          data: {
            BlogID: this.blog.blogID,

          },
            }).then((res) => {
              alert("收藏");
              if (res.data.success) {
                this.blog.isCollect=1;
              }
              else{
                alert("取消收藏失败！")
              }
            }).catch(err=>{
              console.log(err)
            });
        }
      },

      likeBlog(){
        this.like=!this.like;
       /*if(this.blog.like){
          this.$http({
          method: "post",
          url: "/LikeBlog",
          data: {
            blogID: this.blog.blogId,

          },
            }).then((res) => {
              if (res.data.success) {
                this.blog.like=!this.blog.like;
              }
              else{
                alert("点赞失败！")
              }
            }).catch(err=>{
              console.log(err)
            });
       }
       else {
          this.$http({
          method: "post",
          url: "/CancelLikeBlog",
          data: {
            blogID: this.blog.blogId,

          },
            }).then((res) => {
              if (res.data.success) {
                this.blog.like=!this.blog.like;
              }
              else{
                alert("取消点赞失败！")
              }
            }).catch(err=>{
              console.log(err)
            });
       }*/
      },
    },
})
</script>

<style scope>
.ScanBlog{
    background:url("../assets/widthPic.jpg");
    width:100%;
    height:100%;
    background-size:100% 100%;};

  .v-speed-dial {
    position: absolute;
  }
  .v-btn--floating {
    position: relative;
  }  
  .button{
    margin-right: 25px;

  }
  .lxtBtn{
    box-shadow:  18px 18px 36px rgba(0, 0, 0, 0.1),
             -18px -18px 36px #ffffff;
    transition: box-shadow 0.2s ease-out;         
		background-color: #efeeee;
		position: relative;  
    outline: none;
		border: none;   
  }
</style>