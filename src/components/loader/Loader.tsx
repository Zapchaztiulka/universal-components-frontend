import { BackgroundColorsType } from '../../types/colors';
import { LoaderIcon } from '../icons';
import theme from "./../../../presets";

export type Props = {
    color?: string;
    bgColor?: BackgroundColorsType;
    className?: string;
    size?: string;
};

const Loader = ({ color = theme.colors.iconBrand, size = '96', bgColor, className = '' }: Props) => {

    const backgroundClassName = bgColor ? `bg-${bgColor}` : 'bg-transparent';

    return (
        <div className={`w-screen h-screen flex justify-center items-center ${backgroundClassName} ${className}`}>
            <div>
                <LoaderIcon
                    color={color}
                    size={size}
                />
            </div>
        </div>
    );
};

export default Loader;
