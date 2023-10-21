import theme from "../../../../presets"

const EmptyImageIcon = ({
    color = theme.colors.bgBrandLight3,
    size = "66",
}: {
    color?: string;
    size?: string;
}) => {
    if (size == 'big') { size = '102'; }
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 102 102" fill="none">
            <path d="M96.2937 73.5665L81.9478 40.0625C77.0895 28.6958 68.152 28.2375 62.1478 39.0541L53.4853 54.6832C49.0853 62.6123 40.8812 63.2998 35.1978 56.1957L34.1895 54.9123C28.277 47.4873 19.9353 48.404 15.6728 56.8832L7.78949 72.6957C2.24365 83.6957 10.2645 96.6665 22.5478 96.6665H81.0312C92.9478 96.6665 100.969 84.5207 96.2937 73.5665Z" stroke={color} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
            <path opacity="0.4" d="M28.8721 32.5C36.466 32.5 42.6221 26.3439 42.6221 18.75C42.6221 11.1561 36.466 5 28.8721 5C21.2782 5 15.1221 11.1561 15.1221 18.75C15.1221 26.3439 21.2782 32.5 28.8721 32.5Z" stroke={color} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default EmptyImageIcon; 