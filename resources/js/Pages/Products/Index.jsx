import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/inertia-react';
import React from "react";


function Index(props) {
    console.log({props})

    return <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">List of products</h2>}
    >
        <Head title="Dashboard"/>

    </AuthenticatedLayout>

}

export default Index;
