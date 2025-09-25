'use client';
import React from 'react';
import {setBrandColors} from "@/util/setBrandColors";

export default function Button() {
    const colorChangeBtn = (color: string) => {
        setBrandColors(color);
    };
    return (
        <div>
            <div className="title-text">공용 버튼</div>
            <div className="mb-4">
                <div>색상 교체</div>
                <div className="flex gap-2">
                    <button
                        type="button"
                        className="bg-[#3b82f6]"
                        onClick={() => colorChangeBtn("#3b82f6")}
                    >
                        #3b82f6(default)
                    </button>
                    <button
                        type="button"
                        className="bg-[#00a27a]"
                        onClick={() => colorChangeBtn("#00a27a")}
                    >
                        #00a27a
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <div className="h-20 w-48 bg-brand-02">bg-brand-02</div>
                <div className="h-20 w-48 bg-brand-01">bg-brand-01</div>
                <div className="h-20 w-48 bg-brand">bg-brand</div>
                <div className="h-20 w-48 bg-brand-10">bg-brand-10</div>
                <div className="h-20 w-48 bg-brand-20">bg-brand-20</div>
            </div>
        </div>
    );
};
