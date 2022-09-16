import SectionTitle from "@/Components/SectionTitle";

export default function FormSection({title, description, actions, children}) {
    const hasActions = true;
    let style = 'px-4 py-5 bg-white sm:p-6 shadow'
    style.concat(hasActions ? 'sm:rounded-tl-md sm:rounded-tr-md' : 'sm:rounded-md')


    return <div className="md:grid md:grid-cols-3 md:gap-6">
        <SectionTitle title={title} description={description}/>
        <div className="mt-5 md:mt-0 md:col-span-2">
            <form>
                {/*submit.prevent="$emit('submitted')"*/}
                <div
                    className={style}
                >
                    <div className="grid grid-cols-6 gap-6">
                        {children}
                    </div>
                </div>

                {
                    hasActions
                    &&
                    <div
                        className="flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md">
                        {actions}
                    </div>

                }
            </form>
        </div>
    </div>;
}


// <script setup>
// import { computed, useSlots } from 'vue';
// import JetSectionTitle from './SectionTitle.vue';
//
// defineEmits(['submitted']);
//
// const hasActions = computed(() => !! useSlots().actions);
// </script>

