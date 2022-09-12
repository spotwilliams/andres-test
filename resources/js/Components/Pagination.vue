<template>

    <Component
        v-for="link in links"
        :is="link.url? 'Link' : 'span'"
        :href="link.url"
        v-html="link.label"
        class=" rounded-full px-3 py-2 m-1"
        :class="link.url? 'text-gray-700 bg-gray-200' : 'bg-gray-100 text-gray-500'"
    />

</template>

<script>
import {Link} from "@inertiajs/inertia-vue3";
export default {
    components: {
        Link,
    },
    props: {
        links: Object
    },
    name: "Pagination"
}
</script>
