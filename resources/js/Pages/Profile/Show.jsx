import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import UpdateProfileInformationForm from '@/Pages/Profile/Partials/UpdateProfileInformationForm';
import DeleteUserForm from '@/Pages/Profile/Partials/DeleteUserForm';
import JetSectionBorder from '@/Components/SectionBorder';
import LogoutOtherBrowserSessionsForm from '@/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm';
import TwoFactorAuthenticationForm from '@/Pages/Profile/Partials/TwoFactorAuthenticationForm';
import UpdatePasswordForm from '@/Pages/Profile/Partials/UpdatePasswordForm';
import {Fragment} from "react";
export default function Show({auth, jetstream, sessions}) {

    const {
        canUpdateProfileInformation,
        canUpdatePassword,
        canManageTwoFactorAuthentication,
        hasAccountDeletionFeatures
    } = jetstream;

    return <AuthenticatedLayout
        auth={auth}
    >
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">{auth.user.name}'s profile</div>
                    <div className="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">

                        {
                            canUpdateProfileInformation
                            &&
                            <Fragment>
                                <UpdateProfileInformationForm user={auth.user} jetstream={jetstream}/>
                                <JetSectionBorder/>
                            </Fragment>
                        }

                        {
                            canUpdatePassword
                            &&
                            <UpdatePasswordForm class="mt-10 sm:mt-0"/>
                            &&

                            <JetSectionBorder/>
                        }


                        {
                            canManageTwoFactorAuthentication
                            &&
                            <TwoFactorAuthenticationForm
                                requires-confirmation="confirmsTwoFactorAuthentication"
                                class="mt-10 sm:mt-0"
                            />
                            &&
                            <JetSectionBorder/>

                        }

                        <LogoutOtherBrowserSessionsForm sessions={sessions} class="mt-10 sm:mt-0"/>

                        {
                            hasAccountDeletionFeatures
                            &&
                            <JetSectionBorder/>
                            &&

                            <DeleteUserForm class="mt-10 sm:mt-0"/>
                        }

                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>

}
