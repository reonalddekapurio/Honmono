'use clinet'

interface TextFormProps {
    label: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    readOnly?: boolean
}

export function TextForm ({label, type, placeholder, value, onChange, readOnly}: TextFormProps) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-black text-sm">{label}</label>
            <input 
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            readOnly={readOnly}
            className="w-full h-10 bg-white border-b border-gray p-2"
            />
        </div>
    )
}