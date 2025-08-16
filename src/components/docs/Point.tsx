
export default function Point({ pt, customStyling }: { pt: string, customStyling?: string }) {
    return (
        <p className={`text-neutral-400 mb-2 text-wrap ${customStyling}`}>{pt}</p>
    );
};