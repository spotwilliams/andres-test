const onMounted = input => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
}
export default function Input({modelValue}) {
    return <input
        ref="input"
        className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
        value={modelValue}
    />
}
