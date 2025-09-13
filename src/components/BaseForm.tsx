import React from "react";

const BaseForm = ({children,className,hs}:{hs?:string,children: React.ReactNode,className?:string}) => {
    return (
        <div className={`w-full ${hs? hs :"h-[58vw]"} flex items-center justify-center
         bg-[url("/forms/modlepicture.avif")]
        bg-cover bg-center`}>
            <div className="relative w-[55%] h-[95%] rounded-2xl flex items-center
             justify-center bg-[rgba(255,255,255,0.15)] backdrop-blur-xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                <div className={`w-[90%] h-[90%] rounded-2xl bg-[rgba(255,255,255,0.1)] backdrop-blur-md
                 border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] ${className}`} >
                    {children}
                </div>
            </div>
        </div>
    );
};

export default BaseForm;
