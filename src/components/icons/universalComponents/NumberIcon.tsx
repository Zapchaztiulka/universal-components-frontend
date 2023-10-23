const NumberIcon = ({
    size = "24",
    number = 1
}: {
    size?: string;
    number?: number;
}) => {
    return (
        <div className={`w-[59px] h-[59px] rounded-large2 bg-bgBrandLight1 flex place-content-center items-center`}>
            <div className="w-[40px] h-[40px] rounded-large2 bg-bgBrandLight2 flex place-content-center items-center">
                <div className={`font-500 text-24px text-iconBrand w-${size}px h-${size}px leading-7 font-inter`}>
                    {number}
                </div>
            </div>
        </div>
    );
};

export default NumberIcon;