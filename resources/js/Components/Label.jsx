export default function Label({value, children}) {
    return <label className="block font-medium text-sm text-gray-700">
        {
            value &&
            <span>{value}</span>

        }
        {
            !value &&
            {children}
        }
    </label>
}
