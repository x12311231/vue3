<template>
<div>
    <ul>
        <li v-for="item of items">
            <slot name="item" v-bind="item"></slot>
        </li>
    </ul>
    <button @click="getLists">next</button>
</div>
</template>

<script>
export default {
    name: "FancyListDemo",
    data() {
        return {
            items: [],
            page: 1
        }
    },
    props: {
        url: {type: String, required: true},
        limit: {type: Number, required: true}
    },
    methods: {
        getLists() {
            let authors = ['bob', 'john', 'mike', 'rose', 'daisy', 'jobs', 'jason']
            let titles = [
                'You may be wondering what would be a good use case for scoped slots',
                'Here is an example: imagine a <FancyList> component that',
                'agination or infinite scrolling. However, we want it t',
                'gic and do not render anything by t',
                'e discussed above encapsulates both reusable logic ',
                ' logic and do not render anything by themselves - visual outpu'
            ]
            let data = [];
            for (let i = 0; i < this.limit; i++) {
                data.push({author: authors[Math.floor(Math.random() * authors.length)], title: titles[Math.floor(Math.random() * titles.length)]})
            }
            this.items = data;
            this.page++
        }
    },
    mounted() {
        this.getLists()
    }
}
</script>

<style scoped>

</style>