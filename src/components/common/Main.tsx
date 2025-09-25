'use client';
import React, {useEffect} from 'react';
import Link from "next/link";

export default function Main() {

    useEffect(() => {
        // setBrandColors('#00a27a'); // 프로젝트 메인컬러만 교체
    }, []);

    return (
        <div className="p-4">
            <li>
                <Link href="/tools/button">
                    button
                </Link>
            </li>
            <li>
                <Link href="/tools/list">
                    list
                </Link>
            </li>
        </div>
    );
};
