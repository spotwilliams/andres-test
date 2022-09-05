<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import Pagination from "@/Components/Pagination.vue";
defineProps({
    products: Array
});

</script>
<style scoped>

</style>

<template>
    <AppLayout title="Product list">
        <template #header>
            List of prpoducts
        </template>
        <div class="mt-6 mx-auto flex justify-center">
            <Pagination :links="products.links"/>

        </div>

        <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div class="group relative bg-white p-2" v-for="product in products.data">
                <div
                    class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-white group-hover:opacity-75 lg:aspect-none lg:h-80">
                    <img v-bind:src="product.image_url"
                         v-bind:alt="product.name"
                         class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <div>
                        <h3 class="text-sm text-gray-700">
                            <a href="#">
                                <span aria-hidden="true" class="absolute inset-0"></span>
                                {{ product.name }}

                            </a>
                        </h3>
                        <p class="mt-1 text-sm text-gray-500">{{ product.description }}</p>
                    </div>
                    <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
                </div>
            </div>

            <!-- More products... -->
        </div>
    </AppLayout>
</template>


