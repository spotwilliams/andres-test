import FormSection from '@/Components/FormSection';
import JetButton from '@/Components/Button';
import JetFormSection from '@/Components/FormSection';
import JetInput from '@/Components/Input';
import JetInputError from '@/Components/InputError';
import JetLabel from '@/Components/Label';
import JetActionMessage from '@/Components/ActionMessage';
import JetSecondaryButton from '@/Components/SecondaryButton';
import {useState} from "react";
import useForm from "@/Components/useForm";

export default function UpdateProfileInformationForm({user, jetstream}) {
    const {managesProfilePhotos} = jetstream;

    const [photoPreview, setPhotoPreview] = useState(null);

    const { inputs, handleChange, resetForm, clearForm } = useForm({
        photoPreview: "",
        // name: "",
        // price: 0,
        // description: "",
    });

    const updatePhotoPreview = (e) => {
        handleChange(e);
        console.log({inputs})
        return;


        const photo = photoInput.value.files[0];

        if (! photo) return;

        const reader = new FileReader();

        reader.onload = (e) => {
            photoPreview.value = e.target.result;
        };

        reader.readAsDataURL(photo);
    };
    const selectNewPhoto = () => {
        // photoInput.value.click();
    };



    const deletePhoto = (props) => {
        console.log({props})
    }

    return <FormSection title={'Profile Information'}
                        description={'Update your account\'s profile information and email address.'}
    >

        {managesProfilePhotos &&
            <div className="col-span-6 sm:col-span-4">
                <input
                    id="photoPreview"
                    name="photoPreview"
                    type="file"
                    onChange={updatePhotoPreview}
                />

                <JetLabel for="photo" value="Photo"/>


                {
                    photoPreview &&
                    <img src={user.profile_photo_url} alt="user.name" className="rounded-full h-20 w-20 object-cover"/>
                }

                {
                    photoPreview &&
                    <span
                        className="block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center"
                        style={{
                            'background-image': `url(${photoPreview})`
                        }}
                    />
                }

                <JetSecondaryButton className="mt-2 mr-2" type="button" onChange="selectNewPhoto">
                    Select A New Photo
                </JetSecondaryButton>

                {
                    user.profile_photo_path &&
                    <JetSecondaryButton
                        type="button"
                        className="mt-2"
                        onChange={deletePhoto}
                    >
                        Remove Photo
                    </JetSecondaryButton>
                }


                <JetInputError message="form.errors.photo" className="mt-2"/>
            </div>
        }

    </FormSection>
}
