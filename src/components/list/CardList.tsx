'use client';
import React from 'react';

interface CardProps {
    tag: string;
    title: string;
    content: string;
}

const CardList = ({tag, title, content}: CardProps) => {
    return (
        <div
            className="
            flex flex-col gap-2 p-4 rounded-xl
            shadow-lg scale-102
            hover:shadow-2xl hover:brightness-125 duration-200
            "
        >
            <div className="mb-4">
                <img src="/file.svg" className="w-48"/>
            </div>
            <div>{tag}</div>
            <div>{title}</div>
            <div>{content}</div>
        </div>
    );
};

export default CardList;
