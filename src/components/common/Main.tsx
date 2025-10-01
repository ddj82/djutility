'use client';
import React from 'react';
import Link from "next/link";
import {Dot} from "lucide-react";

export default function Main() {

    return (
        <div>
            <ul className="font-bold underline">
                <li>
                    <Link href="/tools/alert">
                        <span className="flex justify-start items-center">
                            <Dot/>Alert
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href="/tools/list">
                        <span className="flex justify-start items-center">
                            <Dot/>List
                        </span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};
