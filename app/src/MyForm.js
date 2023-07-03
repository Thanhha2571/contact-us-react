// import React from "react";
// import { ErrorIcon } from "../../images/icons/Icons";



// interface InputProps {
//   placeholder?: string;
//   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   label?: string;
//   className?: string;
//   required?: boolean;
//   name?: string;
//   errorMessage?: string | null;
//   maxWidth?: string;
//   invalid?: boolean;
//   disabled?: boolean;
//   value?: string | number;
//   type?: string;
//   customErrorWrap?:string
// }

// export default function Input({
//   label,
//   className = "",
//   errorMessage = "",
//   maxWidth,
//   invalid,
//   required,
//   customErrorWrap,
//   ...props
// }: InputProps) {
//   return (
//     <div className="w-full text-left relative" style={{ maxWidth }}>
//       {label && (
//         <div className={"text-gray-800 text-m-medium mb-[6px]"}>
//           {label} {required && <span className="text-danger">*</span>}
//         </div>
//       )}
//       <div className="relative block">
//        { errorMessage &&  <span className="absolute z-10 items-center right-[17px] top-1/2 transform -translate-y-1/2">
//           <ErrorIcon />
//         </span>}
//         <input
//           className={`
//           box-border
//           transition-all
//           w-full 
//           px-[16px] py-[13px] 
//           outline-0 
//           border
//           border-solid 
//           text-l-regular 
//           text-secondary
//           drop-shadow-s
//           placeholder:text-primary 
//           placeholder:font-normal
//           focus:text-secondary 
//           rounded-none
//           ${
//             errorMessage && errorMessage !== ""
//               ? "border-red focus:border-red placeholder:text-secondary pr-[40px]"
//               : "border-gray-400  focus:border-primary focus:placeholder:text-secondary"
//           }`}
//           {...props}
//         />
//               </div>
//         {errorMessage && (
//           <div className={`text-red text-m-regular mt-[5px] whitespace-pre-wrap ${customErrorWrap}`}>{errorMessage}</div>
//         )}
//     </div>
//   );
// }
