'use client';
import React from 'react';
import CardList from "@/components/list/CardList";

const cardSample = [
    {
        tag: "태그1",
        title: "제목1",
        content: "내용1"
    },
    {
        tag: "태그2",
        title: "제목2",
        content: "내용2"
    },
    {
        tag: "태그3",
        title: "제목3",
        content: "내용3"
    },
    {
        tag: "태그4",
        title: "제목4",
        content: "내용4"
    },
    {
        tag: "태그5",
        title: "제목5",
        content: "내용5"
    },
];

export default function List() {


    return (
        <div>
            <div className="title-text mb-10">리스트</div>
            <div className="mb-4">
                <div className="font-bold">&lt;카드 형식&gt;</div>
                <div className="mt-2 grid grid-cols-4 gap-4">
                    {cardSample.map((card, index) => (
                        <CardList key={index} {...card}/>
                    ))}
                </div>
            </div>
        </div>
    );
};
