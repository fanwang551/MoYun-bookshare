<template>
  <div class="block">
    <bar></bar>
    <v-main>
      <v-container fluid>
        <v-container class="pa-4 text-center">
          <v-row class="fill-height flex-row box" align="center" >
            <template>
                    <div>
                    <v-hover v-slot:default="{ hover }">
                    <template>
                    <v-card
                        class="mx-auto"
                        max-width="500"
                        :elevation="hover ? 12 : 2"
                        :class="{ 'on-hover': hover }"
                    >
                    <v-toolbar
                    flat
                    color="transparent"
                    >
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>
                    <v-toolbar-title>Block List</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn
                    icon
                    @click="$refs.search.focus()"
                    >
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
                    </v-toolbar>

                    <v-container class="py-0">
                    <v-row
                        align="center"
                        justify="start"
                    >
                        <v-col
                        v-for="(selection, i) in selections"
                        :key="selection.name"
                        class="shrink"
                        >
                        <v-chip
                            :disabled="loading"
                            close
                            @click:close="selected.splice(i, 1)"
                        >
                            <v-avatar left src="https://cdn.vuetifyjs.com/images/john.jpg">                                
                            </v-avatar>
                            {{ selection.name }}
                        </v-chip>
                        </v-col>

                        <v-col v-if="!allSelected" cols="12">
                        <v-text-field
                            ref="search"
                            v-model="search"
                            full-width
                            hide-details
                            label="Search"
                            single-line
                        ></v-text-field>
                        </v-col>
                    </v-row>
                    </v-container>

                    <v-divider v-if="!allSelected"></v-divider>

                    <v-list>
                    <template v-for="item in categories">
                        <v-list-item
                        v-if="!selected.includes(item)"
                        :key="item.name"
                        :disabled="loading"
                        @click="selected.push(item)"
                        >
                        <v-list-item-avatar>
                            <v-img
                            :disabled="loading"
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                            ></v-img>
                        </v-list-item-avatar>
                        <v-list-item-title v-text="item.name"></v-list-item-title>
                        </v-list-item>
                    </template>
                    </v-list>

                    <v-divider></v-divider>

                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        :disabled="!selected.length"
                        :loading="loading"
                        color="purple"
                        text
                        @click="next"
                    >Unblock</v-btn>
                    </v-card-actions>
                    </v-card>
                    </template>
                </v-hover>
                </div>
            </template>   

            <template>
                    <div>
                    <v-hover v-slot:default="{ hover }">
                    <template>
                    <v-card
                        class="mx-auto"
                        max-width="500"
                        :elevation="hover ? 12 : 2"
                        :class="{ 'on-hover': hover }"
                    >
                    <v-toolbar
                    flat
                    color="transparent"
                    >
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>
                    <v-toolbar-title>Block List</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn
                    icon
                    @click="$refs.search.focus()"
                    >
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
                    </v-toolbar>

                    <v-container class="py-0">
                    <v-row
                        align="center"
                        justify="start"
                    >
                        <v-col
                        v-for="(selection, i) in selections"
                        :key="selection.name"
                        class="shrink"
                        >
                        <v-chip
                            :disabled="loading"
                            close
                            @click:close="selected.splice(i, 1)"
                        >
                            <v-avatar left src="https://cdn.vuetifyjs.com/images/john.jpg">                                
                            </v-avatar>
                            {{ selection.name }}
                        </v-chip>
                        </v-col>

                        <v-col v-if="!allSelected" cols="12">
                        <v-text-field
                            ref="search"
                            v-model="search"
                            full-width
                            hide-details
                            label="Search"
                            single-line
                        ></v-text-field>
                        </v-col>
                    </v-row>
                    </v-container>

                    <v-divider v-if="!allSelected"></v-divider>

                    <v-list>
                    <template v-for="item in categories">
                        <v-list-item
                        v-if="!selected.includes(item)"
                        :key="item.name"
                        :disabled="loading"
                        @click="selected.push(item)"
                        >
                        <v-list-item-avatar>
                            <v-img
                            :disabled="loading"
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                            ></v-img>
                        </v-list-item-avatar>
                        <v-list-item-title v-text="item.name"></v-list-item-title>
                        </v-list-item>
                    </template>
                    </v-list>

                    <v-divider></v-divider>

                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        :disabled="!selected.length"
                        :loading="loading"
                        color="purple"
                        text
                        @click="next"
                    >Unblock</v-btn>
                    </v-card-actions>
                    </v-card>
                    </template>
                </v-hover>
                </div>
            </template>

          </v-row>
        </v-container>          
      </v-container>
    </v-main>
  </div>
</template>              


<script>
import bar from "../components/Bar.vue";
export default {
  data: () => ({
    items: [
      {
        id: 1,
        name: "Jeff",
        personPhoto: "../assets/UpdatesA1",
      },
      {
        id: 2,
        name: "Kitty",
        personPhoto: "../assets/UpdatesA2",
      },
      {
        id: 3,
        name: "Ken",
        personPhoto: "../assets/UpdatesA3",
      },],
    nonBlocks:[{
        id: 4,
        name: "Micki",
        personPhoto: "../assets/UpdatesB1",
      },
      {
        id: 5,
        name: "Kol",
        personPhoto: "../assets/UpdatesB2",
      },
      {
        id: 6,
        name: "Kathy",
        personPhoto: "../assets/UpdatesB3",
      },
    ],
    loading: false,
    search: '',
    selected: [],
    }),

    computed: {
      allSelected () {
        return this.selected.length === this.items.length
      },
      categories () {
        const search = this.search.toLowerCase()

        if (!search) return this.items

        return this.items.filter(item => {
          const text = item.text.toLowerCase()

          return text.indexOf(search) > -1
        })
      },
      selections () {
        const selections = []

        for (const selection of this.selected) {
          selections.push(selection)
        }

        return selections
      },
    },

    watch: {
      selected () {
        this.search = ''
      },
    },

    methods: {
      next () {
        this.loading = true

        setTimeout(() => {
          this.search = ''
          this.selected = []
          this.loading = false
        }, 2000)
      },
    },

  components: {
    bar,
  },
};
</script>

<style scoped>
.block{
    background:url("../assets/widthPic.jpg");
    width:100%;
    height:100%;
    background-size:100% 100%;
}
</style>