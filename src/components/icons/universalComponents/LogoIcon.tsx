const LogoIcon = ({
  color1 = "#1570EF",
  color2 = "#2E90FA",
  size = "44",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
     viewBox="0 0 44 44"
      fill="none"
    >
      <path
        d="M43.8282 16.0585C43.4655 15.2579 43.0556 14.48 42.6008 13.7288C42.4484 13.4515 42.2086 13.2335 41.9196 13.1092C41.6321 12.9861 41.3115 12.9664 41.0114 13.0535C40.2745 13.2591 39.5492 13.5053 38.8389 13.7908C38.5402 13.9095 38.2911 14.1283 38.1332 14.4104C37.9716 14.691 37.9089 15.0186 37.9552 15.3398C38.0595 16.325 38.2191 17.6633 38.2498 17.9421C37.6913 18.1838 37.139 18.4378 36.599 18.7352L34.9543 16.8764C34.7603 16.628 34.4871 16.455 34.181 16.3869C33.8757 16.3317 33.5608 16.3796 33.2851 16.5233C32.5977 16.8888 31.9472 17.3225 31.2967 17.7191C31.0359 17.8954 30.8414 18.1551 30.7444 18.4564C30.6401 18.7615 30.6401 19.0931 30.7444 19.3982C31.0635 20.371 31.5115 21.7155 31.5606 21.8766C31.2292 22.1369 30.8978 22.4033 30.5726 22.6759L28.6579 21.2322C28.4136 21.0362 28.1108 20.9295 27.7987 20.9295C27.4867 20.9295 27.1838 21.0362 26.9396 21.2322C26.3423 21.7288 25.7747 22.2605 25.2396 22.8246C25.0198 23.0522 24.8798 23.3463 24.841 23.6618C24.8023 23.9773 24.8668 24.2969 25.0249 24.5719L26.3075 26.8458C25.4815 27.8104 24.7111 28.822 24 29.8757L24.1411 30.2475L24.3743 30.8671C24.4664 31.0963 24.5523 31.3256 24.6382 31.5548C24.7241 31.7841 24.7855 31.9452 24.853 32.1744L25.0924 32.887C25.166 33.1224 25.2212 33.2835 25.2949 33.4694L25.5158 34.2005L25.6876 34.7829C25.7613 35.037 25.8226 35.2848 25.8902 35.576C25.9577 35.8673 25.9945 35.9602 26.0497 36.1523C26.1049 36.3443 26.0988 36.4001 26.1295 36.5178C27.8403 32.8896 30.2889 29.6658 33.3157 27.0565C36.3171 24.4937 39.8258 22.6073 43.6072 21.5234C43.7973 20.3281 43.908 19.1214 43.9386 17.9112V16.7587C43.9386 16.7587 43.8589 16.2011 43.8282 16.0585ZM43.5397 23.3761L43.2697 23.4504C42.9833 23.533 42.701 23.6198 42.4228 23.7106L41.6496 23.9647L41.3918 24.0762L40.9193 24.2621C40.8197 24.2922 40.7232 24.3316 40.6309 24.3798L40.2013 24.5533L39.9006 24.6896C39.7596 24.7447 39.6223 24.8089 39.4894 24.8817L39.1887 25.0242L38.7959 25.2163L38.4952 25.3836L38.1086 25.5818L37.8079 25.7553L37.4336 25.9722L37.139 26.1457L36.7708 26.3749L36.4824 26.5608L36.1141 26.8025L35.8441 26.9883L35.4575 27.2548L35.2059 27.4407L34.8193 27.7443L34.5983 27.9116L34.1565 28.2647L33.9969 28.3948L33.3832 28.9091L32.8432 29.411L32.6714 29.5783L32.2909 29.95L32.0884 30.1607L31.7447 30.5077L31.5361 30.7369C31.4256 30.8485 31.3274 30.9724 31.2231 31.0839L31.0021 31.3256C30.9106 31.4448 30.8122 31.5586 30.7076 31.6663L30.4989 31.9452L30.2166 32.2921L30.0141 32.5586L29.7441 32.9117L29.5477 33.1844L29.29 33.5499L29.0997 33.8288L28.842 34.2067L28.664 34.4793C28.5842 34.6157 28.4983 34.7396 28.4185 34.8759C28.3388 35.0122 28.3081 35.0556 28.259 35.1485L28.0012 35.576L27.8662 35.8239L27.5901 36.3381L27.4857 36.5178C27.3691 36.7471 27.2464 36.9825 27.1421 37.2242L27.0684 37.3605C26.9886 37.5464 26.8966 37.7384 26.8107 37.9367C26.7248 38.135 26.7309 38.1102 26.6941 38.197L26.4977 38.6617C26.4363 38.8228 26.4179 38.8599 26.375 38.9653L26.2031 39.3804L26.0865 39.7088C26.0497 39.8017 26.019 39.9071 25.9761 40C26.3688 39.9071 26.7493 39.8017 27.1421 39.684L28.1608 39.3804C28.3081 39.3246 28.4615 39.2813 28.6088 39.2131L29.2225 38.9715L29.6705 38.7856L30.0509 38.6183L30.5787 38.3828L30.9531 38.2032L31.3581 37.9987H31.401L31.6158 37.8872L32.0454 37.6579L32.5793 37.3481L33.1194 37.0321C33.5551 36.7533 34.0092 36.4497 34.4633 36.1337L34.899 35.8053L35.12 35.6442L35.5987 35.2724L36.0221 34.9193C35.93 34.7767 35.8441 34.6342 35.7643 34.4855C35.5991 34.129 35.5013 33.7445 35.4759 33.3517V32.9737C35.5103 32.386 35.7098 31.8204 36.051 31.343C36.3923 30.8657 36.8612 30.4964 37.4029 30.2784C38.1143 29.9931 38.9068 29.9931 39.6183 30.2784C39.8062 30.3573 39.9869 30.4527 40.1583 30.5635L40.3118 30.359L40.6063 29.95L40.8457 29.6093C40.9561 29.4668 41.0482 29.318 41.1464 29.1631L41.2016 29.0764L41.2752 28.9587L41.668 28.3391C41.7723 28.178 41.8705 28.0107 41.9626 27.8434C42.0546 27.6761 42.3001 27.2238 42.4597 26.9326C42.521 26.8211 42.5824 26.7095 42.6315 26.598C42.7726 26.3192 42.9138 26.0342 43.0427 25.7491C43.1715 25.4641 43.1899 25.4393 43.2513 25.2906L43.4845 24.7392L43.6993 24.1753C43.7201 24.0805 43.7531 23.9889 43.7975 23.9027C43.7975 23.8098 43.8834 23.6611 43.9264 23.5495L44 23.3946L43.5397 23.3761Z"
        fill={color1}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7838 38.7611C16.704 38.4697 16.6242 38.1719 16.532 37.8677C16.4399 37.5635 16.3662 37.3481 16.2803 37.0566C16.256 36.9677 16.2252 36.8809 16.1881 36.7968L16.01 36.3216C15.9911 36.2141 15.9491 36.1124 15.8872 36.0238C15.8442 35.9287 15.7828 35.7196 15.7214 35.5676C15.66 35.4155 15.6354 35.3585 15.5863 35.2571C15.5372 35.1557 15.4696 34.9656 15.4021 34.8198C15.3345 34.6741 15.31 34.6107 15.267 34.503L15.0766 34.0912L14.9169 33.7743L14.7388 33.3625L14.3581 32.6845L14.1738 32.355L13.9528 31.9558L13.7747 31.6643L13.5106 31.2841L13.3325 31.0053C13.2527 30.8722 13.1544 30.7392 13.0746 30.6061L12.8965 30.34L12.6078 29.9281C12.5471 29.852 12.4917 29.7715 12.442 29.6873L12.092 29.2247L11.9692 29.0093C11.7972 28.7938 11.6375 28.5847 11.4656 28.3756L10.9927 27.8054L10.8208 27.6279L10.44 27.2224L10.2373 27.007C10.1329 26.8866 10.0163 26.7662 9.89958 26.6521L9.6785 26.4303L9.34687 26.1008L9.10737 25.8727L8.78802 25.5369L8.59765 25.3278C8.48711 25.2201 8.37042 25.1187 8.25374 25.0236L7.98353 24.8019L7.63348 24.5231L7.36941 24.3139L7.01322 24.0415C6.92111 23.9781 6.83513 23.9021 6.74301 23.845C6.65089 23.788 6.49737 23.6613 6.37454 23.5789L6.14118 23.3825L5.75428 23.129L5.49021 22.9516L4.79626 22.5017L4.29882 22.2166L4.12687 22.1215C3.90579 21.9885 3.67242 21.8681 3.43906 21.7477L3.31009 21.697L2.74511 21.4118L2.45647 21.2914L2.00817 21.0823L1.72567 20.9493L1.31421 20.7782L0.994871 20.6515L0.712377 20.5437C0.804494 20.9493 0.902753 21.3548 1.01944 21.7667C1.06242 21.9441 1.11155 22.0898 1.15454 22.2419L1.32649 22.8122C1.38177 23.0023 1.42475 23.129 1.48617 23.2874C1.54758 23.4458 1.65198 23.75 1.72567 23.9781L1.90377 24.447L2.06958 24.8462L2.2968 25.3975C2.35207 25.5369 2.41348 25.6636 2.46875 25.7967L2.67141 26.2212C2.70212 26.2973 2.73897 26.3733 2.77581 26.4493C2.86179 26.6204 2.9232 26.7535 3.00304 26.8992L3.30395 27.4695C3.40221 27.666 3.50661 27.856 3.61101 28.0335C3.88122 28.5024 4.16986 28.9839 4.4892 29.4528L4.79626 29.9154L4.94979 30.1562L5.31212 30.6504L5.64374 31.0877C5.77474 30.9877 5.91456 30.9008 6.06134 30.8279C6.42413 30.687 6.81 30.6203 7.19746 30.6314H7.56593C7.94629 30.6613 8.31748 30.7667 8.65906 30.9419C9.00896 31.1126 9.32218 31.354 9.58024 31.6516C9.84479 31.9444 10.0532 32.2863 10.1944 32.6591C10.4585 33.4103 10.4585 34.2334 10.1944 34.9846C10.1208 35.1797 10.0282 35.3665 9.918 35.5422L10.1207 35.7133L10.5137 36.0174L10.8453 36.2772L11.2752 36.5814L11.3612 36.6511L11.4779 36.7335L12.092 37.1453L12.5771 37.4558C12.8658 37.6333 13.1912 37.8107 13.4615 37.9754L13.7808 38.1592L14.6099 38.5901L15.0582 38.8118H15.1012L15.6293 39.0526L16.1759 39.2934L16.4338 39.3948L16.7838 39.5342L16.9312 39.5912L16.79 39.0146L16.7838 38.7611ZM24.6384 40.5924C24.6457 40.5055 24.6309 40.4181 24.5954 40.3389C24.579 40.0777 24.5378 39.8188 24.4726 39.5659C23.9497 36.6014 23.0559 33.7195 21.8135 30.9926L21.8687 31.0813L23.7111 29.1297C23.925 28.8968 24.0606 28.5991 24.098 28.2806C24.1454 27.9639 24.0937 27.6399 23.9506 27.3555C23.54 26.675 23.0952 26.0173 22.618 25.3848C22.4332 25.1243 22.1696 24.9348 21.8687 24.8462C21.5708 24.7582 21.2529 24.776 20.966 24.8969L18.8596 25.7713C18.7736 25.6383 18.6876 25.5052 18.5893 25.3785L18.3805 25.0807C18.2884 24.9476 18.1963 24.8145 18.098 24.6941C17.9998 24.5737 17.9507 24.4914 17.8708 24.3963L17.5945 24.0288L18.9517 21.7794C19.1199 21.5014 19.1954 21.1743 19.1666 20.8479C19.1418 20.5221 19.0121 20.2143 18.7981 19.9735C18.2753 19.3833 17.724 18.8208 17.1462 18.2879C16.9153 18.0737 16.6209 17.9464 16.311 17.9268C15.9994 17.9024 15.6892 17.9897 15.4328 18.1739L13.4615 19.5996L13.3509 19.4982L13.0254 19.2194L12.7368 18.9533L12.4052 18.6808L12.2824 18.5858C12.4482 18.1612 12.8535 17.065 13.1605 16.2223C13.2858 15.9129 13.3053 15.5687 13.2158 15.2464C13.1239 14.9356 12.939 14.6628 12.6877 14.467C12.0648 13.9943 11.4192 13.5544 10.7532 13.1491C10.4835 12.9901 10.1704 12.9277 9.86273 12.9716C9.5542 13.01 9.26901 13.1606 9.05824 13.3962L7.36941 15.2464L7.07464 15.0817L6.6509 14.8599L6.32541 14.6952L5.92624 14.4924L5.68059 14.391C5.72358 14.0615 5.91395 12.7689 6.04292 11.7677C6.08409 11.4366 6.0194 11.1006 5.85868 10.8109C5.71038 10.5262 5.47194 10.3025 5.18315 10.1772C4.4768 9.86632 3.75526 9.59349 3.02146 9.35983C2.72962 9.25199 2.41055 9.25199 2.11871 9.35983C1.82077 9.48018 1.57307 9.70437 1.41861 9.99348C0.853624 10.9503 0.0859766 12.2873 0.0614119 12.3253C0.0614119 12.959 1.5198e-07 13.5926 1.5198e-07 14.2263C-0.000127283 15.466 0.0798856 16.7044 0.239506 17.9331H0.3132L0.700094 18.0598L1.1484 18.2182L1.52915 18.364L1.96518 18.5224L2.34593 18.6808L2.76967 18.8646C2.89864 18.9153 3.01532 18.9723 3.13814 19.0293L3.55574 19.2131L3.92421 19.4032L4.34181 19.6059L4.698 19.7897L5.10332 20.0115L5.45951 20.2142L5.85254 20.4424L6.20259 20.6515L6.59562 20.8986L6.93339 21.1204L7.31414 21.3675L8.02038 21.8744L8.34586 22.1152L8.70819 22.394L9.02139 22.6475L9.37758 22.9389L9.69692 23.1987C9.8136 23.2938 9.918 23.4015 10.0408 23.4965L10.3417 23.7753L10.6734 24.0858L10.9743 24.371L11.2998 24.6941C11.398 24.7829 11.4901 24.8842 11.5823 24.9793L11.9077 25.3151L12.1841 25.6129L12.4973 25.9614L12.7552 26.2656L13.0561 26.6204L13.3202 26.9373L13.6088 27.3048L13.8606 27.6279L14.137 28.0145L14.3765 28.3376L14.6467 28.7241L14.8801 29.06C14.966 29.193 15.0459 29.3261 15.138 29.4592C15.219 29.5734 15.2908 29.6942 15.3529 29.8204C15.4205 29.9408 15.5188 30.0865 15.5986 30.2259C15.6622 30.3471 15.734 30.4636 15.8135 30.5744L16.0469 30.9989L16.2434 31.3475C16.3232 31.4932 16.3969 31.6389 16.4706 31.7847C16.5443 31.9304 16.5996 32.0255 16.6549 32.1458C16.7101 32.2662 16.8084 32.4373 16.876 32.5831L17.0479 32.9506C17.1032 33.071 17.1953 33.2611 17.2628 33.4131C17.3304 33.5652 17.3734 33.6476 17.4164 33.7743C17.4594 33.9011 17.5576 34.0912 17.619 34.2496L17.7726 34.6107C17.834 34.7818 17.8954 34.9529 17.9629 35.124L18.0919 35.4598C18.1656 35.6499 18.227 35.8464 18.2884 36.0365C18.3267 36.1294 18.3595 36.2246 18.3867 36.3216C18.4911 36.6194 18.5832 36.9109 18.6692 37.2024C18.7552 37.4939 18.835 37.836 18.9148 38.1021C18.9263 38.2003 18.9511 38.2963 18.9885 38.3873C18.9885 38.4887 19.0929 38.8118 19.1359 39.0209C19.1789 39.23 19.1912 39.2364 19.2157 39.3378C19.2403 39.4392 19.3017 39.756 19.3386 39.9714C19.3754 40.1869 19.3877 40.1742 19.4 40.2756V40.4086L20.3703 40.6367L20.7265 40.7128H20.794L21.2485 40.8015L21.6292 40.8585L22.053 40.9219L22.4767 40.9789L22.9066 41.0296C23.0509 41.0233 23.1953 41.0361 23.3365 41.0676H23.6865L24.7121 41.207V41.1437C24.6875 40.9599 24.6568 40.7888 24.6384 40.5924ZM27.2177 4.36668C26.7936 3.93397 26.3143 3.56303 25.7929 3.26413C25.7445 3.23302 25.69 3.21353 25.6333 3.2071C25.577 3.20586 25.5216 3.22126 25.4736 3.25146C25.424 3.28372 25.382 3.32702 25.3508 3.37819C25.3244 3.43126 25.3098 3.48967 25.3078 3.54927V8.61846C25.3022 8.80536 25.23 8.98357 25.1051 9.11905C24.9833 9.25175 24.8155 9.32922 24.6384 9.33449H21.2178C21.039 9.32884 20.8694 9.25157 20.7449 9.11905C20.6213 8.98779 20.5491 8.81401 20.5422 8.63114V3.56194C20.5369 3.50126 20.518 3.44269 20.487 3.39086C20.4573 3.34005 20.4148 3.29845 20.3641 3.27047C20.3178 3.23416 20.2624 3.21219 20.2045 3.2071C20.1472 3.20694 20.0905 3.21993 20.0387 3.24512C19.51 3.56728 19.0213 3.95453 18.5832 4.39836C17.97 5.03713 17.4967 5.80421 17.1953 6.64781C16.8887 7.48869 16.7589 8.38722 16.8145 9.28379C16.8574 10.1793 17.0831 11.0554 17.4768 11.8547C17.8704 12.654 18.4233 13.3585 19.0991 13.9221C19.4692 14.251 19.8828 14.5241 20.3273 14.7332H25.5043C25.9437 14.5146 26.3561 14.2423 26.7325 13.9221C27.4047 13.3564 27.953 12.6502 28.3415 11.8501C28.7286 11.0441 28.9503 10.1643 28.9926 9.26589C29.0348 8.36744 28.8968 7.46967 28.5872 6.6288C28.2793 5.7893 27.802 5.02687 27.187 4.39202L27.2177 4.36668ZM24.0059 15.8801H21.8257C21.6762 15.887 21.5342 15.9501 21.4266 16.0575C21.3256 16.1721 21.2688 16.3209 21.2669 16.4757V19.3842C21.2688 19.539 21.3256 19.6878 21.4266 19.8024C21.5342 19.9097 21.6762 19.9728 21.8257 19.9798H24.0059C24.1554 19.9728 24.2974 19.9097 24.405 19.8024C24.506 19.6878 24.5628 19.539 24.5647 19.3842V16.5137C24.5724 16.3519 24.5196 16.1931 24.4173 16.0702C24.3639 16.0133 24.3017 15.9662 24.2331 15.9308C24.1612 15.8991 24.084 15.8819 24.0059 15.8801Z"
        fill={color2}
      />
    </svg>
  );
};

export default LogoIcon;