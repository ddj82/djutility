'use client';
import React, {useState} from 'react';
import {setBrandColors} from "@/util/setBrandColors";
import CommonAlert from "@/components/alert/CommonAlert";

export default function Alert() {
    const [alertOpen, setAlertOpen] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);

    const colorChangeBtn = (color: string) => {
        setBrandColors(color);
    };
    
    return (
        <div>
            <div className="title-text">공용 알림창</div>
            <div className="mb-4">
                <div className="font-bold">- 색상 교체</div>
                <div className="flex gap-2 mt-2 text-xs md:text-base">
                    <button
                        type="button"
                        className="bg-[#3b82f6] p-1"
                        onClick={() => colorChangeBtn("#3b82f6")}
                    >
                        #3b82f6
                    </button>
                    <button
                        type="button"
                        className="bg-[#00a27a] p-1"
                        onClick={() => colorChangeBtn("#00a27a")}
                    >
                        #00a27a
                    </button>
                </div>
            </div>

            <div className="flex gap-2 text-xs md:text-base">
                <div className="h-10 w-32 bg-brand-02">bg-brand-02</div>
                <div className="h-10 w-32 bg-brand-01">bg-brand-01</div>
                <div className="h-10 w-32 bg-brand">bg-brand</div>
                <div className="h-10 w-32 bg-brand-10">bg-brand-10</div>
                <div className="h-10 w-32 bg-brand-20">bg-brand-20</div>
            </div>

            <div className="mt-10">
                <div className="font-bold md:text-lg">&lt;Alert, Confirm&gt;</div>

                <div className="mt-2 text-sm md:text-base">
                    <div className="font-bold">- 속성</div>
                    <ul className="space-y-2 mt-2">
                        <li>
                            <strong>isOpen</strong> <span className="text-red-500">*</span> - 모달 표시 여부 (boolean)
                        </li>
                        <li>
                            <strong>onRequestClose</strong> <span className="text-red-500">*</span> - 모달 닫기 함수 (function)
                        </li>
                        <li>
                            <strong>content</strong> <span className="text-red-500">*</span> - 표시할 메시지 (string)
                        </li>
                        <li>
                            <strong>confirm</strong> - true일 경우 확인/취소 버튼 표시, 기본값은 false로 확인 버튼만 표시 (boolean)
                        </li>
                        <li>
                            <strong>alertResponse</strong> - Alert 모드 확인 버튼 클릭 시 콜백 (function)
                        </li>
                        <li>
                            <strong>confirmResponse</strong> - Confirm 모드 버튼 클릭 시 콜백, 확인=true, 취소=false (function)
                        </li>
                        <li>
                            <strong>zIndex</strong> - 모달의 z-index 값, 기본값은 10001 (number)
                        </li>
                    </ul>
                </div>

                <div className="mt-2 w-full flex flex-col md:flex-row gap-4">
                    <div className="md:w-1/3">
                        <div className="bg-white rounded-lg p-4 shadow-lg">
                            <div className="mb-2 whitespace-pre-line">content</div>
                            <div>
                                {/* alert 창 */}
                                <div className="flex justify-end gap-2">
                                    <button
                                        type="button"
                                        className="rounded-lg p-2 px-4 w-fit confirm-btn"
                                    >
                                        확인
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/3">
                        <div className="bg-white rounded-lg p-4 shadow-lg">
                            <div className="mb-2 whitespace-pre-line">content</div>
                            <div>
                                {/* confirm 창 */}
                                <div className="flex justify-end gap-2">
                                    <button
                                        type="button"
                                        className="rounded-lg p-2 px-4 w-fit confirm-btn"
                                    >
                                        확인
                                    </button>
                                    <button
                                        type="button"
                                        className="rounded-lg p-2 px-4 w-fit cancel-btn"
                                    >
                                        취소
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <div className="font-bold">- 실제 적용</div>
                    <div className="mt-2 flex flex-row gap-4">
                        <button
                            type="button"
                            onClick={() => setAlertOpen(true)}
                            className="p-2 px-4 rounded-lg confirm-btn"
                        >
                            Alert 오픈
                        </button>
                        <button
                            type="button"
                            onClick={() => setConfirmOpen(true)}
                            className="p-2 px-4 rounded-lg confirm-btn"
                        >
                            Confirm 오픈
                        </button>
                    </div>

                    <CommonAlert
                        isOpen={alertOpen}
                        onRequestClose={() => setAlertOpen(false)}
                        content={"예시 Alert"}
                    />
                    <CommonAlert
                        isOpen={confirmOpen}
                        onRequestClose={() => setConfirmOpen(false)}
                        content={"예시 Confirm"}
                        confirm={true}
                    />
                </div>
            </div>
        </div>
    );
};
