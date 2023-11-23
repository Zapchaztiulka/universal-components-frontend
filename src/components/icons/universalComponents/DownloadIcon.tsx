import theme from "../../../../presets"

const DownloadIcon = ({
    color = theme.colors.iconPrimary,
    size = "24",
    className
}: {
    color?: string;
    size?: string;
    className?: string;
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
            <path d="M0 11.5801C0 14.149 1.86158 16.2239 4.99285 16.2239H19.3126C22.2435 16.2239 24 14.3961 24 12.0049C24 10.009 22.8449 8.36885 20.9833 7.58827C21.0024 3.18156 17.9379 0 14.0335 0C11.4463 0 9.60386 1.43269 8.45823 3.16179C6.29118 2.55907 3.55132 4.29806 3.50358 7.07454C1.34606 7.42031 0 9.24825 0 11.5801ZM19.3031 14.6332H4.9833C2.72076 14.6332 1.537 13.2795 1.537 11.5801C1.537 9.69284 2.69213 8.28985 4.71599 8.28985C4.84964 8.28985 4.89738 8.21076 4.89738 8.08235C4.89738 5.04897 7.00717 4.20913 8.97374 4.80197C9.08828 4.84149 9.15516 4.82173 9.21243 4.71305C10.1384 3.0037 11.5609 1.59078 14.0335 1.59078C17.1647 1.59078 19.3318 4.15973 19.4941 7.10414C19.5227 7.54881 19.4941 8.08235 19.4559 8.54676C19.4463 8.67517 19.4941 8.75417 19.6086 8.77398C21.3461 9.16917 22.463 10.2956 22.463 12.0049C22.463 13.5265 21.3938 14.6332 19.3031 14.6332Z" fill={color} />
            <path d="M14.6444 21.3223V9.96956C14.6444 8.49735 13.4702 7.2919 12.0478 7.2919C10.6157 7.2919 9.4415 8.49735 9.4415 9.96956V21.3223C9.4415 22.7946 10.6157 24 12.0478 24C13.4702 24 14.6444 22.7946 14.6444 21.3223Z" fill={theme.colors.staticWhite} />
            <path d="M12.0478 22.0931C12.2386 22.0931 12.3914 22.014 12.5919 21.8263L15.8187 18.704C15.9714 18.5657 16.0477 18.3977 16.0477 18.1803C16.0477 17.7851 15.7422 17.4886 15.3509 17.4886C15.1695 17.4886 14.9785 17.5776 14.8353 17.7258L13.3843 19.2276L12.7446 19.9193L12.8019 18.447V9.96956C12.8019 9.55457 12.4583 9.19884 12.0478 9.19884C11.6373 9.19884 11.2841 9.55457 11.2841 9.96956V18.447L11.3413 19.9292L10.7017 19.2276L9.25063 17.7258C9.10742 17.5776 8.90694 17.4886 8.72552 17.4886C8.32463 17.4886 8.0382 17.7851 8.0382 18.1803C8.0382 18.3977 8.10502 18.5657 8.26728 18.704L11.4941 21.8263C11.6946 22.014 11.8473 22.0931 12.0478 22.0931Z" fill={color} />
        </svg>
    );
};

export default DownloadIcon;