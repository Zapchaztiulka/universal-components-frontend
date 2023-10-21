import theme from "../../../../../presets"

const NumberListIcon = ({
    color = theme.colors.iconPrimary,
    size = "24",
}: {
    color?: string;
    size?: string;
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path d="M4.05 9.69542C4.2015 9.41335 4.45036 9.19596 4.75023 9.08373C5.0501 8.97151 5.38054 8.97211 5.68 9.08541C5.90215 9.21144 6.07997 9.40298 6.18915 9.63388C6.29833 9.86477 6.33355 10.1237 6.29 10.3754C6.22 10.8154 5.9 10.9954 5.13 11.7354C4.63 12.2054 4.24 12.6254 4 12.8854H6.33" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4.10999 16H6.26999L4.95999 17.29C5.14082 17.295 5.31879 17.3364 5.48333 17.4115C5.64788 17.4867 5.79564 17.5942 5.91784 17.7276C6.04003 17.861 6.13417 18.0175 6.19467 18.188C6.25516 18.3585 6.28078 18.5394 6.26999 18.72C6.21731 18.984 6.08082 19.2239 5.88082 19.4041C5.68083 19.5843 5.42801 19.6951 5.15999 19.72C4.97455 19.7274 4.78964 19.6956 4.61733 19.6266C4.44502 19.5577 4.28918 19.4532 4.15999 19.32" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19.54 6H9.38" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19.54 18H9.38" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19.54 12H9.38" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4.72998 3.56L5.65998 3V6.85" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default NumberListIcon;