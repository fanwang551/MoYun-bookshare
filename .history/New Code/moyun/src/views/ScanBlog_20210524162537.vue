<template>
    <div class="ScanBlog">
        <v-app>
        <bar></bar>
        <v-container>
            <v-speed-dial
                absolute
                fixed
                v-model="fab"
                :direction="direction"
                :open-on-hover="hover"
                :transition="transition"
                    >
                    <v-btn
                        fab
                        dark
                        small
                        color="green"
                    >
                    <v-icon>mdi-message-text</v-icon>
                    </v-btn>
                    <v-btn
                        fab
                        dark
                        small
                        color="teal"
                    >
                    <v-icon>mdi-share-variant</v-icon>
                    </v-btn>
                    <v-btn
                        fab
                        dark
                        small
                        color="indigo"
                    >
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                    <v-btn
                        fab
                        dark
                        small
                        color="pink"
                    >
                    <v-icon>mdi-heart</v-icon>                    
                    </v-btn>                
            </v-speed-dial>
            <template>
            <v-card
                :loading="loading"
                class="mx-auto my-12"
                width="1400"
                min-height="1000"
                center
                elevation="24"
            >   
            <v-row>
                <v-card-title class="text-h1 text-center">{{title}}</v-card-title>
                <v-btn
                    color="primary"
                    dark
                    @click.stop="dialog = true"
                    >
                    Open Dialog
                    </v-btn>

                    <v-dialog
                    v-model="dialog"
                    max-width="290"
                    >
                    <v-card>
                        <v-card-title class="headline">Use Google's location service?</v-card-title>

                        <v-card-text>
                        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
                        </v-card-text>

                        <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn
                            color="green darken-1"
                            text
                            @click="dialog = false"
                        >
                            Disagree
                        </v-btn>

                        <v-btn
                            color="green darken-1"
                            text
                            @click="dialog = false"
                        >
                            Agree
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>


                <v-btn
                    color="blue darken-3"
                    text
                    @click.stop="dialog1 = true"
                >
                    发表日志
                </v-btn>

                <v-dialog
                    v-model="dialog"
                    width="1200px"
                    height="3000px"
                >
                    <v-card>
                        <v-container>
                        <v-card-title class="headline" center> Post Blog</v-card-title>
                        <v-snackbar
                        v-model="snackbar"
                        absolute
                        top
                        center
                        color="success"
                        >
                        <span>Blog Post successful!</span>
                        <v-icon dark>mdi-checkbox-marked-circle</v-icon>
                        </v-snackbar>
                            <v-form ref="form" @submit.prevent="submit">
                            <v-container fluid>
                                <v-row>
                                <v-col cols="12" sm="6">
                                    <v-text-field
                                    v-model="form.first"
                                    :rules="rules.name1"
                                    color="purple darken-2"
                                    label="First name"
                                    required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea
                                    v-model="form.bio"
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
                            >Post</v-btn>
                        </v-card-actions>
                        </v-form> 
                        </v-container>
                    </v-card>
                </v-dialog>  


            </v-row>
                <br>
                <br>
                <br>
                <v-card-text right>
                <v-row
                align="center"
                class="mx-0">
                <div class="my-4 subtitle-1 ">{{author}}</div> 
                <v-spacer></v-spacer>   
                <div class="my-4 subtitle-1 ">{{date}}</div>
                <v-spacer></v-spacer>  
                <div v-if="trans">原创</div>
                <div v-else>转载</div>
                </v-row>
                </v-card-text>
                <v-divider class="mx-4"></v-divider>
                <v-card-title>Content</v-card-title>
                <v-card-text>
                    <div>{{content}}</div>
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
        bio: '',
      })
    
    return{
        form: Object.assign({}, defaultForm),
        rules: {
          name1: [val => (val || '').length > 0 || 'This field is required'],
        },
        conditions: false,
        snackbar: false,
        terms: false,
        defaultForm,
        dialog1: false,
        dialog: false,
        trans: false,
        direction: 'bottom',
        fab: false,
        fling: false,
        hover: false,
        tabs: null,
        transition: 'slide-y-reverse-transition',
        title:"Blog4Test",
        date:"2020-12-25",
        author:"Jackson",
        content:"This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.vThis is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.vThis is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.vThis is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.vThis is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.vThis is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.vThis is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.vThis is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.vThis is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.vThis is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.vThis is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.vThis is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.vThis is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.vThis is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.vThis is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.vThis is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.vThis is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.vThis is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.This is a test blog 4 testing vue pages.",
        }
    },
    components:{
        bar,
    },
    computed: {
      formIsValid () {
        return (
          this.form.first &&
          this.form.bio
        )
      },
      activeFab () {
        switch (this.tabs) {
          case 'one': return { class: 'purple', icon: 'account_circle' }
          case 'two': return { class: 'red', icon: 'edit' }
          case 'three': return { class: 'green', icon: 'keyboard_arrow_up' }
          default: return {}
        }
      },
    },

    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      resetForm () {
        this.form = Object.assign({}, this.defaultForm)
        this.$refs.form.reset()
      },
      submit () {
        this.snackbar = true
        this.resetForm()
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
</style>